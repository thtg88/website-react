import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error });
        window.Raven.captureException(error, { extra: errorInfo });
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return (
                <div>
                    <h1>We're sorry - something's gone wrong.</h1>
                    <p>Our team has been notified.</p>
                </div>
            );
        } else {
            //when there's not an error, render children untouched
            return this.props.children;
        }
    }
}
export default ErrorBoundary;
