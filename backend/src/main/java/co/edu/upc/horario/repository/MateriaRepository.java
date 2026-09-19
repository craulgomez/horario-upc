package co.edu.upc.horario.repository;

import co.edu.upc.horario.model.entity.Materia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MateriaRepository extends JpaRepository<Materia, Long> {

    Optional<Materia> findByCodigoIgnoreCase(String codigo);

    List<Materia> findByProgramaIdAndActivaTrueOrderBySemestreSugeridoAscCodigoAsc(Long programaId);

    List<Materia> findByActivaTrueOrderBySemestreSugeridoAscCodigoAsc();

    @Query("SELECT m FROM Materia m WHERE m.activa = true " +
           "AND (:programaId IS NULL OR m.programa.id = :programaId) " +
           "AND (:semestre IS NULL OR m.semestreSugerido = :semestre) " +
           "AND (:search IS NULL OR LOWER(m.codigo) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(m.nombre) LIKE LOWER(CONCAT('%', :search, '%'))) " +
           "ORDER BY m.semestreSugerido ASC, m.codigo ASC")
    List<Materia> searchMaterias(
            @Param("programaId") Long programaId,
            @Param("semestre") Integer semestre,
            @Param("search") String search
    );

    boolean existsByCodigoIgnoreCase(String codigo);
}
