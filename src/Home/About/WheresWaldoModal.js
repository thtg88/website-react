import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import wheresWaldo from './wheres-waldo-750w.jpg';

const { Body, Footer, Header, Title } = Modal;

const WheresWaldoModal = ({ show, onHide }) => (
    <Modal show={show} onHide={onHide}>
        <Header closeButton>
            <Title>Where's Waldo?</Title>
        </Header>
        <Body>
            <img
                src={wheresWaldo}
                alt="Where's Waldo?"
                title="CommsPlus Distribution 2014 Autumn Panasonic Dealer Conference, Broadbeach, Australia."
                className="img-responsive"
            />
            <p className="help-block">
                <a
                    href="https://www.google.co.uk/maps/place/Sofitel+Gold+Coast+Broadbeach/@-28.0297826,153.4302588,18z"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        fixedWidth
                        icon={faMapMarker}
                    />
                </a>
                <a
                    href="https://www.commsplus-distribution.com.au/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CommsPlus Distribution
                </a>
                {' '}
                2014 Autumn Panasonic Dealer Conference, Broadbeach, Australia.
            </p>
        </Body>
        <Footer>
            <Button bsStyle="primary" onClick={onHide}>Close</Button>
        </Footer>
    </Modal>
);

WheresWaldoModal.propTypes = {
    onHide: PropTypes.func,
    show: PropTypes.bool,
}

export default WheresWaldoModal;
