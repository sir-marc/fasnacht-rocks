import styled from "styled-components";

export default styled.nav`
  position: fixed;
  bottom: 0;
  z-index: 1;

  width: 100%;
  height: ${({ theme }) => theme.dateNavHeight};
  bla: ${({ theme }) => JSON.stringify(theme)}

  white-space: nowrap;

  color: ${({ theme }) => theme.whiteTextColor};
  background: ${({ theme }) => theme.darkGradient};

  box-shadow: 0 -5px 30px 0 rgba(1, 5, 19, 0.5);

  overflow-x: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.medium} }) {
    text-align: center;
  }
`;
