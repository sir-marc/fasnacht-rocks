import React from 'react';
import './index.scss';

const formatDate = timestamp => {
  const date = new Date(timestamp * 1000);
  const day = date.getDate()
  const month = date.getMonth() + 1;
  const paddedMonth = month < 10 ? '0' + month : month
  const year = date.getFullYear();
  return `${day}.${paddedMonth}.${year}`
}

const DateNav = ({ imageUrl, eventName, date, location, price }) => (
  <div className="event-card">
    <img src={ imageUrl } alt="" className="visual"></img>
    <div className="card">
      <div className="row top-row">
        <h2 className="event-name">{eventName}</h2>
        <span className="date">{ formatDate(date) }</span>
      </div>
      <div className="row bottom-row">
        <span className="location">{location}</span>
        <div className="price-wrapper">
          <span className="prices">{price.prices}</span>
          <span className="info-bubble">?</span>
        </div>
      </div>
    </div>
  </div>
)


export default DateNav;
