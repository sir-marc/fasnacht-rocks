import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Header from 'components/header';
import DateNav from 'components/date-nav';
import EventCard from 'components/event-card';
import { parseDateFromCraftTimestamp } from 'helpers/date'

import './index.scss';
import './reset.scss'


const IndexPage = () => {
  const [ filter, setFilter ] = useState({})

  const filterFunctions = {
    date: event => parseDateFromCraftTimestamp(event.date).toString() === filter.date,
    location: event => event.location.toLowerCase().indexOf(filter.location.toLowerCase()) >= 0
  }

  const eventMatchesFilter = event =>
    Object.keys(filter).every(key => filterFunctions[key](event))

  return (
    <div id="root">
      <Header setFilter={setFilter}/>
      <div className="page-content">
        <StaticQuery
          query={graphql`{
            craft {
              entries(section:[events], orderBy: "date") {
                ...on Craft_Events {
                  title,
                  location,
                  date,
                  image {
                    url
                  },
                  price {
                    ...on Craft_PricePrice {
                      prices,
                      description
                    }
                  }
                }
              }
            }
          }`}
          render={({ craft }) => {
            const eventEntries = craft.entries
            return (
              <>
                <div className="events-container">
                  {eventEntries.map(eventEntry =>
                    eventMatchesFilter(eventEntry) && (
                    <EventCard
                      key={eventEntry.id}
                      eventName={eventEntry.title}
                      date={parseDateFromCraftTimestamp(eventEntry.date)}
                      location={eventEntry.location}
                      price={eventEntry.price[0] || {}}
                      imageUrl={eventEntry.image[0] ? eventEntry.image[0].url : ''}
                    />
                  ))}
                </div>
                <DateNav
                  setFilter={setFilter}
                  dateFilter={filter.date}
                  dates={Array.from(new Set(eventEntries.map(({ date }) => date))).map(parseDateFromCraftTimestamp)}
                />
              </>
              );
            }}
        />
      </div>
    </div>
  );
}
export default IndexPage;
