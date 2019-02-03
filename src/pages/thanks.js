import React from 'react'
import Header from 'components/layout/header'
import Content from 'components/layout/content'

import './thanks.scss'

const Thanks = () => (
  <div className="thanks-page">
    <Header>
      <h1>Vielen Dank!</h1>
    </Header>
    <Content>
      <a className="back-to-overview" href="/">Zurück zur Übersicht</a>
    </Content>
  </div>
)

export default Thanks
