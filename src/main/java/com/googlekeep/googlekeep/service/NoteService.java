package com.googlekeep.googlekeep.service;

import com.googlekeep.googlekeep.model.Note;
import com.googlekeep.googlekeep.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    @Autowired
    NoteRepository noteRepository;

    List<Note> getNotes(String email) {
        return noteRepository.findByEmail(email);

    }
    Note addNote(Note note) {
        return noteRepository.save(note);
    }
}
