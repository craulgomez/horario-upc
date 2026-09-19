package co.edu.upc.horario.service;

import co.edu.upc.horario.dto.request.SaveScheduleRequest;
import co.edu.upc.horario.dto.response.GroupDto;
import co.edu.upc.horario.exception.BusinessRuleException;
import co.edu.upc.horario.exception.ResourceNotFoundException;
import co.edu.upc.horario.model.entity.*;
import co.edu.upc.horario.repository.*;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SavedScheduleService {

    private final HorarioGuardadoRepository horarioGuardadoRepository;
    private final GrupoRepository grupoRepository;
    private final PeriodoAcademicoRepository periodoRepository;
    private final UsuarioRepository usuarioRepository;
    private final AcademicCatalogService catalogService;
    private final ScheduleEngineService scheduleEngineService;

    @Transactional
    public SavedScheduleResponseDto saveSchedule(SaveScheduleRequest request, String userEmail) {
        Usuario usuario = usuarioRepository.findByCorreoIgnoreCase(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));

        PeriodoAcademico periodo = periodoRepository.findById(request.getPeriodoId())
                .orElseThrow(() -> new ResourceNotFoundException("Período académico no encontrado"));

        List<Grupo> grupos = grupoRepository.findAllByIdWithSesiones(request.getGrupoIds());
        if (grupos.isEmpty()) {
            throw new BusinessRuleException("Debe seleccionar al menos un grupo válido para guardar el horario.");
        }

        // Validar que no contenga choques
        var conflictCheck = scheduleEngineService.validateGroupConflicts(request.getGrupoIds());
        if (!conflictCheck.isEsValido()) {
            throw new BusinessRuleException("No se puede guardar un horario con conflictos: " + String.join(" | ", conflictCheck.getConflictos()));
        }

        HorarioGuardado horario = HorarioGuardado.builder()
                .nombre(request.getNombre().trim())
                .puntaje(request.getPuntaje() != null ? request.getPuntaje() : 100)
                .desglosePuntajeJson(request.getDesglosePuntajeJson())
                .usuario(usuario)
                .periodo(periodo)
                .grupos(grupos)
                .build();

        HorarioGuardado guardado = horarioGuardadoRepository.save(horario);
        return toSavedScheduleResponse(guardado);
    }

    @Transactional(readOnly = true)
    public List<SavedScheduleResponseDto> getSavedSchedules(String userEmail) {
        Usuario usuario = usuarioRepository.findByCorreoIgnoreCase(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));

        return horarioGuardadoRepository.findByUsuarioIdWithGrupos(usuario.getId()).stream()
                .map(this::toSavedScheduleResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public SavedScheduleResponseDto getSavedScheduleById(Long id, String userEmail) {
        Usuario usuario = usuarioRepository.findByCorreoIgnoreCase(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));

        HorarioGuardado horario = horarioGuardadoRepository.findByIdAndUsuarioIdWithGrupos(id, usuario.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Horario guardado no encontrado"));

        return toSavedScheduleResponse(horario);
    }

    @Transactional
    public void deleteSavedSchedule(Long id, String userEmail) {
        Usuario usuario = usuarioRepository.findByCorreoIgnoreCase(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));

        HorarioGuardado horario = horarioGuardadoRepository.findByIdAndUsuarioIdWithGrupos(id, usuario.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Horario guardado no encontrado"));

        horarioGuardadoRepository.delete(horario);
    }

    private SavedScheduleResponseDto toSavedScheduleResponse(HorarioGuardado h) {
        return SavedScheduleResponseDto.builder()
                .id(h.getId())
                .nombre(h.getNombre())
                .puntaje(h.getPuntaje())
                .desglosePuntajeJson(h.getDesglosePuntajeJson())
                .periodoId(h.getPeriodo().getId())
                .periodoNombre(h.getPeriodo().getNombre())
                .createdAt(h.getCreatedAt())
                .grupos(h.getGrupos().stream().map(catalogService::toGroupDto).collect(Collectors.toList()))
                .build();
    }

    @Data
    @Builder
    public static class SavedScheduleResponseDto {
        private Long id;
        private String nombre;
        private Integer puntaje;
        private String desglosePuntajeJson;
        private Long periodoId;
        private String periodoNombre;
        private OffsetDateTime createdAt;
        private List<GroupDto> grupos;
    }
}
