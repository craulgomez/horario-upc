package co.edu.upc.horario.dto.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConflictValidationRequest {
    @NotEmpty(message = "La lista de grupos a validar no puede estar vacía")
    private List<Long> grupoIds;
}
