package co.edu.upc.horario.dto.request;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GenerateScheduleRequest {

    @NotNull(message = "El período académico es obligatorio")
    private Long periodoId;

    @NotEmpty(message = "Debe seleccionar al menos una materia para generar horarios")
    private List<Long> materiaIds;

    // Preferencias opcionales que sobreescriben las guardadas del usuario para esta simulación
    private UserPreferenceRequest preferencias;

    // Límite de resultados a retornar (por defecto 20, máx 50)
    private Integer limite = 20;
}
