import React, { useState } from 'react';
import './index.scss';

const InfoBubble = ({ helptext }) => {
  const [ helptextVisible, setHelptextVisible ] = useState(false)
  return (
    <button className="info-bubble" onClick={() => setHelptextVisible(true)} onBlur={() => setHelptextVisible(false)}>
      ?
      { helptextVisible && <div className="helptext">{helptext}</div> }
    </button>
  )
}

export default InfoBubble