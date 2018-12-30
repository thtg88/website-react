import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import InstagramEmbed from 'react-instagram-embed';

const { Body, Footer, Header, Title } = Modal;

const ClassicCarsModal = ({ show, onHide }) => (
    <Modal show={show} onHide={onHide}>
        <Header closeButton>
            <Title>Chasing Classic Cars</Title>
        </Header>
        <Body>
            <InstagramEmbed
                url="https://www.instagram.com/p/4bs5E3zh-c/"
                maxWidth={640}
            />
        </Body>
        <Footer>
            <Button bsStyle="primary" onClick={onHide}>Close</Button>
        </Footer>
    </Modal>
);

ClassicCarsModal.propTypes= {
    onHide: PropTypes.func,
    show: PropTypes.bool,
};

export default ClassicCarsModal;
