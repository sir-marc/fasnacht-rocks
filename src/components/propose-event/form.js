import React, { useState } from "react";
import styled from "styled-components";

import Button from "../button";

const IntroText = styled.h2`
  margin-bottom: 40px;
  margin-top: 0;
  font-size: 16px;
`;

const InputGroup = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  span {
    display: block;
  }
`;

const Inputfield = styled.input`
  display: block;
  border: 1px solid ${({ theme }) => theme.lightTextColor};
  margin: 5px 0 25px 0px;
  padding: 10px;
  width: 100%;
`;

function Form() {
  const [formSubmitted, setFormSubmitted] = useState();
  const submitForm = e => {
    setFormSubmitted(true);
  };
  const resetForm = e => {
    setFormSubmitted(false);
  };

  if (formSubmitted) {
    return (
      <>
        <IntroText>Vielen Dank!</IntroText>
        <Button onClick={resetForm}>Neues Event vorschlagen</Button>
      </>
    );
  }

  return (
    <>
      <IntroText>
        Ich und alle Benutzer dieser Webseite sind froh, über jeden
        eingereichten Vorschalg. Besten Dank im Namen Aller!
      </IntroText>
      <form name="proposals" method="post" data-netlify="true">
        <input type="hidden" name="form-name" value="proposals" />
        <InputGroup>
          <span>Wie heisst die Party?</span>
          <Inputfield type="text" name="event-name" />
        </InputGroup>
        <InputGroup>
          <span>Wo findet die Party statt?</span>
          <Inputfield type="text" name="event-location" />
        </InputGroup>
        <InputGroup>
          <span>Wann findet die Party statt?</span>
          <Inputfield type="text" name="event-date" />
        </InputGroup>
        <InputGroup>
          <span>Webseite der Party</span>
          <Inputfield type="text" name="event-website" />
        </InputGroup>
        <Button type="submit">Vorschlag einreichen</Button>
      </form>
    </>
  );
}

export default Form;
