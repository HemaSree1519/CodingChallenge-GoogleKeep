package com.googlekeep.googlekeep.service;

import com.googlekeep.googlekeep.model.User;
import com.googlekeep.googlekeep.repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

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
    @Test
    public void when_addUser_it_should_return_saved_user() {
        when(userRepository.findById("any@email")).thenReturn(java.util.Optional.ofNullable(user));
        when(userRepository.save(any(User.class))).thenReturn(user);
        User created = userService.addUser(user);
        assertThat(created.getEmail()).isSameAs(user.getEmail());
    }
}