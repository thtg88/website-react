import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { configureScope, captureException } from '@sentry/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const {
    NODE_ENV,
    REACT_APP_SENTRY_KEY,
    REACT_APP_SENTRY_PROJECT_ID
} = process.env;

class ErrorBoundary extends Component {
    state = {
        error: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ error });

        if(
            NODE_ENV === 'production'
            && typeof REACT_APP_SENTRY_KEY !== 'undefined'
            && REACT_APP_SENTRY_KEY !== null
            && REACT_APP_SENTRY_KEY !== ''
            && typeof REACT_APP_SENTRY_PROJECT_ID !== 'undefined'
            && REACT_APP_SENTRY_PROJECT_ID !== null
            && REACT_APP_SENTRY_PROJECT_ID !== ''
        ) {
            // If app in production, send error to Sentry
            configureScope(scope => {
                Object.keys(errorInfo).forEach(key => {
                    scope.setExtra(key, errorInfo[key]);
                });
            });

            captureException(error);
        }
    }

    render() {
        if (this.state.error !== null) {
            // Render fallback UI
            return (
                <div style={{height:'100%'}}>
                    <section id="not-found" className="http-error">
                        <div className="text-vertical-center">
                            <h1>500</h1>
                            <h3>We're sorry - something's gone wrong.</h3>
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
