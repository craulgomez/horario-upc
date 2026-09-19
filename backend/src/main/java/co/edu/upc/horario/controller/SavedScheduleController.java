package co.edu.upc.horario.controller;

import co.edu.upc.horario.dto.request.SaveScheduleRequest;
import co.edu.upc.horario.service.IcsExportService;
import co.edu.upc.horario.service.SavedScheduleService;
import co.edu.upc.horario.service.SavedScheduleService.SavedScheduleResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/api/v1/schedules")
@RequiredArgsConstructor
@Tag(name = "Horarios Guardados", description = "Persistencia, consulta y exportación de horarios de los estudiantes")
public class SavedScheduleController {

    private final SavedScheduleService savedScheduleService;
    private final IcsExportService icsExportService;

    @PostMapping("/save")
    @Operation(summary = "Guardar una combinación de horario favorita")
    public ResponseEntity<SavedScheduleResponseDto> saveSchedule(
            @Valid @RequestBody SaveScheduleRequest request,
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedScheduleService.saveSchedule(request, userDetails.getUsername()));
    }

    @GetMapping("/saved")
    @Operation(summary = "Listar todos los horarios guardados por el estudiante autenticado")
    public ResponseEntity<List<SavedScheduleResponseDto>> getSavedSchedules(
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(savedScheduleService.getSavedSchedules(userDetails.getUsername()));
    }

    @GetMapping("/saved/{id}")
    @Operation(summary = "Obtener el detalle de un horario guardado específico")
    public ResponseEntity<SavedScheduleResponseDto> getSavedScheduleById(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(savedScheduleService.getSavedScheduleById(id, userDetails.getUsername()));
    }

    @DeleteMapping("/saved/{id}")
    @Operation(summary = "Eliminar un horario guardado")
    public ResponseEntity<Void> deleteSavedSchedule(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        savedScheduleService.deleteSavedSchedule(id, userDetails.getUsername());
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/export/ics")
    @Operation(summary = "Exportar horario en formato de calendario estándar (.ics / RFC 5545)")
    public ResponseEntity<byte[]> exportToIcs(@PathVariable Long id) {
        String icsContent = icsExportService.generateIcsForSavedSchedule(id);
        byte[] bytes = icsContent.getBytes(StandardCharsets.UTF_8);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"horario-upc-" + id + ".ics\"")
                .contentType(MediaType.parseMediaType("text/calendar; charset=UTF-8"))
                .body(bytes);
    }
}
