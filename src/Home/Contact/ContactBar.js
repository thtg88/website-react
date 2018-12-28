import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faBitbucket, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactBar = () => (
    <div className="row">
        <div className="col-lg-12 text-center">
            <hr className="small" />
            <ul id="contact-button-list" className="list-inline">
                <li>
                    <a
                        href="https://www.google.co.uk/maps/place/Bristol/@51.4526832,-2.6233332,13z"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Italian born and bred, at the moment Bristol, UK based."
                        className="btn btn-dark"
                    ><FontAwesomeIcon fixedWidth icon={faMapMarker} size="3x" /></a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/marco-marassi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="I'm on LinkedIn."
                        className="btn btn-dark"
                    ><FontAwesomeIcon fixedWidth icon={faLinkedin} size="3x" /></a>
                </li>
                <li>
                    <a
                        href="https://bitbucket.org/thtg88/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="I'm not on GitHub, but I'm on Bitbucket."
                        className="btn btn-dark"
                    ><FontAwesomeIcon fixedWidth icon={faBitbucket} size="3x" /></a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/thtg88/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Sometimes, I'm on Instagram."
                        className="btn btn-dark"
                    ><FontAwesomeIcon fixedWidth icon={faInstagram} size="3x" /></a>
                </li>
            </ul>
        </div>
    </div>
);

export default ContactBar;
