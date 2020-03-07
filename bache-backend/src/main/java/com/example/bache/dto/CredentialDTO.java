package com.example.bache.dto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

public class CredentialDTO {

    private final String username;
    private final String password;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public CredentialDTO(String username, String password) {
        this.username = username;
        this.password = passwordEncoder.encode(password);
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
