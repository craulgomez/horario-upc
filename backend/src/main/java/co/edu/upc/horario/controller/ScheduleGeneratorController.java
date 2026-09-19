package co.edu.upc.horario.controller;

import co.edu.upc.horario.dto.request.ConflictValidationRequest;
import co.edu.upc.horario.dto.request.GenerateScheduleRequest;
import co.edu.upc.horario.dto.response.ConflictValidationResponse;
import co.edu.upc.horario.dto.response.GeneratedScheduleOptionDto;
import co.edu.upc.horario.model.entity.Usuario;
import co.edu.upc.horario.repository.UsuarioRepository;
import co.edu.upc.horario.service.ScheduleEngineService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/schedules")
@RequiredArgsConstructor
@Tag(name = "Generador de Horarios", description = "Algoritmo de resolución de restricciones (CSP) y detección de conflictos")
public class ScheduleGeneratorController {

    private final ScheduleEngineService scheduleEngineService;
    private final UsuarioRepository usuarioRepository;

    @PostMapping("/validate-conflicts")
    @Operation(summary = "Validar en tiempo real si una lista de grupos tiene choques o alertas")
    public ResponseEntity<ConflictValidationResponse> validateConflicts(@Valid @RequestBody ConflictValidationRequest request) {
        return ResponseEntity.ok(scheduleEngineService.validateGroupConflicts(request.getGrupoIds()));
    }

    @PostMapping("/generate")
    @Operation(summary = "Generar combinaciones automáticas de horario compatibles ordenadas por puntaje")
    public ResponseEntity<List<GeneratedScheduleOptionDto>> generateSchedules(
            @Valid @RequestBody GenerateScheduleRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {

        Usuario usuario = null;
        if (userDetails != null) {
            usuario = usuarioRepository.findByCorreoIgnoreCase(userDetails.getUsername()).orElse(null);
        }

        List<GeneratedScheduleOptionDto> opciones = scheduleEngineService.generateSchedules(request, usuario);
        return ResponseEntity.ok(opciones);
    }
}
