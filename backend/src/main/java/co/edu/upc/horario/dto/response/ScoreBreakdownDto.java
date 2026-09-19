package co.edu.upc.horario.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ScoreBreakdownDto {
    private int puntajeTotal; // 0 a 100
    private int horasMuertasTotales;
    private int diasLibresTotales;
    private boolean cumpleJornadaPreferida;
    private boolean sinSabado;
    private boolean sinNocturnas;
    private boolean todosDocenteAsignado;
    private boolean todosRecursoAsignado;
    private boolean cumpleModalidadPreferida;
    private boolean cumpleHoraSalida;

    @Builder.Default
    private List<String> razonesPositivas = new ArrayList<>();

    @Builder.Default
    private List<String> penalizaciones = new ArrayList<>();
}
