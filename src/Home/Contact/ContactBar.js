import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faBitbucket, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const contacts = [
    {
        href: 'https://www.google.co.uk/maps/place/Bristol/@51.4526832,-2.6233332,13z',
        title: 'Italian born and bred, at the moment Bristol, UK based.',
        icon: faMapMarker,
    },
    {
        href: 'https://www.linkedin.com/in/marco-marassi/',
        title: 'I\'m on LinkedIn.',
        icon: faLinkedin,
    },
    {
        href: 'https://bitbucket.org/thtg88/',
        title: 'I\'m also on Bitbucket.',
        icon: faBitbucket,
    },
    {
        href: 'https://www.instagram.com/thtg88/',
        title: 'Sometimes, I\'m on Instagram.',
        icon: faInstagram,
    },
];

const ContactBar = () => (
    <div className="row">
        <div className="col-lg-12 text-center">
            <hr className="small" />
            <ul id="contact-button-list" className="list-inline">
                {
                    contacts.map((contact, idx) => (
                        <li key={`contact_link_${idx}`}>
                            <a
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={contact.title}
                                className="btn btn-dark"
                            >
                                <FontAwesomeIcon
                                    fixedWidth
                                    icon={contact.icon}
                                    size="3x"
                                />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
);

export default ContactBar;
