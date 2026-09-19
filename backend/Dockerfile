# Multi-stage Dockerfile para HorarioUPC Backend (Spring Boot 3 / Java 21)
FROM maven:3.9.8-eclipse-temurin-21-alpine AS builder
WORKDIR /app

# Cachear dependencias copiando pom.xml primero
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copiar código fuente y compilar artefacto
COPY src ./src
RUN mvn clean package -DskipTests -B

# Etapa final: Imagen ligera de ejecución
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Crear usuario sin privilegios por seguridad
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

COPY --from=builder /app/target/horario-upc-backend-1.0.0.jar app.jar

ENV SERVER_PORT=8080
EXPOSE 8080

ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]
