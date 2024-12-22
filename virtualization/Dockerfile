# Stage 1: Build the JAR file
FROM gradle:8.11-jdk17 AS build
WORKDIR /app
COPY build.gradle.kts settings.gradle.kts ./
COPY src ./src
RUN gradle build --no-daemon  --scan  -x test

# Stage 2: Create the final image
FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/build/libs/virtualization-0.0.1-SNAPSHOT.jar /virtualization.jar
#EXPOSE 2222
ENTRYPOINT ["java", "-jar", "/virtualization.jar"]
