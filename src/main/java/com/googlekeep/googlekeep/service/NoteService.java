package com.googlekeep.googlekeep.service;

import com.googlekeep.googlekeep.exception.ResourceNotFoundException;
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
    Note updateNote(Long noteId, Note noteDetails) {

        Note note = noteRepository.findById(noteId)
                .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));
        System.out.println(note);
        note.setTitle(noteDetails.getTitle());
        note.setContent(noteDetails.getContent());
        note.setUpdatedAt(noteDetails.getUpdatedAt());
        return noteRepository.save(note);
    }
}
