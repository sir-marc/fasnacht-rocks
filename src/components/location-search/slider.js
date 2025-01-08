import React from "react";
import styled from "styled-components";

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
            <input
                type="range"
                minValue={1}
                maxValue={20}
                step={1}
                value={distanceValue}
                onChange={(e) => setDistanceFilter(e.target.value)}
                formatLabel={(value) => `${value}km`}
            />
        </Container>
    );
}

export default Slider;
