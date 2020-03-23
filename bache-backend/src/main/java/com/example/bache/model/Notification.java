package com.example.bache.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
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
    @JoinColumn(name="sender_id")
    @Getter @Setter private User sender;

    @ManyToOne()
    @JoinColumn(name="receiver_id")
    @Getter @Setter private User receiver;


}
