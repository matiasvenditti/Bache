package com.example.bache.service;

import com.example.bache.model.Calendar;

public interface CalendarService {
    Calendar getCalendar();

    Calendar getCalendarByUserId(long userId);
}
