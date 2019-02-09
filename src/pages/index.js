import React, { useState, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import Header from 'components/layout/header'
import Content from 'components/layout/content'
import LocationSearch from 'components/location-search'
import DateNav from 'components/date-nav'
import EventList from 'components/events/event-lists'
import { parseDateFromCraftTimestamp } from 'helpers/date'
import { dedupe } from 'helpers/array'

import InputRange from 'react-input-range'
import 'react-input-range/src/scss/index.scss'

import './index.scss'

const IndexPage = ({ data }) => {
  const eventEntries = data.craft.entries
  const [dateFilter, setDateFilter] = useState()
  const [locationFilter, setLocationFilter] = useState()
  const [distanceFilter, setDistanceFilter] = useState(3)
  const [scrollOffset, setScrollOffset] = useState(0)

  const headerElement = useRef(null)

  const dates = dedupe(eventEntries.map(({ date }) => date)).map(
    parseDateFromCraftTimestamp
  )

  useEffect(() => {
    if (headerElement.current) {
      setScrollOffset(headerElement.current.offsetHeight + 50)
    }
  }, !!headerElement.current)

  const resetFilters = () => {
    setDateFilter(undefined)
    setLocationFilter(undefined)
  }

  const filterIsSet = () =>
    !![dateFilter, locationFilter].some(filterValue => !!filterValue)

  return (
    <div className="home-page">
      <Header _ref={headerElement}>
        <LocationSearch setFilter={setLocationFilter} />
        <div className="slider">
          <InputRange
            type="range"
            minValue={1}
            maxValue={20}
            value={distanceFilter}
            onChange={setDistanceFilter}
            formatLabel={value => `${value}km`}
          />
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
        <EventList
          eventEntries={eventEntries}
          filter={{
            date: dateFilter,
            location: locationFilter,
            distance: distanceFilter,
          }}
          scrollOffset={scrollOffset}
        />
        <a href="/propose-event" className="propose-event-teaser">
          Deine Fasnacht fehlt? <br />
          Informier mich <span className="underlined">hier</span>!
        </a>
        <DateNav
          key="date-nav"
          setFilter={setDateFilter}
          dateFilter={dateFilter}
          dates={dates}
        />
      </Content>
    </div>
  )
}
export default IndexPage

export const eventResult = graphql`
  {
    craft {
      entries(section: [events], orderBy: "date") {
        ... on Craft_Events {
          id
          title
          location {
            ... on Craft_LocationLocation {
              place
              lat
              lng
            }
          }
          date
          image {
            filename
          }
          price {
            ... on Craft_PricePrice {
              prices
              description
            }
          }
          partyUrl
        }
      }
    }
  }
`
