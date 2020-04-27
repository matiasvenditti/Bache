package com.example.bache.controller;

import com.example.bache.model.Calendar;
import com.example.bache.service.CalendarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalendarController {

    @Autowired
    private CalendarService calendarService;

    @GetMapping(path = "/calendar/{userId}")
    public Calendar readByUserId(@PathVariable(name = "userId") long userId) {
        return calendarService.getCalendarByUserId(userId);
    }
}
