package com.googlekeep.googlekeep.repository;

import com.googlekeep.googlekeep.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryUnitTest {
    @Autowired
    TestEntityManager entityManager;
    @Autowired
    UserRepository userRepository;
    private User user = new User();

    {
        user.setEmail("UnitTester@gmail.com");
        user.setUserName("test_user");
        user.setPassword("password");
    }

    @Test
    public void it_should_save_user() {
        user = entityManager.persistAndFlush(user);
        assertThat(userRepository.findById(user.getEmail()).isPresent()).isTrue();
    }
}
