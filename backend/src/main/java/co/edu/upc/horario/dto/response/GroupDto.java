package co.edu.upc.horario.dto.response;

import co.edu.upc.horario.model.enums.EstadoGrupo;
import co.edu.upc.horario.model.enums.Modalidad;
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
public class GroupDto {
    private Long id;
    private String numeroGrupo;
    private Modalidad modalidad;
    private String sede;
    private String docente;
    private String aula;
    private EstadoGrupo estado;
    private Boolean tieneDocenteAsignado;
    private Boolean tieneRecursoFisicoAsignado;

    private Long materiaId;
    private String materiaCodigo;
    private String materiaNombre;
    private Integer materiaCreditos;
    private Integer semestreSugerido;

    private Long periodoId;
    private String periodoNombre;

    @Builder.Default
    private List<ClassSessionDto> sesiones = new ArrayList<>();
}
