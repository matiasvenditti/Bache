package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;
import java.util.Date;

@Entity
@NoArgsConstructor
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "event_id")
    @Getter private long id;

    @Column
    @Getter @Setter private String title;

    @Column
    @Getter @Setter private String description;

    @Column(name = "init_hour")
    @Getter @Setter private Date init;

    @Column(name = "end_hour")
    @Getter @Setter private Date end;

    @Column
    @Getter @Setter private boolean isPublic;

    @ManyToMany(mappedBy = "events")
    @Getter @Setter private Set<User> users = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "event_group",
            joinColumns = @JoinColumn(name = "event_id"),
            inverseJoinColumns = @JoinColumn(name = "group_id")
    )
    @Getter @Setter private Set<Group> groups = new HashSet<>();
}
