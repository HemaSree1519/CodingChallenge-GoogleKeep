package com.googlekeep.googlekeep.service;

import com.googlekeep.googlekeep.exception.DuplicateEntryException;
import com.googlekeep.googlekeep.exception.ResourceNotFoundException;
import com.googlekeep.googlekeep.model.User;
import com.googlekeep.googlekeep.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> getUsers() {
        return userRepository.findAll();
    }
    public User addUser(User userDetails) {
        String email = userDetails.getEmail();
        Optional<User> user = userRepository.findById(email);
        user.toString();
        if (user.toString().equals("Optional.empty")) {
            return userRepository.save(userDetails);
        } else {
            throw new DuplicateEntryException("User", "email", email);
        }
    }

    public User getUser(String email) {
        return userRepository.findById(email)
                .orElseThrow(() -> new ResourceNotFoundException("user", "id", email));
    }
}
