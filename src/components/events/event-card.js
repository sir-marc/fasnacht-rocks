import React from "react";
import styled from "styled-components";
import InfoBubble from "../info-bubble";
import { formatDate } from "../../helpers/date";

const imageSize = "130px";
const cardWidth = "250px";
const cardHeight = "120px";
const xTranslation = "20px";

const Container = styled.div`
  display: flex;
  justify-content: center;

  height: ${imageSize};

  opacity: 0.45;

  &.-next-one-up,
  &.-next-one-up ~ & {
    opacity: 1;
  }

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

const PartyLink = styled.a`
  width: ${imageSize};
  height: ${imageSize};
  display: block;
  position: relative;

  flex-shrink: 0;

  background: radial-gradient(circle, #093e7b 0%, #2e76a4 100%);

  transform: translateX(${xTranslation});

  img {
    width: ${imageSize};
    height: ${imageSize};
  }

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 5px;

    font-size: 12px;
    letter-spacing: 0.5px;

    color: #fff;
    background-color: rgba(${({ theme }) => theme.darkColor}, 0.6);
  }
`;

const Card = styled.div`
  width: ${cardWidth};
  height: ${cardHeight};

  margin-top: 5px;
  padding: 10px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;

  transform: translateX(-${xTranslation});

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EventName = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

const PartyDate = styled.span`
  font-size: 13px;
  color: $light-text-color;
`;

const Location = styled.span`
  font-size: 16px;
`;

const Prices = styled.span`
  font-size: 13px;
  color: $light-text-color;
  margin-right: 20px;
`;

const EventCard = ({
  image,
  eventName,
  date,
  location,
  price,
  partyUrl,
  _ref
}) => (
  <Container ref={_ref}>
    <PartyLink target="_blank" href={partyUrl} rel="noopener noreferrer">
      <img src={image} role="presentation" alt="" />
      <span>Zur Webseite</span>
    </PartyLink>
    <Card>
      <Row>
        <EventName>{eventName}</EventName>
        <PartyDate>{formatDate(date)}</PartyDate>
      </Row>
      <Row>
        <Location>{location}</Location>
        <div className="price-wrapper">
          <Prices>{price.prices}</Prices>
          {price.description && <InfoBubble helptext={price.description} />}
        </div>
      </Row>
    </Card>
  </Container>
);

export default EventCard;
