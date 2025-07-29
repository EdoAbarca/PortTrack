# Etapa de build
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /build
COPY pom.xml .
COPY src ./src
RUN mvn clean package -e -DskipTests

FROM eclipse-temurin:17-jre
WORKDIR /app
COPY --from=build /build/target/*.jar app.jar
EXPOSE 8082
ENTRYPOINT ["java", "-jar", "app.jar"]


# # STAGE 2: Analyze modules needed from the jar
# FROM eclipse-temurin:17-jdk-alpine AS deps
# WORKDIR /app
# COPY --from=build /build/target/*.jar app.jar
# RUN jdeps --multi-release 17 --print-module-deps --ignore-missing-deps app.jar > moduledeps.txt
#
#
# # STAGE 3: Build minimal runtime using jlink
# FROM eclipse-temurin:17-jdk-alpine AS jre
# WORKDIR /app
# COPY --from=deps /app/moduledeps.txt .
# RUN jlink \
#     --add-modules $(cat moduledeps.txt),java.desktop \
#     --strip-debug --compress=2 --no-header-files --no-man-pages \
#     --output /customjre
#
# # STAGE 4: Final lightweight image with custom JRE and app jar
# FROM alpine:latest
# RUN apk add --no-cache libstdc++ libgcc
# ENV JAVA_HOME=/customjre
# ENV PATH=$JAVA_HOME/bin:$PATH
# WORKDIR /app
# COPY --from=jre /customjre/ $JAVA_HOME/
# COPY --from=build /build/target/*.jar app.jar
# EXPOSE 8081
# ENTRYPOINT ["java", "-jar", "app.jar"]
