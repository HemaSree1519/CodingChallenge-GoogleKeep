package com.googlekeep.googlekeep.service;

import com.googlekeep.googlekeep.exception.DuplicateEntryException;
import com.googlekeep.googlekeep.exception.ResourceNotFoundException;
import com.googlekeep.googlekeep.model.User;
import com.googlekeep.googlekeep.repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import java.util.Arrays;
import java.util.List;

import static junit.framework.TestCase.assertEquals;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

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
        when(userRepository.save(any(User.class))).thenReturn(user);
        User created = userService.addUser(user);
        assertThat(created.getEmail()).isSameAs(user.getEmail());
    }
    @Test(expected = DuplicateEntryException.class)
    public void when_addUser_with_duplicate_entry_it_should_throw_exception() {
        when(userRepository.findById(user.getEmail())).thenThrow(new DuplicateEntryException("User", "email", user.getEmail()));
        userService.addUser(user);
    }
    @Test(expected = ResourceNotFoundException.class)
    public void when_getUser_with_given_non_existing_email_it_should_throw_exception() {
        userService.getUser("DummyUser@gmail.com");
    }
}