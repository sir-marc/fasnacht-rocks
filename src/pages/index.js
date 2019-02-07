import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import { StaticQuery, graphql } from 'gatsby';
import Header from 'components/layout/header';
import Content from 'components/layout/content';
import LocationSearch from 'components/location-search';
import DateNav from 'components/date-nav';
import EventCard from 'components/event-card';
import { parseDateFromCraftTimestamp } from 'helpers/date';
import { getDistance } from 'helpers/geo';

import InputRange from 'react-input-range';
import 'react-input-range/src/scss/index.scss'

import './index.scss';

const IndexPage = () => {
  const [ dateFilter, setDateFilter ] = useState()
  const [ locationFilter, setLocationFilter ] = useState()
  const [ distanceFilter, setDistanceFilter ] = useState(3)

  const headerElement = useRef(null)
  const nextOneUpElement = useRef(null)

  const filterFunctions = [
    event => !!dateFilter ? parseDateFromCraftTimestamp(event.date).toString() === dateFilter : true,
    ({ location }) => !!locationFilter ? getDistance(location[0], locationFilter) < distanceFilter : true
  ]

  useEffect(() => {
    if (nextOneUpElement.current) {
      const y = nextOneUpElement.current.offsetTop - headerElement.current.offsetHeight - 50
      window.scrollTo(0, y)
      nextOneUpElement.current.classList.add('-next-one-up')
    }
  }, [dateFilter, locationFilter, distanceFilter])

  const resetFilters = () => {
    setDateFilter(undefined)
    setLocationFilter(undefined)
  }

  const filterIsSet = () => !![dateFilter, locationFilter].some(filterValue => !!filterValue)

  const eventMatchesFilter = event =>
    filterFunctions.every(filterFnc => filterFnc(event))

  return (
    <div className="home-page">
      <Header _ref={headerElement}>
        <LocationSearch setFilter={setLocationFilter} />
        <div className="slider">
          <InputRange type="range" minValue={1} maxValue={20} value={distanceFilter} onChange={setDistanceFilter}/>
        </div>
      </Header>
      <button
        className={`reset-filter${filterIsSet() ? ' -show' : ''}`}
        onClick={() => resetFilters()}
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
                  location  {
                    ...on Craft_LocationLocation {
                      place,
                      lat,
                      lng,
                    }
                  },
                  date,
                  image {
                    filename
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
                          location={eventEntry.location[0].place}
                          price={eventEntry.price[0] || {}}
                          imageFilename={eventEntry.image[0] ? eventEntry.image[0].filename : ''}
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
                  setFilter={setDateFilter}
                  dateFilter={dateFilter}
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
