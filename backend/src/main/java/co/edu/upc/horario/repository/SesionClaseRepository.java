package co.edu.upc.horario.repository;

import co.edu.upc.horario.model.entity.SesionClase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SesionClaseRepository extends JpaRepository<SesionClase, Long> {
    List<SesionClase> findByGrupoId(Long grupoId);
    void deleteByGrupoId(Long grupoId);
}
