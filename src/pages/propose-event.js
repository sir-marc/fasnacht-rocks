import React from 'react'
import Header from 'components/layout/header'
import Content from 'components/layout/content'
import './propose-event.scss'

const ProposeEvent = () => {
  return (
    <div id="root">
      <Header>
        <h1>
          Fasnachtsparty vorschlagen
        </h1>
      </Header>
      <Content>
        <form className="propose-event" name="proposals" method="POST" data-netlify="true" action="/thanks">
          <div className="intro-text">
            Ich und alle Benutzer dieser Webseite sind froh, über jeden eingereichten Vorschalg.
            Besten Dank im Namen Aller!
          </div>
          <label className="input-group">
            <span>Wie heisst die Party?</span>
            <input className="input-field" type="text" name="event-name" />
          </label>
          <label className="input-group">
            <span>Wo findet die Party statt?</span>
            <input className="input-field" type="text" name="event-location" />
          </label>
          <label className="input-group">
            <span>Wann findet die Party statt?</span>
            <input className="input-field" type="text" name="event-date" />
          </label>
          <label className="input-group">
            <span>Webseite der Party</span>
            <input className="input-field" type="text" name="event-website" />
          </label>
          <button className="submit" type="submit">Vorschlag einreichen</button>
        </form>
      </Content>
    </div>
  )
}

export default ProposeEvent