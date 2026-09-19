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
public class SubjectDto {
    private Long id;
    private String codigo;
    private String nombre;
    private Integer creditos;
    private Integer semestreSugerido;
    private Long programaId;
    private String programaNombre;
    private Boolean activa;
    private Integer cantidadGrupos;

    @Builder.Default
    private List<GroupDto> grupos = new ArrayList<>();
}
