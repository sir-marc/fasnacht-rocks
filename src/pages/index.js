import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby';
import Header from 'components/header';
import DateNav from 'components/date-nav';
import EventCard from 'components/event-card';

import './index.scss';
import './reset.scss'


const IndexPage = () => {
  const [ filter, setFilter ] = useState({})

  const eventMatchesFilter = event =>
    Object.keys(filter).every(key => event[key].toLowerCase().indexOf(filter[key].toLowerCase()) >= 0)

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
              <div className="events-container">
                {eventEntries.map(eventEntry =>
                  eventMatchesFilter(eventEntry) && (
                  <EventCard
                    key={eventEntry.id}
                    eventName={eventEntry.title}
                    date={eventEntry.date}
                    location={eventEntry.location}
                    price={eventEntry.price[0] || {}}
                    imageUrl={eventEntry.image[0] ? eventEntry.image[0].url : ''}
                  />
                ))}
              </div>
              );
            }}
        />
      </div>
      <DateNav setFilter={setFilter}/>
    </div>
  );
}
export default IndexPage;
