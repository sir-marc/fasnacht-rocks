import styled from "styled-components";

export default styled.button`
  display: block;

  padding: 20px;

  font-size: 18px;
  text-decoration: none;
  text-align: center;

  background: ${({ theme }) => theme.darkGradient};
  color: ${({ theme }) => theme.whiteTextColor};

  border: 0;
`;
