import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import InstagramEmbed from 'react-instagram-embed'
import wheresWaldo from './wheres-waldo-750w.jpg';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classicCarsModal: {
        show: false,
      },
      wheresWaldoModal: {
        show: false,
      },
    };

    this.handleClassicCarsShow = this.handleClassicCarsShow.bind(this);
    this.handleWheresWaldoShow = this.handleWheresWaldoShow.bind(this);
    this.handleClassicCarsClose = this.handleClassicCarsClose.bind(this);
    this.handleWheresWaldoClose = this.handleWheresWaldoClose.bind(this);
  }

  render() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>About Me</h2>
              <p className="lead">I am currently a Principal Web Developer at <a href="https://somersetdesign.co.uk/" target="_blank" rel="noopener noreferrer">Somerset Design</a>.</p>
              <p className="lead">Previously, I worked as a Technical Specialist for <a href="https://mondago.com/" target="_blank" rel="noopener noreferrer">Mondago Ltd</a>, where I covered two roles: Web Developer and Product Specialist.</p>
              <p className="lead">As a Web Developer (using technologies like AJAX, jQuery, Laravel, PHP, and SQL), I took care of all the public websites, the company's Business System, and most of the internal online systems.</p>
              <p className="lead">
                I also dedicated part of my time at the company to the Product Specialist role, where I covered the Italian market, providing sales and technical support.
                The role granted me the opportunity to attend <a href="#wheres-waldo" onClick={this.handleWheresWaldoShow}>conferences</a> and events in different countries.
              </p>
              <p className="lead">Outside of the office, you are most likely to find me at a cafè trying to speak a new foreign language, or chasing <a href="#classic-cars"  onClick={this.handleClassicCarsShow}>classic cars</a> in the streets of town.</p>
            </div>
          </div>
        </div>
        <Modal show={this.state.wheresWaldoModal.show} onHide={this.handleWheresWaldoClose}>
          <Modal.Header closeButton>
            <Modal.Title>Where's Waldo?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={wheresWaldo} alt="Where's Waldo?" title="CommsPlus Distribution 2014 Autumn Panasonic Dealer Conference, Broadbeach, Australia." className="img-responsive" />
            <p class="help-block">
              <a href="https://www.google.co.uk/maps/place/Sofitel+Gold+Coast+Broadbeach/@-28.0297826,153.4302588,18z" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon fixedWidth icon={faMapMarker} /></a>
              <a href="https://www.commsplus-distribution.com.au/" target="_blank" rel="noopener noreferrer">CommsPlus Distribution</a> 2014 Autumn Panasonic Dealer Conference, Broadbeach, Australia.
            </p>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.classicCarsModal.show} onHide={this.handleClassicCarsClose}>
          <Modal.Header closeButton>
            <Modal.Title>Chasing Classic Cars</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InstagramEmbed url="https://www.instagram.com/p/4bs5E3zh-c/" maxWidth={640} />
          </Modal.Body>
        </Modal>
      </section>
    );
  }

  handleWheresWaldoClose() {
    this.setState({
      wheresWaldoModal: {
        show: false,
      },
    });
  }

  handleClassicCarsClose() {
    this.setState({
      classicCarsModal: {
        show: false,
      },
    });
  }

  handleWheresWaldoShow() {
    this.setState({
      wheresWaldoModal: {
        show: true,
      },
    })
  }

  handleClassicCarsShow() {
    this.setState({
      classicCarsModal: {
        show: true,
      },
    })
  }
}
export default About;
