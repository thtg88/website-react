import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home/Home';
import './App.css';

class App extends Component {

    componentDidMount() {
        if (window.Raven) {
            window.Raven.config('https://'+process.env.REACT_APP_SENTRY_KEY+'@sentry.io/'+process.env.REACT_APP_SENTRY_PROJECT_ID).install();
        }
    }

    render() {
        return (
            <ErrorBoundary>
                <Home />
            </ErrorBoundary>
        );
    }
}
export default App;
