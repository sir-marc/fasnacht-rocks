import React, { useState } from "react";
import { Dialog } from "@reach/dialog";
import styled from "styled-components";

import Form from "./form";

const Container = styled.a`
  display: block;
  width: 100%;
  margin-top: 40px;
  padding: 20px 10px;

  background: ${({ theme }) => theme.darkGradient};
  color: ${({ theme }) => theme.lightTextColor};

  text-decoration: none;
  text-align: center;
`;

const Underlined = styled.span`
  text-decoration: underline;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;

function Teaser() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <Container onClick={open}>
      Deine Fasnacht fehlt? <br />
      Informier mich <Underlined>hier</Underlined>!
      <Dialog
        isOpen={showDialog}
        onDismiss={close}
        style={{ position: "relative" }}
      >
        <CloseButton onClick={close} title="close">
          <span aria-hidden>×</span>
        </CloseButton>
        <Form />
      </Dialog>
    </Container>
  );
}

export default Teaser;
