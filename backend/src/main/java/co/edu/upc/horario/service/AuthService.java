package co.edu.upc.horario.service;

import co.edu.upc.horario.dto.request.LoginRequest;
import co.edu.upc.horario.dto.request.RegisterRequest;
import co.edu.upc.horario.dto.response.AuthResponse;
import co.edu.upc.horario.dto.response.UserResponse;
import co.edu.upc.horario.exception.BusinessRuleException;
import co.edu.upc.horario.exception.ResourceNotFoundException;
import co.edu.upc.horario.model.entity.PreferenciaHorario;
import co.edu.upc.horario.model.entity.Usuario;
import co.edu.upc.horario.model.enums.Rol;
import co.edu.upc.horario.repository.PreferenciaHorarioRepository;
import co.edu.upc.horario.repository.UsuarioRepository;
import co.edu.upc.horario.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PreferenciaHorarioRepository preferenciaRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;

    @Transactional
    public AuthResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getCorreo().trim().toLowerCase(), request.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        Usuario usuario = usuarioRepository.findByCorreoIgnoreCase(request.getCorreo().trim())
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado con correo: " + request.getCorreo()));

        String token = tokenProvider.generateToken(authentication, usuario.getId());

        return AuthResponse.builder()
                .token(token)
                .tipo("Bearer")
                .usuario(toUserResponse(usuario))
                .build();
    }

    @Transactional
    public AuthResponse register(RegisterRequest request) {
        String correo = request.getCorreo().trim().toLowerCase();

        if (usuarioRepository.existsByCorreoIgnoreCase(correo)) {
            throw new BusinessRuleException("Ya existe una cuenta registrada con el correo: " + correo);
        }

        Usuario usuario = Usuario.builder()
                .nombre(request.getNombre().trim())
                .correo(correo)
                .passwordHash(passwordEncoder.encode(request.getPassword()))
                .rol(request.getRol() != null ? request.getRol() : Rol.ESTUDIANTE)
                .build();

        Usuario savedUser = usuarioRepository.save(usuario);

        // Crear preferencias por defecto
        PreferenciaHorario pref = PreferenciaHorario.builder()
                .usuario(savedUser)
                .build();
        preferenciaRepository.save(pref);

        // Autenticar automáticamente tras el registro
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(correo, request.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.generateToken(authentication, savedUser.getId());

        return AuthResponse.builder()
                .token(token)
                .tipo("Bearer")
                .usuario(toUserResponse(savedUser))
                .build();
    }

    @Transactional(readOnly = true)
    public UserResponse getCurrentUser(String email) {
        Usuario usuario = usuarioRepository.findByCorreoIgnoreCase(email)
                .orElseThrow(() -> new ResourceNotFoundException("Usuario no encontrado"));
        return toUserResponse(usuario);
    }

    private UserResponse toUserResponse(Usuario usuario) {
        return UserResponse.builder()
                .id(usuario.getId())
                .nombre(usuario.getNombre())
                .correo(usuario.getCorreo())
                .rol(usuario.getRol())
                .build();
    }
}
