import React from 'react'
import Header from 'components/layout/header'
import Content from 'components/layout/content'
import LinkButton from 'components/button/link-button'

const Thanks = () => (
  <div className="thanks-page">
    <Header>
      <h1>Vielen Dank!</h1>
    </Header>
    <Content>
      <LinkButton className="button back-to-overview" href="/">Zurück zur Übersicht</LinkButton>
    </Content>
  </div>
)

export default Thanks
