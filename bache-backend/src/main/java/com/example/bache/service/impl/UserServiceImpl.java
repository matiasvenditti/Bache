package com.example.bache.service.impl;

import com.example.bache.exception.EntityNotFoundException;
import com.example.bache.exception.InvalidArgumentException;
import com.example.bache.model.User;
import com.example.bache.repository.UserRepository;
import com.example.bache.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<User> readAll() {
        return userRepository.findAll();
    }

    @Override
    public User read(long id) {
        return userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    @Override
    public User create(User entity) {
        entity.setPassword(passwordEncoder.encode(entity.getPassword()));
        return userRepository.save(entity);
    }

    @Override
    public long delete(long delete) {
        userRepository.deleteById(delete);
        return delete;
    }

    @Override
    public User update(long id, User updated) {
        if (id == updated.getId()) {
            final User currentUser = userRepository.findById(id).orElseThrow(EntityNotFoundException::new);
            currentUser.setEmail(updated.getEmail());
            currentUser.setName(updated.getName());
            currentUser.setSurname(updated.getSurname());
            currentUser.setPassword(passwordEncoder.encode(updated.getPassword()));
            return userRepository.save(currentUser);
        } else {
            throw new InvalidArgumentException();
        }
    }
}
