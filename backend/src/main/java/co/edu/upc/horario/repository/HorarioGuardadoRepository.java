package co.edu.upc.horario.repository;

import co.edu.upc.horario.model.entity.HorarioGuardado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HorarioGuardadoRepository extends JpaRepository<HorarioGuardado, Long> {

    @Query("SELECT DISTINCT h FROM HorarioGuardado h LEFT JOIN FETCH h.grupos g LEFT JOIN FETCH g.sesiones LEFT JOIN FETCH g.materia WHERE h.usuario.id = :usuarioId ORDER BY h.createdAt DESC")
    List<HorarioGuardado> findByUsuarioIdWithGrupos(@Param("usuarioId") Long usuarioId);

    @Query("SELECT DISTINCT h FROM HorarioGuardado h LEFT JOIN FETCH h.grupos g LEFT JOIN FETCH g.sesiones LEFT JOIN FETCH g.materia WHERE h.id = :id AND h.usuario.id = :usuarioId")
    Optional<HorarioGuardado> findByIdAndUsuarioIdWithGrupos(@Param("id") Long id, @Param("usuarioId") Long usuarioId);

    @Query("SELECT DISTINCT h FROM HorarioGuardado h LEFT JOIN FETCH h.grupos g LEFT JOIN FETCH g.sesiones LEFT JOIN FETCH g.materia WHERE h.id = :id")
    Optional<HorarioGuardado> findByIdWithGrupos(@Param("id") Long id);
}
