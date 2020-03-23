package com.example.bache.service.impl;

import com.example.bache.model.Day;
import com.example.bache.repository.DayRepository;
import com.example.bache.service.DayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class DayServiceImpl implements DayService {

    @Autowired
    private DayRepository dayRepository;

    @Override
    public Set<Day> insertMany(Set<Day> days) {
        return new HashSet<>(dayRepository.saveAll(days));
    }
}
