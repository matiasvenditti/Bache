package com.example.bache.service;

import com.example.bache.model.User;
import org.springframework.stereotype.Service;

public interface UserService extends CrudService<User> {
    User readByEmail(String email);
}
