package com.googlekeep.googlekeep.service;

import com.googlekeep.googlekeep.model.Note;
import com.googlekeep.googlekeep.repository.NoteRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import java.util.Date;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class NoteServiceUnitTest {
    private Note note = new Note();
    @InjectMocks
    private NoteService noteService;
    @Mock
    private NoteRepository noteRepository;


    {
        note.setId((long) 1);
        note.setEmail("UnitTester@gmail.com");
        note.setCreatedAt(new Date());
        note.setUpdatedAt(new Date());
    }

    @Test
    public void when_addNote_it_should_return_saved_note() {
        when(noteRepository.save(note)).thenReturn(note);
        Note created = noteService.addNote(note);
        assertThat(created.getEmail()).isSameAs(note.getEmail());
    }
}
