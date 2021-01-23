import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const ClassicCarsModal = ({ show, onHide }) => (
  <Modal isOpen={show} toggle={onHide}>
    <ModalHeader toggle={onHide}>Chasing Classic Cars</ModalHeader>
    <ModalBody>
      <div className="row">
        <div className="col-md-12">
          <img
            src="/images/classic-car-612w.jpg"
            alt="Chasing Classic Cars"
            title="Jaguar Driving Experience, 2015, Kenilworth, UK."
            className="img-fluid"
          />
          <p className="help-block">
            <a
              href="https://www.google.com/maps/place/Jaguar+Land+Rover+SVO/@52.3637402,-1.6703522,17z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon fixedWidth icon={faMapMarker} />
            </a>
            {' '}
            2015 Jaguar Heritage Driving Experience, Kenilworth, UK
          </p>
        </div>
      </div>
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
