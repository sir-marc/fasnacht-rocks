import styled from "styled-components";
const padding = "15px";

export default styled.button`
    height: 100%;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    margin: 0 ${padding};

    opacity: 0.45;
    cursor: pointer;

    background: 0;
    border: 0;

    &:last-child {
        padding-right: ${padding};
    }

    span {
        display: block;
        text-align: center;

        color: #bfbfbf;
    }

    ${({ $isActive }) =>
        $isActive
            ? `
        opacity: 1;
        position: relative;

        &:focus {
          outline: none;
        }

        &:after {
          display: block;
          content: "";

          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate3d(-50%, 50%, 0);

          height: 8px;
          width: 8px;

          border-radius: 50%;

          background-color: #fff;
          box-shadow: 0 0 50px 7px rgba(255, 255, 255, 0.5);
        }
      `
            : ""}
`;
