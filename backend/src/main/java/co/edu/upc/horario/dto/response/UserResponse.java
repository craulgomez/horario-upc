package co.edu.upc.horario.dto.response;

import co.edu.upc.horario.model.enums.Rol;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserResponse {
    private Long id;
    private String nombre;
    private String correo;
    private Rol rol;
}
