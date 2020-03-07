package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@NoArgsConstructor
public class Day {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter private long id;

    @Column
    @Getter @Setter private String day;

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "users")
    @Getter @Setter private Set<User> users;

}
