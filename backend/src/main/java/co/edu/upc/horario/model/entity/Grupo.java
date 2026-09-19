package co.edu.upc.horario.model.entity;

import co.edu.upc.horario.model.enums.EstadoGrupo;
import co.edu.upc.horario.model.enums.Modalidad;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "grupos", uniqueConstraints = {
    @UniqueConstraint(name = "uq_grupo_materia_periodo", columnNames = {"materia_id", "periodo_id", "numero_grupo"})
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Grupo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "numero_grupo", nullable = false, length = 80)
    private String numeroGrupo; // Ej: '01-CAMPUS'

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    @Builder.Default
    private Modalidad modalidad = Modalidad.PRESENCIAL;

    @Column(nullable = false, length = 80)
    @Builder.Default
    private String sede = "CAMPUS";

    @Column(nullable = false, length = 200)
    @Builder.Default
    private String docente = "NDOC";

    @Column(nullable = false, length = 120)
    @Builder.Default
    private String aula = "NREF";

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    @Builder.Default
    private EstadoGrupo estado = EstadoGrupo.ACTIVO;

    @Column(name = "tiene_docente_asignado", nullable = false)
    @Builder.Default
    private Boolean tieneDocenteAsignado = true;

    @Column(name = "tiene_recurso_fisico_asignado", nullable = false)
    @Builder.Default
    private Boolean tieneRecursoFisicoAsignado = true;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "materia_id", nullable = false)
    private Materia materia;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "periodo_id", nullable = false)
    private PeriodoAcademico periodo;

    @OneToMany(mappedBy = "grupo", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<SesionClase> sesiones = new ArrayList<>();
}
