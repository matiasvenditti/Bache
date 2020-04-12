package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    @Getter private long id;

    @Column
    @Getter @Setter private String name;

    @Column
    @Getter @Setter private String surname;

    @Column(unique = true)
    @Getter @Setter private String email;

    @Column
    @Getter @Setter private String password;

    @OneToMany(cascade = { CascadeType.ALL })
    @JoinColumn(name = "user_id")
    @Getter @Setter private Set<Event> events = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "user_group",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "group_id")
    )
    @Getter @Setter private Set<Group> groups = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @Getter private Set<Calendar> calendars = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @Getter private Set<Notification> notifications = new HashSet<>();

    @OneToMany(mappedBy="sender")
    @Getter private Set<Notification> emittedNotifications = new HashSet<>();

}
