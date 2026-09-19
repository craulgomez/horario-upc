package co.edu.upc.horario.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GeneratedScheduleOptionDto {
    private String idOpcion;
    private int puntaje; // 0 a 100
    private int totalCreditos;
    private int diasConClase;
    private int diasLibres;
    private int horasMuertas;
    
    @JsonFormat(pattern = "HH:mm")
    private LocalTime horaMasTemprana;

    @JsonFormat(pattern = "HH:mm")
    private LocalTime horaMasTardia;

    private boolean tieneAlertas;
    @Builder.Default
    private List<String> alertas = new ArrayList<>();

    private ScoreBreakdownDto desglosePuntaje;

    @Builder.Default
    private List<GroupDto> grupos = new ArrayList<>();
}
