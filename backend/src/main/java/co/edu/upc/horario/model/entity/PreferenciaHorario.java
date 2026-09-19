package co.edu.upc.horario.model.entity;

import co.edu.upc.horario.model.enums.Modalidad;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalTime;

@Entity
@Table(name = "preferencias_horario")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PreferenciaHorario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false, unique = true)
    private Usuario usuario;

    @Column(name = "prefiere_manana", nullable = false)
    @Builder.Default
    private Boolean prefiereManana = true;

    @Column(name = "prefiere_tarde", nullable = false)
    @Builder.Default
    private Boolean prefiereTarde = false;

    @Column(name = "evitar_nocturna", nullable = false)
    @Builder.Default
    private Boolean evitarNocturna = true;

    @Column(name = "evitar_sabado", nullable = false)
    @Builder.Default
    private Boolean evitarSabado = true;

    @Column(name = "quiere_dia_libre", nullable = false)
    @Builder.Default
    private Boolean quiereDiaLibre = false;

    @Column(name = "minimizar_huecos", nullable = false)
    @Builder.Default
    private Boolean minimizarHuecos = true;

    @Enumerated(EnumType.STRING)
    @Column(name = "modalidad_preferida", nullable = false, length = 30)
    @Builder.Default
    private Modalidad modalidadPreferida = Modalidad.PRESENCIAL;

    @Column(name = "hora_maxima_salida")
    @Builder.Default
    private LocalTime horaMaximaSalida = LocalTime.of(18, 0);
}
