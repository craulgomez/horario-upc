package co.edu.upc.horario;

import co.edu.upc.horario.model.entity.Usuario;
import co.edu.upc.horario.model.enums.Rol;
import co.edu.upc.horario.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class HorarioUpcApplication {

    public static void main(String[] args) {
        SpringApplication.run(HorarioUpcApplication.class, args);
    }

    @Bean
    public CommandLineRunner initDefaultUsers(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            // Sincronizar o crear administrador por defecto
            usuarioRepository.findByCorreoIgnoreCase("admin@unicesar.edu.co").ifPresentOrElse(
                admin -> {
                    admin.setPasswordHash(passwordEncoder.encode("Admin123*"));
                    usuarioRepository.save(admin);
                },
                () -> {
                    Usuario admin = Usuario.builder()
                            .nombre("Administrador UPC")
                            .correo("admin@unicesar.edu.co")
                            .passwordHash(passwordEncoder.encode("Admin123*"))
                            .rol(Rol.ADMIN)
                            .build();
                    usuarioRepository.save(admin);
                }
            );

            // Sincronizar o crear estudiante por defecto
            usuarioRepository.findByCorreoIgnoreCase("estudiante@unicesar.edu.co").ifPresentOrElse(
                estudiante -> {
                    estudiante.setPasswordHash(passwordEncoder.encode("Estudiante123*"));
                    usuarioRepository.save(estudiante);
                },
                () -> {
                    Usuario estudiante = Usuario.builder()
                            .nombre("Estudiante Sistemas")
                            .correo("estudiante@unicesar.edu.co")
                            .passwordHash(passwordEncoder.encode("Estudiante123*"))
                            .rol(Rol.ESTUDIANTE)
                            .build();
                    usuarioRepository.save(estudiante);
                }
            );
        };
    }
}
