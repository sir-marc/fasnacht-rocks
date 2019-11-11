import styled from "styled-components";

export default styled.button`
  background: ${({ theme }) => theme.darkGradient};
  color: #fff;

  position: fixed;
  right: 0;
  bottom: 140px;

  z-index: 1;

  border: 0;
  border-radius: 8px 0 0 8px;

  padding: 10px;

  font-size: 18px;

  transform: translateX(105%);
  transition: transform 0.3s;

  ${({ show }) => (show ? "transform: translateX(0);" : "")}
`;
