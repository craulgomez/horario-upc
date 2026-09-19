package co.edu.upc.horario.repository;

import co.edu.upc.horario.model.entity.Grupo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GrupoRepository extends JpaRepository<Grupo, Long> {

    @Query("SELECT DISTINCT g FROM Grupo g LEFT JOIN FETCH g.sesiones WHERE g.materia.id = :materiaId AND g.periodo.id = :periodoId")
    List<Grupo> findByMateriaIdAndPeriodoIdWithSesiones(@Param("materiaId") Long materiaId, @Param("periodoId") Long periodoId);

    @Query("SELECT DISTINCT g FROM Grupo g LEFT JOIN FETCH g.sesiones WHERE g.materia.id IN :materiaIds AND g.periodo.id = :periodoId AND g.estado = 'ACTIVO'")
    List<Grupo> findByMateriaIdsAndPeriodoIdWithSesiones(@Param("materiaIds") List<Long> materiaIds, @Param("periodoId") Long periodoId);

    @Query("SELECT DISTINCT g FROM Grupo g LEFT JOIN FETCH g.sesiones WHERE g.id IN :ids")
    List<Grupo> findAllByIdWithSesiones(@Param("ids") List<Long> ids);

    @Query("SELECT DISTINCT g FROM Grupo g LEFT JOIN FETCH g.sesiones WHERE g.id = :id")
    Optional<Grupo> findByIdWithSesiones(@Param("id") Long id);

    @Query("SELECT DISTINCT g FROM Grupo g LEFT JOIN FETCH g.sesiones WHERE g.periodo.id = :periodoId")
    List<Grupo> findByPeriodoIdWithSesiones(@Param("periodoId") Long periodoId);

    Optional<Grupo> findByMateriaCodigoIgnoreCaseAndPeriodoNombreIgnoreCaseAndNumeroGrupoIgnoreCase(
            String codigoMateria, String nombrePeriodo, String numeroGrupo);

    boolean existsByMateriaIdAndPeriodoIdAndNumeroGrupoIgnoreCase(Long materiaId, Long periodoId, String numeroGrupo);
}
