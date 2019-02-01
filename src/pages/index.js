import React, { useState, useEffect } from 'react'
import moment from 'moment'
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

  useEffect(() => {
    const nextOneUp = document.querySelector('.event-card.-next-one-up')
    if (nextOneUp) {
      const y = nextOneUp.offsetTop
      window.scrollTo(0, y - 250)
    }
  }, [filter])

  const filterIsSet = () => !!Object.values(filter).some(filterValue => filterValue)

  const eventMatchesFilter = event =>
    Object.keys(filter).every(key => filterFunctions[key](event))

  return (
    <div id="root">
      <Header setFilter={setFilter} filterValue={filter.location}/>
      {
        filterIsSet()
        && <button className="reset-filter" onClick={() => setFilter({})}>Reset Filter</button>
      }
      <div className="page-content">
        <StaticQuery
          query={graphql`{
            craft {
              entries(section:[events], orderBy: "date") {
                ...on Craft_Events {
                  id,
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
            let foundNextOneUp = false
            return (
              <>
                <div className="events-container" key="events-container">
                  {eventEntries.map(eventEntry => {
                    if (eventMatchesFilter(eventEntry)) {
                      const today = moment().subtract(1, 'days')
                      const eventDate = parseDateFromCraftTimestamp(eventEntry.date)
                      let isNextOneUp = false
                      if (today.unix() < eventDate.unix() && !foundNextOneUp) {
                        foundNextOneUp = true
                        isNextOneUp = true
                      }
                      return (
                        <EventCard
                          key={eventEntry.id}
                          eventName={eventEntry.title}
                          isNextOneUp={isNextOneUp}
                          date={eventDate}
                          location={eventEntry.location}
                          price={eventEntry.price[0] || {}}
                          imageUrl={eventEntry.image[0] ? eventEntry.image[0].url : ''}
                        />
                      )
                    }
                    return null
                  })}
                </div>
                <DateNav
                  key="date-nav"
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
