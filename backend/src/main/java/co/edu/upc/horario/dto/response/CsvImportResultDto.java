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
public class CsvImportResultDto {
    private int totalFilasLeidas;
    private int materiasProcesadas;
    private int gruposProcesados;
    private int sesionesProcesadas;
    private int gruposConNDOC;
    private int gruposConNREF;
    @Builder.Default
    private List<String> errores = new ArrayList<>();
    @Builder.Default
    private List<String> advertencias = new ArrayList<>();
}
