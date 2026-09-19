package co.edu.upc.horario.dto.request;

import co.edu.upc.horario.model.enums.EstadoGrupo;
import co.edu.upc.horario.model.enums.Modalidad;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseGroupCreateRequest {

    @NotNull(message = "El ID de la materia es obligatorio")
    private Long materiaId;

    @NotNull(message = "El ID del período académico es obligatorio")
    private Long periodoId;

    @NotBlank(message = "El número o identificador del grupo es obligatorio")
    private String numeroGrupo; // Ej: '01-CAMPUS'

    private Modalidad modalidad = Modalidad.PRESENCIAL;
    private String sede = "CAMPUS";
    private String docente = "NDOC";
    private String aula = "NREF";
    private EstadoGrupo estado = EstadoGrupo.ACTIVO;
    private Boolean tieneDocenteAsignado = true;
    private Boolean tieneRecursoFisicoAsignado = true;

    @NotEmpty(message = "El grupo debe tener al menos una sesión de clase semanal")
    private List<ClassSessionCreateRequest> sesiones;
}
