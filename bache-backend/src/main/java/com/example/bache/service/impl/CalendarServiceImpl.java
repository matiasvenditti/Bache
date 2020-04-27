package com.example.bache.service.impl;

import com.example.bache.model.Calendar;
import com.example.bache.model.Day;
import com.example.bache.repository.CalendarRepository;
import com.example.bache.repository.UserRepository;
import com.example.bache.service.CalendarService;
import com.example.bache.service.DayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Service
public class CalendarServiceImpl implements CalendarService {

    @Autowired
    private DayService dayService;

    @Autowired
    private CalendarRepository calendarRepository;

    private static final Set<Day> DAYS = new HashSet<>(Arrays.asList(
            new Day("Lunes"),
            new Day("Martes"),
            new Day("Miercoles"),
            new Day("Jueves"),
            new Day("Viernes")
    ));

    @Override
    public Calendar getCalendar() {
        final Set<Day> days = dayService.insertMany(DAYS);
        return new Calendar(days);
    }

    @Override
    public Calendar getCalendarByUserId(long userId) {
        final Calendar calendar = calendarRepository.findByCalendarByUserId(userId);
        return calendar;
    }
}
