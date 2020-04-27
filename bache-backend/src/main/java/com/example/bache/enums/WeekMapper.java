package com.example.bache.enums;

import java.util.Map;

public class WeekMapper {

    private Map<WeekDay, Integer> weekMap = Map.of(
            WeekDay.SUNDAY, 0,
            WeekDay.MONDAY, 1,
            WeekDay.TUESDAY, 2,
            WeekDay.WEDNESDAY, 3,
            WeekDay.THURSDAY, 4,
            WeekDay.FRIDAY, 5,
            WeekDay.SATURDAY, 6
    );

    public int getDateMapping(WeekDay day) {
        return this.weekMap.get(day);
    }
}
