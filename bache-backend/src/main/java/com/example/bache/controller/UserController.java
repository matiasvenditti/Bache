package com.example.bache.controller;

import com.example.bache.dto.UserDTO;
import com.example.bache.model.User;
import com.example.bache.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<User> readAll() {
        return userService.readAll();
    }

    @GetMapping(path="/{id}")
    public User readByUser(@PathVariable("id") long id) {
        return userService.read(id);
    }

    @PostMapping
    public User createUser(@RequestBody UserDTO userDTO) {
        final User user = modelMapper.map(userDTO, User.class);
        return userService.create(user);
    }

    @DeleteMapping(path="/{id}")
    public long deleteUser(@PathVariable("id") long id) {
        return userService.delete(id);
    }

    @PutMapping(path="/{id}")
    public User updateUser(@PathVariable("id") long id, @RequestBody User user) {
        return userService.update(id, user);
    }

    @GetMapping(path ="/email/{email}")
    public User readByEmail(@RequestParam String email) {
        return userService.readByEmail(email);
    }


}
