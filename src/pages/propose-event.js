import React from 'react'
import Header from 'components/layout/header'
import Content from 'components/layout/content'
import Button from 'components/button'
import './propose-event.scss'

const ProposeEvent = () => {
  return (
    <div className="propose-event">
      <Header>
        <h1>
          Fasnachtsparty vorschlagen
        </h1>
      </Header>
      <Content>
        <div className="intro-text">
          Ich und alle Benutzer dieser Webseite sind froh, über jeden eingereichten Vorschalg.
          Besten Dank im Namen Aller!
        </div>
        <form name="proposals" method="post" data-netlify="true" action="/thanks">
          <input type="hidden" name="form-name" value="proposals" />
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
          <Button type="submit">Vorschlag einreichen</Button>
        </form>
      </Content>
    </div>
  )
}

export default ProposeEvent