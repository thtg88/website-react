import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InstagramEmbed from 'react-instagram-embed';

const ClassicCarsModal = ({ show, onHide }) => (
    <Modal isOpen={show} toggle={onHide}>
        <ModalHeader toggle={onHide}>
            Chasing Classic Cars
        </ModalHeader>
        <ModalBody>
            <InstagramEmbed
                url="https://www.instagram.com/p/4bs5E3zh-c/"
                maxWidth={640}
            />
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={onHide}>Close</Button>
        </ModalFooter>
    </Modal>
);

ClassicCarsModal.propTypes= {
    onHide: PropTypes.func,
    show: PropTypes.bool,
};

export default ClassicCarsModal;
