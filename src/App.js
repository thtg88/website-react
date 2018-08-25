import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import Page404 from './Page404';

class App extends Component {

    componentDidMount() {
        if (window.Raven && process.env.NODE_ENV === 'production') {
            const { REACT_APP_SENTRY_KEY, REACT_APP_SENTRY_PROJECT_ID } = process.env;

            const raven_url = 'https://'+REACT_APP_SENTRY_KEY+'@sentry.io/'+REACT_APP_SENTRY_PROJECT_ID;

            window.Raven.config(raven_url).install();
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
