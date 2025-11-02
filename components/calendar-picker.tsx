"use client";

import { Button, Calendar } from "@heroui/react";
import React, { useState, useMemo } from "react";
import { Next, Previous } from "./icons";

export default function CalendarPicker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();

  // Get calendar data for current month
  const calendarData = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);
    // First day of week (0 = Sunday)
    const firstDayOfWeek = firstDay.getDay();
    // Number of days in month
    const daysInMonth = lastDay.getDate();

    // Get previous month's last days to fill the grid
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();

    const days: Array<{
      date: number;
      isCurrentMonth: boolean;
      isToday: boolean;
      fullDate: Date;
    }> = [];

    // Add previous month's trailing days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = prevMonthDays - i;
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
        fullDate: new Date(year, month - 1, date),
      });
    }

    // Add current month's days
    for (let date = 1; date <= daysInMonth; date++) {
      const fullDate = new Date(year, month, date);
      const isToday = fullDate.toDateString() === today.toDateString();
      days.push({
        date,
        isCurrentMonth: true,
        isToday,
        fullDate,
      });
    }

    // Add next month's leading days to complete the grid (42 days total - 6 weeks)
    const totalCells = 42;
    const remainingCells = totalCells - days.length;
    for (let date = 1; date <= remainingCells; date++) {
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
        fullDate: new Date(year, month + 1, date),
      });
    }

    return days;
  }, [currentDate, today]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: {
    date: number;
    isCurrentMonth: boolean;
    fullDate: Date;
  }) => {
    if (day.isCurrentMonth) {
      setSelectedDate(day.fullDate);
    }
  };

  return (
    <div className="w-full rounded-[20px] space-y-3 p-4 border-[1.21px] border-[#F5F5F5] dark:border-[#1F1F1F]">
      <div className="flex items-center justify-between">
        <button
          onClick={goToPreviousMonth}
          className="flex items-center justify-center w-9 h-9"
        >
          <Previous />
        </button>
        <p className="font-medium text-[16px]">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </p>
        <button
          onClick={goToNextMonth}
          className="flex items-center justify-center w-9 h-9 "
        >
          <Next />
        </button>
      </div>

      <div className="rounded-[10px] p-1 flex gap-2 dark:bg-[#FFFFFF0D] bg-[#F5F5F5]">
        <Button className="rounded-[10px] min-w-[116px] dark:border dark:border-[#595959] dark:bg-[#3E3E3E66] bg-white">
          Upcoming
        </Button>
        <Button className="rounded-[10px] min-w-[116px] dark:border dark:border-none dark:bg-[#FFFFFF0D] bg-[#F5F5F5]">
          Past Event
        </Button>
      </div>

      <div className="flex">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sat"].map((title) => (
          <p
            key={title}
            className="w-[34px] h-[34px] flex items-center justify-center font-medium text-[14px]"
          >
            {title}
          </p>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarData.map((day, index) => {
          const isSelected =
            selectedDate &&
            day.fullDate.toDateString() === selectedDate.toDateString();

          return (
            <button
              key={index}
              onClick={() => handleDateClick(day)}
              className={`
                w-[34px] h-[34px] font-medium flex flex-col items-center justify-center text-[14px] rounded-lg transition-all duration-200
                ${
                  !day.isCurrentMonth
                    ? "text-[#868687] dark:text-[##868687] cursor-default"
                    : "text-[#000000] dark:text-[#FFFFFF] cursor-pointer"
                }
                ${day.isToday ? "bg-[#5E53F5] text-white font-semibold" : ""}
                ${
                  isSelected && !day.isToday
                    ? "bg-gray-200 dark:bg-gray-700 font-medium"
                    : ""
                }
              `}
            >
              {day.date}
              <span className="w-[5px] h-[5px] rounded-full bg-[#724BF9]"></span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
