package com.googlekeep.googlekeep.controller;


import com.googlekeep.googlekeep.model.Note;
import com.googlekeep.googlekeep.repository.NoteRepository;
import com.googlekeep.googlekeep.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/googlekeep")
public class NoteController {

    @Autowired
    NoteRepository noteRepository;
    @Autowired
    NoteService noteService;

    // Add a new note
    @PostMapping("/notes/add")
    public Note addNote(@Valid @RequestBody Note note) {

        return noteService.addNote(note);
    }

    // Get all notes
    @RequestMapping("/notes/all/{email}")
    public List<Note> getNotes(@PathVariable(value = "email") String email) {
        return noteService.getNotes(email);
    }

}