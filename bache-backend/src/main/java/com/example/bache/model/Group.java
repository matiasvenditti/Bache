package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "group_table")
@NoArgsConstructor
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "group_id")
    @Getter private long id;

    @Column
    @Getter @Setter private String title;

    @Column
    @Getter @Setter private String description;

    @ManyToMany(mappedBy = "groups")
    @Getter @Setter private Set<User> users = new HashSet<>();

    @ManyToMany(mappedBy = "groups")
    @Getter @Setter private Set<Event> events = new HashSet<>();

}
