import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import InfoBubble from 'components/info-bubble';
import Img from "gatsby-image"
import './index.scss';

const EventCard = ({ imageFilename, eventName, date, location, price, partyUrl, _ref }) => (
  <div className="event-card" ref={_ref}>
    <a className="visual-wrapper" href={partyUrl} target="_blank" rel="noopener noreferrer">
      <Image imageFilename={imageFilename} />
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

const Image = ({ imageFilename }) => (
  <StaticQuery
    query={graphql`{
      allFile{
        edges {
          node {
            childImageSharp {
              fixed(width:130, height: 130) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }`}
    render={({ allFile }) => {
      console.log(allFile)
      const fixed = allFile.edges
        .map(edge => edge.node.childImageSharp)
        .filter(Boolean)
        .map(childImageSharp => childImageSharp.fixed)
        .map(fixed => {
          fixed.filename = fixed.src.substring(fixed.src.lastIndexOf("/") + 1);
          console.log(fixed.filename, imageFilename)
          return fixed
        })
        .find(({ filename }) => filename === imageFilename)
      console.log(fixed)
      if (fixed) {
        return <Img fixed={fixed} />
      }
      return null
      }}
  />
)


export default EventCard;
