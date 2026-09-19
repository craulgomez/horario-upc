package co.edu.upc.horario.service;

import co.edu.upc.horario.dto.request.UserPreferenceRequest;
import co.edu.upc.horario.exception.ResourceNotFoundException;
import co.edu.upc.horario.model.entity.PreferenciaHorario;
import co.edu.upc.horario.model.entity.Usuario;
import co.edu.upc.horario.repository.PreferenciaHorarioRepository;
import co.edu.upc.horario.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserPreferenceService {

    private final PreferenciaHorarioRepository preferenciaRepository;
    private final UsuarioRepository usuarioRepository;

    @Transactional(readOnly = true)
    public UserPreferenceRequest getUserPreferences(String userEmail) {
        Usuario usuario = usuarioRepository.findByCorreoIgnoreCase(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));

        return preferenciaRepository.findByUsuarioId(usuario.getId())
                .map(this::toDto)
                .orElseGet(() -> UserPreferenceRequest.builder().build());
    }

    @Transactional
    public UserPreferenceRequest updateUserPreferences(UserPreferenceRequest request, String userEmail) {
        Usuario usuario = usuarioRepository.findByCorreoIgnoreCase(userEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));

        PreferenciaHorario pref = preferenciaRepository.findByUsuarioId(usuario.getId())
                .orElseGet(() -> PreferenciaHorario.builder().usuario(usuario).build());

        if (request.getPrefiereManana() != null) pref.setPrefiereManana(request.getPrefiereManana());
        if (request.getPrefiereTarde() != null) pref.setPrefiereTarde(request.getPrefiereTarde());
        if (request.getEvitarNocturna() != null) pref.setEvitarNocturna(request.getEvitarNocturna());
        if (request.getEvitarSabado() != null) pref.setEvitarSabado(request.getEvitarSabado());
        if (request.getQuiereDiaLibre() != null) pref.setQuiereDiaLibre(request.getQuiereDiaLibre());
        if (request.getMinimizarHuecos() != null) pref.setMinimizarHuecos(request.getMinimizarHuecos());
        if (request.getModalidadPreferida() != null) pref.setModalidadPreferida(request.getModalidadPreferida());
        if (request.getHoraMaximaSalida() != null) pref.setHoraMaximaSalida(request.getHoraMaximaSalida());

        PreferenciaHorario saved = preferenciaRepository.save(pref);
        return toDto(saved);
    }

    private UserPreferenceRequest toDto(PreferenciaHorario p) {
        return UserPreferenceRequest.builder()
                .prefiereManana(p.getPrefiereManana())
                .prefiereTarde(p.getPrefiereTarde())
                .evitarNocturna(p.getEvitarNocturna())
                .evitarSabado(p.getEvitarSabado())
                .quiereDiaLibre(p.getQuiereDiaLibre())
                .minimizarHuecos(p.getMinimizarHuecos())
                .modalidadPreferida(p.getModalidadPreferida())
                .horaMaximaSalida(p.getHoraMaximaSalida())
                .build();
    }
}
