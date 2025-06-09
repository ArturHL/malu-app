FROM openjdk:17-jdk-alpine

WORKDIR /app

# 1. Copia solo los archivos de configuración primero
COPY build.gradle settings.gradle gradlew ./
COPY gradle/wrapper/ gradle/wrapper/

# 2. Descarga dependencias (con --refresh-dependencies)
RUN ./gradlew dependencies --refresh-dependencies

# 3. Copia el resto del código
COPY . .

# 4. Construye la aplicación
RUN ./gradlew build -x test && \
    cp build/libs/*-SNAPSHOT.jar /app/app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]