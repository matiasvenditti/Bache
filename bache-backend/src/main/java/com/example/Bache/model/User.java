package com.example.Bache.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String surname;

    public User() {}

    public User(String name, String surname) {
        this.name = name;
        this.surname = surname;
    }
}
