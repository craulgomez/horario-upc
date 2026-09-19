package co.edu.upc.horario.service;

import co.edu.upc.horario.dto.response.*;
import co.edu.upc.horario.exception.ResourceNotFoundException;
import co.edu.upc.horario.model.entity.*;
import co.edu.upc.horario.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AcademicCatalogService {

    private final ProgramaRepository programaRepository;
    private final PeriodoAcademicoRepository periodoRepository;
    private final MateriaRepository materiaRepository;
    private final GrupoRepository grupoRepository;

    @Transactional(readOnly = true)
    public List<ProgramDto> getPrograms() {
        return programaRepository.findByActivoTrue().stream()
                .map(this::toProgramDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<PeriodDto> getPeriods() {
        return periodoRepository.findAll().stream()
                .map(this::toPeriodDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PeriodDto getActivePeriod() {
        PeriodoAcademico periodo = periodoRepository.findFirstByActivoTrueOrderByIdDesc()
                .orElseThrow(() -> new ResourceNotFoundException("No se encontró ningún período académico activo"));
        return toPeriodDto(periodo);
    }

    @Transactional(readOnly = true)
    public List<SubjectDto> searchSubjects(Long programaId, Integer semestre, String search) {
        List<Materia> materias = materiaRepository.searchMaterias(programaId, semestre, search);
        return materias.stream()
                .map(m -> toSubjectDto(m, false))
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public SubjectDto getSubjectWithGroups(Long materiaId, Long periodoId) {
        Materia materia = materiaRepository.findById(materiaId)
                .orElseThrow(() -> new ResourceNotFoundException("Materia no encontrada con id: " + materiaId));

        SubjectDto dto = toSubjectDto(materia, false);
        List<Grupo> grupos = grupoRepository.findByMateriaIdAndPeriodoIdWithSesiones(materiaId, periodoId);
        dto.setGrupos(grupos.stream().map(this::toGroupDto).collect(Collectors.toList()));
        dto.setCantidadGrupos(grupos.size());
        return dto;
    }

    @Transactional(readOnly = true)
    public GroupDto getGroupDetails(Long grupoId) {
        Grupo grupo = grupoRepository.findByIdWithSesiones(grupoId)
                .orElseThrow(() -> new ResourceNotFoundException("Grupo no encontrado con id: " + grupoId));
        return toGroupDto(grupo);
    }

    public ProgramDto toProgramDto(Programa p) {
        return ProgramDto.builder()
                .id(p.getId())
                .codigo(p.getCodigo())
                .nombre(p.getNombre())
                .universidad(p.getUniversidad())
                .activo(p.getActivo())
                .build();
    }

    public PeriodDto toPeriodDto(PeriodoAcademico p) {
        return PeriodDto.builder()
                .id(p.getId())
                .nombre(p.getNombre())
                .fechaInicio(p.getFechaInicio())
                .fechaFin(p.getFechaFin())
                .activo(p.getActivo())
                .build();
    }

    public SubjectDto toSubjectDto(Materia m, boolean includeGroups) {
        SubjectDto.SubjectDtoBuilder builder = SubjectDto.builder()
                .id(m.getId())
                .codigo(m.getCodigo())
                .nombre(m.getNombre())
                .creditos(m.getCreditos())
                .semestreSugerido(m.getSemestreSugerido())
                .programaId(m.getPrograma() != null ? m.getPrograma().getId() : null)
                .programaNombre(m.getPrograma() != null ? m.getPrograma().getNombre() : null)
                .activa(m.getActiva())
                .cantidadGrupos(m.getGrupos() != null ? m.getGrupos().size() : 0);

        if (includeGroups && m.getGrupos() != null) {
            builder.grupos(m.getGrupos().stream().map(this::toGroupDto).collect(Collectors.toList()));
        }

        return builder.build();
    }

    public GroupDto toGroupDto(Grupo g) {
        return GroupDto.builder()
                .id(g.getId())
                .numeroGrupo(g.getNumeroGrupo())
                .modalidad(g.getModalidad())
                .sede(g.getSede())
                .docente(g.getDocente())
                .aula(g.getAula())
                .estado(g.getEstado())
                .tieneDocenteAsignado(g.getTieneDocenteAsignado())
                .tieneRecursoFisicoAsignado(g.getTieneRecursoFisicoAsignado())
                .materiaId(g.getMateria().getId())
                .materiaCodigo(g.getMateria().getCodigo())
                .materiaNombre(g.getMateria().getNombre())
                .materiaCreditos(g.getMateria().getCreditos())
                .semestreSugerido(g.getMateria().getSemestreSugerido())
                .periodoId(g.getPeriodo().getId())
                .periodoNombre(g.getPeriodo().getNombre())
                .sesiones(g.getSesiones().stream().map(this::toClassSessionDto).collect(Collectors.toList()))
                .build();
    }

    public ClassSessionDto toClassSessionDto(SesionClase s) {
        return ClassSessionDto.builder()
                .id(s.getId())
                .diaSemana(s.getDiaSemana())
                .horaInicio(s.getHoraInicio())
                .horaFin(s.getHoraFin())
                .aula(s.getAula())
                .build();
    }
}
