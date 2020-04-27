package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
public class Day {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter private long id;

    @Column
    @Getter @Setter private String dayName;

    public Day(String dayName) {
        this.dayName = dayName;
    }
}
