package com.googlekeep.googlekeep.controller;

import com.googlekeep.googlekeep.GooglekeepApplication;
import com.googlekeep.googlekeep.model.Note;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;
import java.util.Date;
import static junit.framework.TestCase.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = GooglekeepApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(locations = "classpath:application-test.properties")
public class NoteControllerITTest {
    @LocalServerPort
    private int port;
    private TestRestTemplate restTemplate = new TestRestTemplate();
    private HttpHeaders headers = new HttpHeaders();
    private Date date = new Date();
    private Note note = new Note();

    {
        note.setId((long) 1);
        note.setEmail("testing@gmail.com");
        note.setTitle("TestTitle");
        note.setContent("This is a testing note");
        note.setCreatedAt(date);
        note.setUpdatedAt(date);
        String noteJson = "{\"id\":1,\"title\":\"TestTitle\",\"content\":\"This is a testing note\"," +
                "\"email\":\"tester@gmail.com\",\"updatedAt\":" + date + ",\"createdAt\":" + date + "}";
    }

    @Test
    public void addNoteTest() {
        HttpEntity<Note> entity = new HttpEntity<>(note, headers);
        ResponseEntity<String> response = restTemplate.exchange(
                "http://localhost:" + port + "/googlekeep/notes/add",
                HttpMethod.POST, entity, String.class);
        assertEquals(HttpStatus.OK.value(), response.getStatusCodeValue());
    }
}
