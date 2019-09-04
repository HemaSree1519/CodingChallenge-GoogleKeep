package com.googlekeep.googlekeep.repository;


import com.googlekeep.googlekeep.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

}