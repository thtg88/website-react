import React from 'react';
import ContactBar from './ContactBar';
import ContactForm from './ContactForm';
import Copyright from './Copyright';

const Contact = () => (
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
);

export default Contact;
