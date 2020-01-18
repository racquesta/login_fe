import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Authorization from './Authorization';
import SignIn from './components/index.js/SignIn';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Authorization
    render={props => (
      <Router>
        <Route exact path="/" component={App} {...props} />
        <Route exact path="/signin" component={SignIn} {...props} />
      </Router>
    )}
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
