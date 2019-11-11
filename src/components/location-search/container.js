import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(-5px);

  .input-container {
    width: 300px;
    position: relative;
  }

  input {
    height: 35px;
    width: 100%;

    border-radius: 16px;
    border: 0;

    padding: 0 20px;

    font-size: inherit;
  }

  .autocomplete-dropdown-container {
    position: absolute;
    z-index: 1;
    bottom: -5px;
    left: 0;
    transform: translateY(100%);
    width: 100%;
    border-radius: 16px;
    overflow: hidden;
    padding: 10px;
    background-color: #fff;
    box-shadow: 1px 1px 5px 5px rgba(0, 0, 0, 0.3);
  }
`;
