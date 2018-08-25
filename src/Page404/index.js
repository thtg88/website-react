import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';

class Page404 extends Component {
    state = {
        error: null
    };

    render() {
        return (
            <div style={{height:'100%'}}>
                <section id="not-found" class="http-error">
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
    }
}

export default Page404;
