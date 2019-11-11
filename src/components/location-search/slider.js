import React from "react";
import InputRange from "react-input-range";

import styled from "styled-components";
import "react-input-range/src/scss/index.scss";

const Container = styled.div`
  display: block;
  width: 300px;
  margin-top: 25px;

  .input-range__label,
  .input-range__label-container {
    color: #fff;
    font-family: inherit;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .input-range__label {
    bottom: -1rem;
    font-size: 0.9rem;
  }
`;

function Slider({ distanceValue, setDistanceFilter }) {
  return (
    <Container>
      <InputRange
        type="range"
        minValue={1}
        maxValue={20}
        value={distanceValue}
        onChange={setDistanceFilter}
        formatLabel={value => `${value}km`}
      />
    </Container>
  );
}

export default Slider;
