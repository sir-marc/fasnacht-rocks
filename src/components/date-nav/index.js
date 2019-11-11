import React from "react";
import { format } from "date-fns";
import Container from "./container";
import DateEntry from "./date-entry";
import WeekDay from "./week-day";
import Day from "./day";
import Month from "./month";

function DateNav({ dates, dateFilter, setFilter }) {
  return (
    <Container>
      {dates.map(date => {
        const dateString = date.valueOf();
        return (
          <DateEntry
            key={dateString}
            isActive={dateString === dateFilter}
            onClick={() => setFilter(dateString)}
          >
            <WeekDay>{format(date, "E")}.</WeekDay>
            <Day>{format(date, "dd")}</Day>
            <Month>{format(date, "MMM")}.</Month>
          </DateEntry>
        );
      })}
      <div></div>
    </Container>
  );
}

export default DateNav;
