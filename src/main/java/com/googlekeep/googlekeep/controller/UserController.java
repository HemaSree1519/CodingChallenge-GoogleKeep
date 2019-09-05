package com.googlekeep.googlekeep.controller;

import com.googlekeep.googlekeep.model.User;
import com.googlekeep.googlekeep.repository.UserRepository;
import com.googlekeep.googlekeep.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/googlekeep")
public class UserController {

    @Autowired
    UserRepository userRepository;
    @Autowired
    UserService userService;

    // Create a new user
    @PostMapping("/users/add")
    public User addUser(@Valid @RequestBody User userDetails) {
        return userService.addUser(userDetails);
    }

}