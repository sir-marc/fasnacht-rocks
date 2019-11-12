import React, { useEffect, useRef } from "react";
import { subDays } from "date-fns";
import EventCard from "./event-card";
import { parseDate } from "../../helpers/date";
import { getDistance } from "../../helpers/geo";

const EventList = ({ eventEntries, filter, scrollOffset }) => {
  const filterFunctions = [
    event =>
      !!filter.date ? parseDate(event.date).valueOf() === filter.date : true,
    ({ location }) =>
      !!filter.location
        ? getDistance(location, filter.location) < filter.distance
        : true
  ];

  const nextOneUpElement = useRef(null);

  useEffect(() => {
    if (nextOneUpElement.current) {
      const y = nextOneUpElement.current.offsetTop - scrollOffset;
      window.scrollTo(0, y);
      nextOneUpElement.current.classList.add("-next-one-up");
    }
  }, [filter.date, filter.location, filter.distance, scrollOffset]);

  const eventMatchesFilter = event =>
    filterFunctions.every(filterFnc => filterFnc(event));

  let foundNextOneUp = false;
  return (
    <div className="events-container" key="events-container">
      {eventEntries.map(eventEntry => {
        if (eventMatchesFilter(eventEntry)) {
          const today = subDays(new Date(), 1);
          const eventDate = parseDate(eventEntry.date);
          let isNextOneUp = false;
          if (today.getTime() < eventDate.getTime() && !foundNextOneUp) {
            foundNextOneUp = true;
            isNextOneUp = true;
          }
          return (
            <EventCard
              _ref={isNextOneUp ? nextOneUpElement : null}
              key={eventEntry.id}
              eventName={eventEntry.title}
              date={eventDate}
              location={eventEntry.location}
              price={eventEntry.price}
              priceDescription={eventEntry.priceDescription}
              image={eventEntry.image}
              partyUrl={eventEntry.partyUrl}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default EventList;
