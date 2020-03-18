package com.example.bache.repository;

import com.example.bache.model.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select u from User u where u.email = ?1")
    List<User> findByUsername(String username, Pageable pageable);

    User findByEmail(String email);
}
