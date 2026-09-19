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
public class ConflictValidationResponse {
    private boolean esValido;
    private int cantidadConflictos;
    @Builder.Default
    private List<String> conflictos = new ArrayList<>();
    @Builder.Default
    private List<String> advertencias = new ArrayList<>();
}
