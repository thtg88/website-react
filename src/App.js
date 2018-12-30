import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { init } from '@sentry/browser';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import Page404 from './Page404';

const {
    NODE_ENV,
    REACT_APP_SENTRY_KEY,
    REACT_APP_SENTRY_PROJECT_ID
} = process.env;

class App extends Component {
    componentDidMount() {
        if(
            NODE_ENV === 'production'
            && typeof REACT_APP_SENTRY_KEY !== 'undefined'
            && REACT_APP_SENTRY_KEY !== null
            && REACT_APP_SENTRY_KEY !== ''
            && typeof REACT_APP_SENTRY_PROJECT_ID !== 'undefined'
            && REACT_APP_SENTRY_PROJECT_ID !== null
            && REACT_APP_SENTRY_PROJECT_ID !== ''
        ) {
            // Initialize Sentry error tracking
            init({
                dsn: `https://${REACT_APP_SENTRY_KEY}@sentry.io/${REACT_APP_SENTRY_PROJECT_ID}`
            });
        }
    }

    render() {
        return (
            <BrowserRouter>
                <ErrorBoundary>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route component={Page404} />
                    </Switch>
                </ErrorBoundary>
            </BrowserRouter>
        );
    }
}

export default App;
