import React from 'react';
import './index.scss';

const DateNav = ({ dates, dateFilter, setFilter }) => (
  <div className="date-nav">
    {
      dates.map(date => {
        const dateString = date.toString()
        const className = `date-entry${dateString === dateFilter ? ' -active' : ''}`
        return (
          <button className={className} key={dateString} onClick={() => setFilter({ date: dateString })}>
            <span className="week-day">{date.format('dd')}.</span>
            <span className="day">{date.format('DD')}</span>
            <span className="month">{date.format('MMM')}.</span>
          </button>
        )
      })
    }
  </div>
)


export default DateNav;
