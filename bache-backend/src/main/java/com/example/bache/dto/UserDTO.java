package com.example.bache.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserDTO {

    private String name;
    private String surname;
    private String email;
    private String password;

    public UserDTO(String name, String surname, String email, String password) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
}
