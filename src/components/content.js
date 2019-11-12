import styled from "styled-components";

export default styled.main`
  margin: ${({ theme }) => `${theme.headerHeight} auto ${theme.dateNavHeight}`};
  padding: 25px 0;
  max-width: 900px;
  width: calc(100% - 20px);
  @include respond-to("medium") {
    margin-top: ${({ theme }) => theme.headerHeightMedium};
  }
`;
