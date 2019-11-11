import React, { useState } from "react";
import styled from "styled-components";

const BubbleButton = styled.button`
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 15px;
  height: 15px;

  font-size: 8px;
  font-weight: 500;

  color: #fff;
  background-color: #093e7b;

  border-radius: 50%;
  border: 0;
`;

const arrowSize = "5px";

const HelpText = styled.div`
  position: absolute;
  top: -${arrowSize};
  right: -4px;
  width: 150px;

  transform: translateY(-100%);

  background: $dark-gradient;
  color: $light-text-color;

  padding: 5px;

  font-size: 13px;

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: ${arrowSize} solid transparent;
    border-top-color: $dark-color;
    position: absolute;
    right: 5px;
    bottom: 0;
    transform: translateY(100%);
  }
`;

const InfoBubble = ({ helptext }) => {
  const [helptextVisible, setHelptextVisible] = useState(false);
  return (
    <BubbleButton
      onClick={() => setHelptextVisible(true)}
      onBlur={() => setHelptextVisible(false)}
    >
      ?{helptextVisible && <HelpText>{helptext}</HelpText>}
    </BubbleButton>
  );
};

export default InfoBubble;
