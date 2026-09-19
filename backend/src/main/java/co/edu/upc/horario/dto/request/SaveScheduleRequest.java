package co.edu.upc.horario.dto.request;

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
public class SaveScheduleRequest {

    @NotBlank(message = "Debe asignar un nombre al horario guardado")
    private String nombre;

    @NotNull(message = "El período académico es obligatorio")
    private Long periodoId;

    @NotEmpty(message = "Debe incluir al menos un grupo en el horario")
    private List<Long> grupoIds;

    private Integer puntaje;
    private String desglosePuntajeJson;
}
