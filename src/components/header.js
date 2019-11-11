import styled from "styled-components";
import backgroundImg from "../assets/images/party-hats.jpg";

export default styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  height: ${({ theme }) => theme.headerHeight};
  width: 100%;

  background: url(${backgroundImg});
  background-size: cover;
  background-position: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.15);
    z-index: -1;
    pointer-events: none;
  }

  h1 {
    color: #fff;
    font-size: 26px;
    font-weight: 500;
    text-shadow: 1px 1px 10px black;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium} }) {
    height: ${({ theme }) => theme.headerHeightMedium};
    &::after {
      display: none;
    }
  }
`;
