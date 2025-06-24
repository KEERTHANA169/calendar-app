import React, { useState, useEffect } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameDay,
  isSameMonth,
  parseISO,
} from "date-fns";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        className="px-4 py-1 bg-gray-200 rounded"
      >
        Prev
      </button>
      <h2 className="text-lg font-semibold">
        {format(currentMonth, "MMMM yyyy")}
      </h2>
      <button
        onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        className="px-4 py-1 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = new Date();
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center font-semibold text-gray-500" key={i}>
          {format(addDays(startOfWeek(date), i), "EEE")}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const today = isSameDay(day, new Date());
        const isCurrentMonth = isSameMonth(day, monthStart);
        const dayEvents = events.filter((e) => isSameDay(parseISO(e.date), day));

        days.push(
          <div
            key={day}
            className={`border p-2 h-32 text-sm overflow-auto ${
              isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-400"
            } ${today ? "border-blue-500 border-2" : ""}`}
          >
            <div className="font-bold text-gray-700">
              {format(day, "d")}
            </div>
            <div className="space-y-1 text-xs mt-1">
              {dayEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="bg-blue-100 text-blue-700 px-1 rounded truncate"
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 gap-px bg-gray-200" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}
