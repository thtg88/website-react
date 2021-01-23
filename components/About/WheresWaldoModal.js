import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const WheresWaldoModal = ({ show, onHide }) => (
  <Modal isOpen={show} toggle={onHide}>
    <ModalHeader toggle={onHide}>Where's Waldo?</ModalHeader>
    <ModalBody>
      <div className="row">
        <div className="col-md-12">
          <img
            src="/images/wheres-waldo-750w.jpg"
            alt="Where's Waldo?"
            title="CommsPlus Distribution 2014 Autumn Panasonic Dealer Conference, Broadbeach, Australia."
            className="img-fluid"
          />
          <p className="help-block">
            <a
              href="https://www.google.co.uk/maps/place/Sofitel+Gold+Coast+Broadbeach/@-28.0297826,153.4302588,18z"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon fixedWidth icon={faMapMarker} />
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
        </div>
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={onHide}>Close</Button>
    </ModalFooter>
  </Modal>
);

WheresWaldoModal.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool,
};

export default WheresWaldoModal;
