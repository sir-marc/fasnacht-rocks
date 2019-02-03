import React, { useState, useEffect, useRef } from 'react'
import moment from 'moment'
import { StaticQuery, graphql } from 'gatsby';
import Header from 'components/layout/header'
import Content from 'components/layout/content'
import Search from 'components/search'
import DateNav from 'components/date-nav';
import EventCard from 'components/event-card';
import { parseDateFromCraftTimestamp } from 'helpers/date'

import './index.scss';

const IndexPage = () => {
  const [ filter, setFilter ] = useState({})
  const headerElement = useRef(null)
  const nextOneUpElement = useRef(null)

  const filterFunctions = {
    date: event => parseDateFromCraftTimestamp(event.date).toString() === filter.date,
    location: event => event.location.toLowerCase().indexOf(filter.location.toLowerCase()) >= 0
  }

  useEffect(() => {
    if (nextOneUpElement.current) {
      const y = nextOneUpElement.current.offsetTop - headerElement.current.offsetHeight - 50
      window.scrollTo(0, y)
      nextOneUpElement.current.classList.add('-next-one-up')
    }
  }, [filter])

  const filterIsSet = () => !!Object.values(filter).some(filterValue => filterValue)

  const eventMatchesFilter = event =>
    Object.keys(filter).every(key => filterFunctions[key](event))

  return (
    <div className="home-page">
      <Header _ref={headerElement}>
        <Search setFilter={setFilter} filterValue={filter.location} />
      </Header>
      <button
        className={`reset-filter${filterIsSet() ? ' -show' : ''}`}
        onClick={() => setFilter({})}
        tabIndex={filterIsSet() ? 0 : -1}
      >
        Reset Filter
      </button>
      <Content>
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
                  },
                  partyUrl
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
                          _ref={isNextOneUp ? nextOneUpElement : null}
                          key={eventEntry.id}
                          eventName={eventEntry.title}
                          date={eventDate}
                          location={eventEntry.location}
                          price={eventEntry.price[0] || {}}
                          imageUrl={eventEntry.image[0] ? process.env.GATSBY_BACKEND_URL + eventEntry.image[0].url : ''}
                          partyUrl={eventEntry.partyUrl}
                        />
                      )
                    }
                    return null
                  })}
                </div>
                <a href="/propose-event" className="propose-event-teaser">
                  Deine Fasnacht fehlt? <br/>
                  Informier mich <span className="underlined">hier</span>!
                </a>
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
      </Content>
    </div>
  );
}
export default IndexPage;
