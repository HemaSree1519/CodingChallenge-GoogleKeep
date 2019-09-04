package com.googlekeep.googlekeep.repository;

import com.googlekeep.googlekeep.model.Note;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.Date;

@RunWith(SpringRunner.class)
@DataJpaTest
public class NoteRepositoryUnitTest {
    @Autowired
    TestEntityManager entityManager;
    @Autowired
    NoteRepository noteRepository;
    private Note note = new Note();

    {
        note.setEmail("UnitTester@gmail.com");
        note.setCreatedAt(new Date());
        note.setUpdatedAt(new Date());
    }

    @Test
    public void it_should_save_note() {
        note = entityManager.persistAndFlush(note);
        assertThat(noteRepository.findById(note.getId()).isPresent()).isTrue();
    }

    @Test
    public void it_should_find_note_byId() {
        note = entityManager.persistAndFlush(note);
        assertThat(noteRepository.findById(note.getId()).get()).isEqualTo(note);
    }

    @Test
    public void it_should_find_note_byEmail() {
        note = entityManager.persistAndFlush(note);
        assertThat(noteRepository.findByEmail(note.getEmail()).get(0)).isEqualTo(note);

    }
}