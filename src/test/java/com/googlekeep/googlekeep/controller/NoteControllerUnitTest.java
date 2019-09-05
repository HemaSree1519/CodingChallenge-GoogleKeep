package com.googlekeep.googlekeep.controller;

import com.googlekeep.googlekeep.model.Note;
import com.googlekeep.googlekeep.repository.NoteRepository;
import com.googlekeep.googlekeep.service.NoteService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;


import static junit.framework.TestCase.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@WebMvcTest(NoteController.class)
public class NoteControllerUnitTest {
    @Autowired
    private MockMvc mvc;

    @MockBean
    private NoteRepository noteRepository;
    @MockBean
    private NoteController noteController;
    @MockBean
    private NoteService noteService;
    private String noteJson;
    private Note note = new Note();

    {
        note.setId((long) 1);
        note.setEmail("tester@gmail.com");
        note.setTitle("TestTitle");
        note.setContent("This is a testing note");
        noteJson = "{\"id\":1,\"title\":\"TestTitle\",\"content\":\"This is a testing note\"," +
                "\"email\":\"tester@gmail.com\",\"updatedAt\":null,\"createdAt\":null}";
    }

    @Test
    public void givenNote_whenAddNote_thenReturnSuccessResponse() throws Exception {
        when(noteService.addNote(Mockito.any(Note.class))).thenReturn(note);
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/notesaver/notes/add")
                .accept(MediaType.APPLICATION_JSON).content(noteJson)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult result = mvc.perform(requestBuilder).andReturn();
        assertEquals(HttpStatus.OK.value(), result.getResponse().getStatus());
        assertEquals(noteJson, result.getResponse().getContentAsString());
    }
}
