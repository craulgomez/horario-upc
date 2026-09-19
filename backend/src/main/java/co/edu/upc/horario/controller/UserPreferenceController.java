package co.edu.upc.horario.controller;

import co.edu.upc.horario.dto.request.UserPreferenceRequest;
import co.edu.upc.horario.service.UserPreferenceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/preferences")
@RequiredArgsConstructor
@Tag(name = "Preferencias del Estudiante", description = "Configuración de ponderaciones y criterios de conveniencia horaria")
public class UserPreferenceController {

    private final UserPreferenceService preferenceService;

    @GetMapping
    @Operation(summary = "Obtener las preferencias actuales del estudiante")
    public ResponseEntity<UserPreferenceRequest> getPreferences(@AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(preferenceService.getUserPreferences(userDetails.getUsername()));
    }

    @PutMapping
    @Operation(summary = "Actualizar las preferencias del estudiante")
    public ResponseEntity<UserPreferenceRequest> updatePreferences(
            @Valid @RequestBody UserPreferenceRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(preferenceService.updatePreferences(request, userDetails.getUsername()));
    }
}
