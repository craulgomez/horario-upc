package co.edu.upc.horario.dto.request;

import co.edu.upc.horario.model.enums.Modalidad;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserPreferenceRequest {

    private Boolean prefiereManana = true;
    private Boolean prefiereTarde = false;
    private Boolean evitarNocturna = true;
    private Boolean evitarSabado = true;
    private Boolean quiereDiaLibre = false;
    private Boolean minimizarHuecos = true;
    private Modalidad modalidadPreferida = Modalidad.PRESENCIAL;

    @JsonFormat(pattern = "HH:mm")
    private LocalTime horaMaximaSalida = LocalTime.of(18, 0);
}
