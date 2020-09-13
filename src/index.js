import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { firebaseApp } from './firebase';
import './index.css';
import * as serviceWorker from './serviceWorker';

// firebaseApp.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log('User has signed in or up', user)
//   } else {
//     console.log('User has signed out or still needs to sign in')
//   }
// })

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/app" component={App}/>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
