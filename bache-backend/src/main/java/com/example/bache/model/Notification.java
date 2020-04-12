package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter private long id;

    @Column
    @Getter @Setter private String subject;

    @Column
    @Getter @Setter private String description;

    @Column
    @Getter @Setter private boolean seen;

    @ManyToOne
    @JoinColumn(name="user_id")
    @Getter @Setter private User sender;


}
