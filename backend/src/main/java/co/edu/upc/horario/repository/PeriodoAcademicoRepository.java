package co.edu.upc.horario.repository;

import co.edu.upc.horario.model.entity.PeriodoAcademico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PeriodoAcademicoRepository extends JpaRepository<PeriodoAcademico, Long> {
    Optional<PeriodoAcademico> findByNombreIgnoreCase(String nombre);
    Optional<PeriodoAcademico> findFirstByActivoTrueOrderByIdDesc();
    List<PeriodoAcademico> findByActivoTrue();
    boolean existsByNombreIgnoreCase(String nombre);
}
