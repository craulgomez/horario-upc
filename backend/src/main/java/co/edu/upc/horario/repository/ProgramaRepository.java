package co.edu.upc.horario.repository;

import co.edu.upc.horario.model.entity.Programa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProgramaRepository extends JpaRepository<Programa, Long> {
    Optional<Programa> findByCodigoIgnoreCase(String codigo);
    List<Programa> findByActivoTrue();
    boolean existsByCodigoIgnoreCase(String codigo);
}
