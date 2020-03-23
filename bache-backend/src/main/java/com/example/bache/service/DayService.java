package com.example.bache.service;

import com.example.bache.model.Day;

import java.util.Set;

public interface DayService {
    Set<Day> insertMany(Set<Day> days);
}
