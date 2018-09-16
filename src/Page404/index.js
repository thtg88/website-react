import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Page404 = () => (
    <div style={{height:'100%'}}>
        <section id="not-found" className="http-error">
            <div class="text-vertical-center">
                <h1>404</h1>
                <h3>Page not found.</h3>
                <Link to="/" className="btn btn-dark btn-lg">
                    <FontAwesomeIcon fixedWidth icon={faHome} />
                    {" "}
                    Home
                </Link>
            </div>
        </section>
    </div>
);

export default Page404;
