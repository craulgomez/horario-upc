package co.edu.upc.horario.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProgramDto {
    private Long id;
    private String codigo;
    private String nombre;
    private String universidad;
    private Boolean activo;
}
