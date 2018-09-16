import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './theme.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function render(Component) {
    ReactDOM.render(
        <Component />,
        document.getElementById('root')
    );
}

render(App);

if(module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    })
}

registerServiceWorker();
