import React from 'react';
import { Modal } from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';

const { Body, Header, Title } = Modal;

const ClassicCarsModal = ({ show, onHide }) => (
    <Modal show={show} onHide={onHide}>
        <Header closeButton>
            <Title>Chasing Classic Cars</Title>
        </Header>
        <Body>
            <InstagramEmbed url="https://www.instagram.com/p/4bs5E3zh-c/" maxWidth={640} />
        </Body>
    </Modal>
);

export default ClassicCarsModal;
