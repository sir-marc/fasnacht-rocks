import React, { useState, useRef, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import theme from "./theme";
import DateNav from "./components/date-nav";
import Header from "./components/header";
import Content from "./components/content";
import ResetButton from "./components/reset-button";
import LocationSearch from "./components/location-search";
import EventList from "./components/events/event-list";
import rawEvents from "./events";
import { dedupe } from "./helpers/array";
import { parseDate } from "./helpers/date";

const events = rawEvents.sort((a, b) => {
  const aDate = parseDate(a.date).getTime();
  const bDate = parseDate(b.date).getTime();
  return aDate >= bDate ? 1 : -1;
});

function App() {
  const [dateFilter, setDateFilter] = useState();
  const [locationFilter, setLocationFilter] = useState();
  const [distanceFilter, setDistanceFilter] = useState(3);
  const [scrollOffset, setScrollOffset] = useState(0);

  const headerElement = useRef(null);
  const headerElementSet = !!headerElement.current;

  useEffect(() => {
    if (headerElement.current) {
      setScrollOffset(headerElement.current.offsetHeight + 50);
    }
  }, [headerElementSet]);

  const resetFilters = () => {
    setDateFilter(undefined);
    setLocationFilter(undefined);
  };

  const filterIsSet = () =>
    !![dateFilter, locationFilter].some(filterValue => !!filterValue);

  const dates = dedupe(events.map(({ date }) => date)).map(parseDate);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header ref={headerElement}>
          <LocationSearch
            setLocationFilter={setLocationFilter}
            distanceValue={distanceFilter}
            setDistanceFilter={setDistanceFilter}
          />
        </Header>
        <ResetButton
          show={filterIsSet()}
          onClick={() => resetFilters()}
          tabIndex={filterIsSet() ? 0 : -1}
        >
          Reset Filter
        </ResetButton>
        <Content>
          <EventList
            eventEntries={events}
            filter={{
              date: dateFilter,
              location: locationFilter,
              distance: distanceFilter
            }}
            scrollOffset={scrollOffset}
          />
        </Content>
        <DateNav
          dates={dates}
          setFilter={setDateFilter}
          dateFilter={dateFilter}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
