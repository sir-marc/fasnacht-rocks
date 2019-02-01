import React from 'react';
import InfoBubble from 'components/info-bubble';
import './index.scss';

const DateNav = ({ imageUrl, eventName, date, location, price, isNextOneUp, _ref }) => (
  <div className={`event-card${isNextOneUp ? ' -next-one-up' : ''}`} ref={_ref}>
    <img src={ imageUrl } alt="" className="visual"></img>
    <div className="card">
      <div className="row top-row">
        <h2 className="event-name">{eventName}</h2>
        <span className="date">{ date.format('DD.MM.YYYY') }</span>
      </div>
      <div className="row bottom-row">
        <span className="location">{location}</span>
        <div className="price-wrapper">
          <span className="prices">{price.prices}</span>
          { price.description && <InfoBubble helptext={price.description}/> }
        </div>
      </div>
    </div>
  </div>
)


export default DateNav;
