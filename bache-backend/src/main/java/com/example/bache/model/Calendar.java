package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
public class Calendar {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "calendar_id")
    @Getter private long id;

    @Column(name = "initial_hour")
    @Getter @Setter private double startHour;

    @Column(name = "end_hour")
    @Getter @Setter private double endHour;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "calendar_id")
    @Getter @Setter private Set<Day> days = new HashSet<>();

    @OneToOne(mappedBy = "calendar")
    private User user;

    public Calendar(Set<Day> calendarDays) {
        this.startHour = 9;
        this.endHour = 20;
        this.days = calendarDays;
    }
}
