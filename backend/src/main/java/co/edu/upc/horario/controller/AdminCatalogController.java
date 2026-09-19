package co.edu.upc.horario.controller;

import co.edu.upc.horario.dto.request.CourseGroupCreateRequest;
import co.edu.upc.horario.dto.response.*;
import co.edu.upc.horario.exception.BusinessRuleException;
import co.edu.upc.horario.exception.ResourceNotFoundException;
import co.edu.upc.horario.model.entity.*;
import co.edu.upc.horario.repository.*;
import co.edu.upc.horario.service.AcademicCatalogService;
import co.edu.upc.horario.service.CsvImportService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/admin")
@RequiredArgsConstructor
@Tag(name = "Administración", description = "Gestión de catálogo académico e importación masiva de datos")
public class AdminCatalogController {

    private final CsvImportService csvImportService;
    private final ProgramaRepository programaRepository;
    private final PeriodoAcademicoRepository periodoRepository;
    private final MateriaRepository materiaRepository;
    private final GrupoRepository grupoRepository;
    private final AcademicCatalogService catalogService;

    @PostMapping(value = "/import/csv", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Importar materias, grupos y sesiones masivamente desde archivo CSV de la UPC")
    public ResponseEntity<CsvImportResultDto> importCsv(@RequestParam("file") MultipartFile file) {
        return ResponseEntity.ok(csvImportService.importCsv(file));
    }

    @PostMapping("/programas")
    @Operation(summary = "Crear nuevo programa académico")
    public ResponseEntity<ProgramDto> createProgram(@RequestBody Programa programa) {
        if (programaRepository.existsByCodigoIgnoreCase(programa.getCodigo())) {
            throw new BusinessRuleException("Ya existe un programa con el código: " + programa.getCodigo());
        }
        Programa saved = programaRepository.save(programa);
        return ResponseEntity.status(HttpStatus.CREATED).body(catalogService.toProgramDto(saved));
    }

    @PostMapping("/periodos")
    @Operation(summary = "Crear nuevo período académico")
    public ResponseEntity<PeriodDto> createPeriod(@RequestBody PeriodoAcademico periodo) {
        if (periodoRepository.existsByNombreIgnoreCase(periodo.getNombre())) {
            throw new BusinessRuleException("Ya existe un período con el nombre: " + periodo.getNombre());
        }
        PeriodoAcademico saved = periodoRepository.save(periodo);
        return ResponseEntity.status(HttpStatus.CREATED).body(catalogService.toPeriodDto(saved));
    }

    @PostMapping("/materias")
    @Operation(summary = "Crear nueva materia en un programa")
    public ResponseEntity<SubjectDto> createSubject(@RequestBody Materia materia, @RequestParam Long programaId) {
        if (materiaRepository.existsByCodigoIgnoreCase(materia.getCodigo())) {
            throw new BusinessRuleException("Ya existe una materia con el código: " + materia.getCodigo());
        }
        Programa programa = programaRepository.findById(programaId)
                .orElseThrow(() -> new ResourceNotFoundException("Programa no encontrado"));
        materia.setPrograma(programa);
        Materia saved = materiaRepository.save(materia);
        return ResponseEntity.status(HttpStatus.CREATED).body(catalogService.toSubjectDto(saved, false));
    }

    @PostMapping("/grupos")
    @Operation(summary = "Crear un nuevo grupo con sus sesiones de clase asociadas")
    public ResponseEntity<GroupDto> createGroup(@Valid @RequestBody CourseGroupCreateRequest request) {
        Materia materia = materiaRepository.findById(request.getMateriaId())
                .orElseThrow(() -> new ResourceNotFoundException("Materia no encontrada"));
        PeriodoAcademico periodo = periodoRepository.findById(request.getPeriodoId())
                .orElseThrow(() -> new ResourceNotFoundException("Período no encontrado"));

        if (grupoRepository.existsByMateriaIdAndPeriodoIdAndNumeroGrupoIgnoreCase(
                request.getMateriaId(), request.getPeriodoId(), request.getNumeroGrupo())) {
            throw new BusinessRuleException(String.format("El grupo '%s' ya existe para la materia '%s' en este período",
                    request.getNumeroGrupo(), materia.getCodigo()));
        }

        Grupo grupo = Grupo.builder()
                .numeroGrupo(request.getNumeroGrupo().trim())
                .modalidad(request.getModalidad())
                .sede(request.getSede())
                .docente(request.getDocente())
                .aula(request.getAula())
                .estado(request.getEstado())
                .tieneDocenteAsignado(request.getTieneDocenteAsignado())
                .tieneRecursoFisicoAsignado(request.getTieneRecursoFisicoAsignado())
                .materia(materia)
                .periodo(periodo)
                .build();

        if (request.getSesiones() != null) {
            List<SesionClase> sesiones = request.getSesiones().stream()
                    .map(s -> SesionClase.builder()
                            .diaSemana(s.getDiaSemana())
                            .horaInicio(s.getHoraInicio())
                            .horaFin(s.getHoraFin())
                            .aula(s.getAula() != null ? s.getAula() : request.getAula())
                            .grupo(grupo)
                            .build())
                    .collect(Collectors.toList());
            grupo.setSesiones(sesiones);
        }

        Grupo saved = grupoRepository.save(grupo);
        return ResponseEntity.status(HttpStatus.CREATED).body(catalogService.toGroupDto(saved));
    }

    @DeleteMapping("/grupos/{id}")
    @Operation(summary = "Eliminar un grupo académico")
    public ResponseEntity<Void> deleteGroup(@PathVariable Long id) {
        Grupo grupo = grupoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Grupo no encontrado"));
        grupoRepository.delete(grupo);
        return ResponseEntity.noContent().build();
    }
}
