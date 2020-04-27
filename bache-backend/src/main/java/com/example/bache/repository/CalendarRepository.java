package com.example.bache.repository;

import com.example.bache.model.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CalendarRepository extends JpaRepository<Calendar, Long> {

    @Query("select c from Calendar c where c.user.id = ?1")
    Calendar findByCalendarByUserId(long id);

}
