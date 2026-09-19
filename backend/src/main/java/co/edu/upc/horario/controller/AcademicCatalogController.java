package co.edu.upc.horario.controller;

import co.edu.upc.horario.dto.response.*;
import co.edu.upc.horario.service.AcademicCatalogService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/catalog")
@RequiredArgsConstructor
@Tag(name = "Catálogo Académico", description = "Consulta de programas, períodos, materias y grupos")
public class AcademicCatalogController {

    private final AcademicCatalogService catalogService;

    @GetMapping("/programas")
    @Operation(summary = "Listar programas académicos activos")
    public ResponseEntity<List<ProgramDto>> getPrograms() {
        return ResponseEntity.ok(catalogService.getPrograms());
    }

    @GetMapping("/periodos")
    @Operation(summary = "Listar períodos académicos")
    public ResponseEntity<List<PeriodDto>> getPeriods() {
        return ResponseEntity.ok(catalogService.getPeriods());
    }

    @GetMapping("/periodos/activo")
    @Operation(summary = "Obtener el período académico activo por defecto")
    public ResponseEntity<PeriodDto> getActivePeriod() {
        return ResponseEntity.ok(catalogService.getActivePeriod());
    }

    @GetMapping("/materias")
    @Operation(summary = "Buscar materias filtrando por programa, semestre y texto")
    public ResponseEntity<List<SubjectDto>> searchSubjects(
            @RequestParam(required = false) Long programaId,
            @RequestParam(required = false) Integer semestre,
            @RequestParam(required = false) String search) {
        return ResponseEntity.ok(catalogService.searchSubjects(programaId, semestre, search));
    }

    @GetMapping("/materias/{materiaId}/grupos")
    @Operation(summary = "Consultar grupos y sesiones de una materia en un período académico")
    public ResponseEntity<SubjectDto> getSubjectGroups(
            @PathVariable Long materiaId,
            @RequestParam Long periodoId) {
        return ResponseEntity.ok(catalogService.getSubjectGroups(materiaId, periodoId));
    }

    @GetMapping("/grupos/{grupoId}")
    @Operation(summary = "Obtener detalle y sesiones de un grupo específico")
    public ResponseEntity<GroupDto> getGroupDetails(@PathVariable Long grupoId) {
        return ResponseEntity.ok(catalogService.getGroupDetails(grupoId));
    }
}
