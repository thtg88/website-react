import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import {
    faGithub,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

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
        href: 'https://github.com/thtg88/',
        title: 'I\'m also on GitHub.',
        icon: faGithub,
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
            <div className="d-inline-block" role="group">
                {
                    contacts.map((contact, idx) => (
                        <a
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={contact.title}
                            className="btn btn-dark mr-3 mb-3"
                            key={`contact_link_${idx}`}
                        >
                            <FontAwesomeIcon
                                fixedWidth
                                icon={contact.icon}
                                size="3x"
                            />
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
);

export default ContactBar;
