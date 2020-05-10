import React from 'react';
import PropTypes from 'prop-types';

const AboutContent = ({ wheresWaldoLinkOnClick, classicCarsOnClick }) => (
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2>About Me</h2>
                <p className="lead">
                    I am currently a Back-end Web Developer at
                    {' '}
                    <a
                        href="https://simpleweb.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Simpleweb
                    </a>.
                </p>
                <p className="lead">
                    Previously, I have been working at
                    {' '}
                    <a
                        href="https://somersetdesign.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Somerset Design
                    </a> as Principal Web Developer,
                    {' '}
                    where I learnt how to work in the web agency's fast-paced environment,
                    {' '}
                    and the best practices of building websites using the company's own CMS.
                </p>
                <p className="lead">
                    While there, I have also learnt the best SEO practices,
                    {' '}
                    basic UX principles,
                    {' '}
                    and how to use the latest web development tools.
                    {' '}
                    From local development environment Vagrant,
                    {' '}
                    to front-end frameworks like Angular and React,
                    {' '}
                    to REST APIs developed in Laravel.
                </p>
                <p className="lead">
                    Being a Principal Web Developer also meant having the opportunity to mentor the rest of the team,
                    {' '}
                    sharing my knowledge,
                    {' '}
                    and helping others understand and solve problems using the technologies listed above.
                </p>
                <p className="lead">
                    Before Somerset Design, I worked as a Technical Specialist for
                    {' '}
                    <a
                        href="https://mondago.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mondago Ltd
                    </a>,
                    {' '}
                    where I covered two roles: Web Developer and Product Specialist.
                </p>
                <p className="lead">
                    As a Web Developer (using technologies like AJAX, jQuery, Laravel, PHP, and SQL),
                    {' '}
                    I took care of all the public websites, the company's Business System,
                    {' '}
                    and most of the internal online systems.
                </p>
                <p className="lead">
                    I also dedicated part of my time at the company to the Product Specialist role,
                    {' '}
                    where I covered the Italian market, providing sales and technical support.
                    The role granted me the opportunity to attend
                    {' '}
                    <a href="#wheres-waldo" onClick={wheresWaldoLinkOnClick}>
                        conferences
                    </a>
                    {' '}
                    and events in different countries.
                </p>
                <p className="lead">
                    Outside of the office,
                    {' '}
                    you are most likely to find me at a caf&egrave; trying to speak a new foreign language,
                    {' '}
                    or chasing
                    {' '}
                    <a href="#classic-cars" onClick={classicCarsOnClick}>
                        classic cars
                    </a>
                    {' '}
                    in the streets of town.
                </p>
            </div>
        </div>
    </div>
);

AboutContent.propTypes = {
    wheresWaldoLinkOnClick: PropTypes.func,
    classicCarsOnClick: PropTypes.func,
};

export default AboutContent;
