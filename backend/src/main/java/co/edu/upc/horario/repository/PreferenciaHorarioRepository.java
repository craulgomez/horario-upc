package co.edu.upc.horario.repository;

import co.edu.upc.horario.model.entity.PreferenciaHorario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PreferenciaHorarioRepository extends JpaRepository<PreferenciaHorario, Long> {
    Optional<PreferenciaHorario> findByUsuarioId(Long usuarioId);
}
