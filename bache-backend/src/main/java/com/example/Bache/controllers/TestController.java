package com.example.Bache.controllers;

import com.example.Bache.model.User;
import com.example.Bache.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TestController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "/")
    public void print() {
        System.out.println("Hola como estas");
    }

    @PostMapping(value = "/user")
    public User getUser() {
        return this.userRepository.save(new User("Matias", "Venditti"));
    }

    @GetMapping(value = "/users")
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }
}
