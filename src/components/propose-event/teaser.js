import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

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

const customStyles = {
    overlay: {
        zIndex: 1000,
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
    },
};

function Teaser() {
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    return (
        <>
            <Container onClick={open}>
                Deine Fasnacht fehlt? <br />
                Informier mich <Underlined>hier</Underlined>!
            </Container>
            <Modal
                isOpen={showDialog}
                onRequestClose={close}
                style={customStyles}
            >
                <CloseButton onClick={close} title="close">
                    <span aria-hidden>×</span>
                </CloseButton>
                <Form />
            </Modal>
        </>
    );
}

export default Teaser;
