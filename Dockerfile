FROM java:8
VOLUME /tmp
ARG JAR_FILE=build/libs/googlekeep-0.0.1-SNAPSHOT.jar
COPY build/libs/googlekeep-0.0.1-SNAPSHOT.jar googlekeep.jar
ENTRYPOINT ["java","-jar","/googlekeep.jar"]
EXPOSE 1234
