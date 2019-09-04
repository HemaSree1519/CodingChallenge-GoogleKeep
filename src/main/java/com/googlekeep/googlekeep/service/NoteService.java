package com.googlekeep.googlekeep.service;

import com.googlekeep.googlekeep.model.Note;
import com.googlekeep.googlekeep.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoteService {
    @Autowired
    NoteRepository noteRepository;

    Note addNote(Note note) {
        return noteRepository.save(note);
    }
}
