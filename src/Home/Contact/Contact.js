import React, { Component } from 'react';
import ContactBar from './ContactBar/ContactBar.js';
import ContactForm from './ContactForm/ContactForm.js';
import Copyright from './Copyright/Copyright.js';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <footer id="contact" className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Contacts</h2>
            </div>
          </div>
          <ContactBar />
          <ContactForm />
          <Copyright />
        </div>
        <a id="to-top" href="#top" className="btn btn-dark btn-lg" aria-label="Go to the top of the page."><span className="fa fa-chevron-up fa-fw fa-1x"></span></a>
      </footer>
    )
  }
}
export default Contact;
