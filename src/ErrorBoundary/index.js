import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';

class ErrorBoundary extends Component {
    state = {
        error: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ error });

        if(process.env.NODE_ENV === 'production') {
            window.Raven.captureException(error, { extra: errorInfo });
        }
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return (
                <div style={{height:'100%'}}>
                    <section id="not-found" class="http-error">
                        <div class="text-vertical-center">
                            <h1>500</h1>
                            <h3>{"We're sorry - something's gone wrong."}</h3>
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

        // when there's not an error, render children untouched
        return this.props.children;
    }
}

export default ErrorBoundary;
