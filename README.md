
# Google Keep
Google keep is an application that enables users to add notes into their individual account. It also allows users to update and delete their notes.

**Note**: Please refer ***how_to.md*** to get started with Google Keep.

#### Run the REST server individually
###### Start the server
```bash
./gradlew bootRun
```
Starts REST server running on tomcat servlet at http://localhost:1234
###### Builds the project
```bash
./gradlew build
```
###### Start REST server executing jar
```bash
java -jar build/libs/googlekeep-0.0.1-SNAPSHOT.jar
```