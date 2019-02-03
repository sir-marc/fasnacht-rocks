import React from 'react';
import InfoBubble from 'components/info-bubble';
import './index.scss';

const DateNav = ({ imageUrl, eventName, date, location, price, partyUrl, _ref }) => (
  <div className="event-card" ref={_ref}>
    <a className="visual-wrapper" href={partyUrl}>
      <img src={ imageUrl } alt="" className="visual" />
      <span className="text">Zur Webseite</span>
    </a>
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
