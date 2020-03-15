package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter private long id;

    @Column
    @Getter @Setter private String name;

    @Column
    @Getter @Setter private String surname;

    @Column(unique = true)
    @Getter @Setter private String email;

    @Column
    @Getter @Setter private String password;

}
