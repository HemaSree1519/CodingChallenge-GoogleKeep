package com.googlekeep.googlekeep.controller;

import com.googlekeep.googlekeep.exception.DuplicateEntryException;
import com.googlekeep.googlekeep.model.User;
import com.googlekeep.googlekeep.repository.UserRepository;
import com.googlekeep.googlekeep.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.Objects;

import static junit.framework.TestCase.assertEquals;
import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerUnitTest {
    private String userJson;
    @Autowired
    private MockMvc mvc;
    @MockBean
    private UserRepository userRepository;
    @MockBean
    private UserService userService;
    private User user = new User();

    {
        user.setEmail("testMail@gmail.com");
        user.setUserName("tester");
        user.setPassword("password");
        user.setRole("admin");
        userJson = "{\"userName\":\"tester\",\"password\":\"password\"," +
                "\"email\":\"testMail@gmail.com\",\"role\":\"admin\"}";
    }

    @Test
    public void givenUser_whenAddUser_thenReturnOkResponse() throws Exception {
        when(userService.addUser(Mockito.any(User.class))).thenReturn(user);
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/googlekeep/users/add")
                .accept(MediaType.APPLICATION_JSON).content(userJson)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult result = mvc.perform(requestBuilder).andReturn();
        assertEquals(HttpStatus.OK.value(), result.getResponse().getStatus());
        assertEquals(userJson, result.getResponse().getContentAsString());
    }
    @Test
    public void givenDuplicateUser_whenAddUser_thenThrowException() throws Exception {
        when(userService.addUser(Mockito.any(User.class)))
                .thenThrow(new DuplicateEntryException("User", "email", "duplicateMail@gmail.com"));
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                .post("/googlekeep/users/add")
                .accept(MediaType.APPLICATION_JSON).content(userJson)
                .contentType(MediaType.APPLICATION_JSON);
        MvcResult result = mvc.perform(requestBuilder).andReturn();
        String expectedException = "User already exist with email : 'duplicateMail@gmail.com'";
        assertEquals(expectedException, Objects.requireNonNull(result.getResolvedException()).getMessage());
    }
}