# Google Keep
Google keep is an application that enables users to add notes into their individual account. It also allows users to update and delete their notes.

## Commands

- Start only api server at http://localhost:1234
```bash
./gradlew bootRun
```
- Build executable jar
```bash
./gradlew bootJar
```
- Run application with jar
```bash
java -jar -Dapplication.properties=application.properties -Djasypt.encryptor.password=dev-env-secret /build/libs/googlekeep-0.0.1-SNAPSHOT.jar
```
- Build the application
```bash
./gradlew build
```
- Encrypt with jasypt
```bash
java -cp ~/.m2/repository/org/jasypt/jasypt/1.9.2/jasypt-1.9.2.jar org.jasypt.intf.cli.JasyptPBEStringEncryptionCLI input=$data-to-encrypt password=$Set_password_to_decrypt algorithm=PBEWITHMD5ANDDES
```