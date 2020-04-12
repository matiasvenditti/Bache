package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@Getter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private long id;

    @Column
    @Setter private String name;

    @Column
    @Setter private String surname;

    @Column(unique = true)
    @Setter private String email;

    @Column
    @Setter private String password;

    @OneToMany(cascade = { CascadeType.ALL })
    @JoinColumn(name = "user_id")
    @Setter private Set<Event> events = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "user_group",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "group_id")
    )
    @Setter private Set<Group> groups = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private Set<Calendar> calendars = new HashSet<>();

    @ManyToOne
    @JoinColumn(name="theme_id")
    @Getter @Setter private Theme theme;

}
