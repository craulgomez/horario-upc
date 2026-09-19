package co.edu.upc.horario.service;

import co.edu.upc.horario.dto.response.CsvImportResultDto;
import co.edu.upc.horario.exception.BusinessRuleException;
import co.edu.upc.horario.model.entity.*;
import co.edu.upc.horario.model.enums.DiaSemana;
import co.edu.upc.horario.model.enums.EstadoGrupo;
import co.edu.upc.horario.model.enums.Modalidad;
import co.edu.upc.horario.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class CsvImportService {

    private final ProgramaRepository programaRepository;
    private final PeriodoAcademicoRepository periodoRepository;
    private final MateriaRepository materiaRepository;
    private final GrupoRepository grupoRepository;
    private final SesionClaseRepository sesionClaseRepository;

    private static final DateTimeFormatter TIME_FORMAT = DateTimeFormatter.ofPattern("HH:mm");

    @Transactional
    public CsvImportResultDto importCsv(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new BusinessRuleException("El archivo CSV subido está vacío.");
        }

        CsvImportResultDto result = CsvImportResultDto.builder().build();
        List<String> errores = new ArrayList<>();
        List<String> advertencias = new ArrayList<>();

        // Asegurar programa base
        Programa programa = programaRepository.findByCodigoIgnoreCase("ING-SISTEMAS")
                .orElseGet(() -> programaRepository.save(
                        Programa.builder()
                                .codigo("ING-SISTEMAS")
                                .nombre("Ingeniería de Sistemas")
                                .universidad("Universidad Popular del Cesar")
                                .activo(true)
                                .build()
                ));

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream(), StandardCharsets.UTF_8));
             CSVParser csvParser = new CSVParser(reader, CSVFormat.DEFAULT
                     .builder()
                     .setHeader()
                     .setSkipHeaderRecord(true)
                     .setIgnoreHeaderCase(true)
                     .setTrim(true)
                     .build())) {

            Set<String> materiasSet = new HashSet<>();
            Set<String> gruposSet = new HashSet<>();
            int totalFilas = 0;
            int ndocCount = 0;
            int nrefCount = 0;

            for (CSVRecord record : csvParser) {
                totalFilas++;
                try {
                    String matCodigo = getRecordValue(record, "MateriaCodigo", "CODIGO");
                    String matNombre = getRecordValue(record, "MateriaNombre", "MATERIA", "NOMBRE");
                    String creditosStr = getRecordValue(record, "Creditos", "CREDITOS");
                    String semestreStr = getRecordValue(record, "Semestre", "SEMESTRE");
                    String periodoNombre = getRecordValue(record, "Periodo", "PERIODO");
                    String numGrupo = getRecordValue(record, "Grupo", "GRUPO");
                    String modalidadStr = getRecordValue(record, "Modalidad", "MODALIDAD");
                    String sedeStr = getRecordValue(record, "Sede", "SEDE");
                    String docenteStr = getRecordValue(record, "Docente", "DOCENTE");
                    String aulaStr = getRecordValue(record, "Aula", "SALON", "AULA");
                    String diaStr = getRecordValue(record, "Dia", "DIA");
                    String horaInicioStr = getRecordValue(record, "HoraInicio", "HORA_INICIO", "INICIO");
                    String horaFinStr = getRecordValue(record, "HoraFin", "HORA_FIN", "FIN");

                    if (matCodigo == null || numGrupo == null || diaStr == null) {
                        errores.add(String.format("Fila %d ignorada: MateriaCodigo, Grupo y Dia son obligatorios.", totalFilas));
                        continue;
                    }

                    // 1. Periodo
                    String pName = (periodoNombre != null && !periodoNombre.isBlank()) ? periodoNombre : "2026-2";
                    PeriodoAcademico periodo = periodoRepository.findByNombreIgnoreCase(pName)
                            .orElseGet(() -> periodoRepository.save(
                                    PeriodoAcademico.builder()
                                            .nombre(pName)
                                            .fechaInicio(LocalDate.of(2026, 8, 3))
                                            .fechaFin(LocalDate.of(2026, 12, 15))
                                            .activo(true)
                                            .build()
                            ));

                    // 2. Materia
                    int creditos = parseIntSafe(creditosStr, 3);
                    int semestre = parseIntSafe(semestreStr, 1);
                    Materia materia = materiaRepository.findByCodigoIgnoreCase(matCodigo)
                            .orElseGet(() -> materiaRepository.save(
                                    Materia.builder()
                                            .codigo(matCodigo.toUpperCase())
                                            .nombre(matNombre != null ? matNombre : matCodigo)
                                            .creditos(creditos)
                                            .semestreSugerido(semestre)
                                            .programa(programa)
                                            .activa(true)
                                            .build()
                            ));
                    materiasSet.add(matCodigo);

                    // 3. Grupo
                    boolean isNdoc = docenteStr == null || docenteStr.isBlank() || docenteStr.toUpperCase().contains("NDOC");
                    boolean isNref = aulaStr == null || aulaStr.isBlank() || aulaStr.toUpperCase().contains("NREF");
                    if (isNdoc) ndocCount++;
                    if (isNref) nrefCount++;

                    Modalidad modalidad = parseModalidad(modalidadStr);
                    String finalDocente = isNdoc ? "NDOC" : docenteStr;
                    String finalAula = isNref ? "NREF" : aulaStr;
                    String finalSede = (sedeStr != null && !sedeStr.isBlank()) ? sedeStr.toUpperCase() : "CAMPUS";

                    Grupo grupo = grupoRepository.findByMateriaCodigoIgnoreCaseAndPeriodoNombreIgnoreCaseAndNumeroGrupoIgnoreCase(
                            materia.getCodigo(), periodo.getNombre(), numGrupo)
                            .orElseGet(() -> grupoRepository.save(
                                    Grupo.builder()
                                            .numeroGrupo(numGrupo)
                                            .modalidad(modalidad)
                                            .sede(finalSede)
                                            .docente(finalDocente)
                                            .aula(finalAula)
                                            .estado(EstadoGrupo.ACTIVO)
                                            .tieneDocenteAsignado(!isNdoc)
                                            .tieneRecursoFisicoAsignado(!isNref)
                                            .materia(materia)
                                            .periodo(periodo)
                                            .build()
                            ));
                    gruposSet.add(materia.getCodigo() + "-" + numGrupo);

                    // 4. Sesión de clase
                    DiaSemana dia = parseDia(diaStr);
                    LocalTime horaInicio = parseTimeSafe(horaInicioStr, LocalTime.of(8, 0));
                    LocalTime horaFin = parseTimeSafe(horaFinStr, LocalTime.of(10, 0));

                    SesionClase sesion = SesionClase.builder()
                            .diaSemana(dia)
                            .horaInicio(horaInicio)
                            .horaFin(horaFin)
                            .aula(finalAula)
                            .grupo(grupo)
                            .build();

                    sesionClaseRepository.save(sesion);

                } catch (Exception ex) {
                    errores.add(String.format("Error en fila %d: %s", totalFilas, ex.getMessage()));
                }
            }

            result.setTotalFilasLeidas(totalFilas);
            result.setMateriasProcesadas(materiasSet.size());
            result.setGruposProcesados(gruposSet.size());
            result.setGruposConNDOC(ndocCount);
            result.setGruposConNREF(nrefCount);
            result.setErrores(errores);
            result.setAdvertencias(advertencias);

        } catch (Exception e) {
            throw new BusinessRuleException("Error fatal procesando el archivo CSV: " + e.getMessage());
        }

        return result;
    }

    private String getRecordValue(CSVRecord record, String... possibleHeaders) {
        for (String h : possibleHeaders) {
            if (record.isMapped(h)) {
                String val = record.get(h);
                if (val != null && !val.isBlank()) return val.trim();
            }
        }
        return null;
    }

    private int parseIntSafe(String str, int defaultVal) {
        if (str == null) return defaultVal;
        try {
            return Integer.parseInt(str.trim());
        } catch (NumberFormatException e) {
            return defaultVal;
        }
    }

    private LocalTime parseTimeSafe(String str, LocalTime defaultVal) {
        if (str == null) return defaultVal;
        try {
            String trimmed = str.trim();
            if (trimmed.length() == 5) {
                return LocalTime.parse(trimmed, TIME_FORMAT);
            }
            return LocalTime.parse(trimmed);
        } catch (Exception e) {
            return defaultVal;
        }
    }

    private Modalidad parseModalidad(String mod) {
        if (mod == null) return Modalidad.PRESENCIAL;
        String m = mod.toUpperCase();
        if (m.contains("VIRTUAL")) return Modalidad.VIRTUAL;
        if (m.contains("HIBRID") || m.contains("MIXTA")) return Modalidad.HIBRIDA;
        return Modalidad.PRESENCIAL;
    }

    private DiaSemana parseDia(String dia) {
        if (dia == null) return DiaSemana.LUNES;
        String d = dia.toUpperCase().trim();
        if (d.startsWith("LUN")) return DiaSemana.LUNES;
        if (d.startsWith("MAR")) return DiaSemana.MARTES;
        if (d.startsWith("MIE") || d.startsWith("MIÉ")) return DiaSemana.MIERCOLES;
        if (d.startsWith("JUE")) return DiaSemana.JUEVES;
        if (d.startsWith("VIE")) return DiaSemana.VIERNES;
        if (d.startsWith("SAB") || d.startsWith("SÁB")) return DiaSemana.SABADO;
        if (d.startsWith("DOM")) return DiaSemana.DOMINGO;
        return DiaSemana.LUNES;
    }
}
