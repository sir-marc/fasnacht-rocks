import React from "react";
import { format } from "date-fns";
import Container from "./container";
import DateEntry from "./date-entry";
import WeekDay from "./week-day";
import Day from "./day";
import Month from "./month";

function DateNav({ dates, dateFilter, setFilter }) {
    const latestYear =
        dates && dates.length ? Math.max(...dates.map((date) => date.getFullYear())) : null;
    const filteredDates =
        latestYear !== null ? dates.filter((date) => date.getFullYear() === latestYear) : [];

    return (
        <Container>
            {filteredDates.map((date) => {
                const dateString = date.valueOf();
                return (
                    <DateEntry
                        key={dateString}
                        $isActive={dateString === dateFilter}
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
