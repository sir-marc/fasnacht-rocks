import React, { useEffect, useRef } from 'react'
import moment from 'moment'
import EventCard from '../event-card'
import { parseDateFromCraftTimestamp } from 'helpers/date'
import { getDistance } from 'helpers/geo';

const EventList = ({ eventEntries, filter, scrollOffset }) => {

  const filterFunctions = [
    event => !!filter.date ? parseDateFromCraftTimestamp(event.date).toString() === filter.date : true,
    ({ location }) => !!filter.location ? getDistance(location[0], filter.location) < filter.distance : true
  ]

  const nextOneUpElement = useRef(null)

  useEffect(() => {
    if (nextOneUpElement.current) {
      const y = nextOneUpElement.current.offsetTop - scrollOffset
      window.scrollTo(0, y)
      nextOneUpElement.current.classList.add('-next-one-up')
    }
  }, [filter.date, filter.location, filter.distance, scrollOffset])

  const eventMatchesFilter = event =>
    filterFunctions.every(filterFnc => filterFnc(event))

  let foundNextOneUp = false
  return (
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
  )
}

export default EventList