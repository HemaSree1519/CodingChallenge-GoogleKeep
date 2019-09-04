package com.googlekeep.googlekeep.service;

import com.googlekeep.googlekeep.model.User;
import com.googlekeep.googlekeep.repository.UserRepository;
import com.noteSaver.notesaver.exception.DuplicateEntryException;
import com.noteSaver.notesaver.exception.ResourceNotFoundException;
import com.noteSaver.notesaver.model.User;
import com.noteSaver.notesaver.repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.util.AssertionErrors.assertEquals;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceUnitTest {
    @InjectMocks
    UserService userService;
    @Mock
    UserRepository userRepository;
    private User user = new User();

    {
        user.setEmail("tester@gmail.com");
        user.setUserName("tester");
        user.setPassword("password");
        user.setRole("admin");
    }

    @Test
    public void when_getUsers_it_should_return_list_of_users() {
        User user2 = new User();
        user.setEmail("tester2@gmail.com");
        user.setUserName("tester2");
        user.setPassword("password");
        user.setRole("admin");
        List<User> list = Arrays.asList(user, user2);
        when(userRepository.findAll()).thenReturn(list);
        assertEquals(list, userService.getUsers());
    }
}