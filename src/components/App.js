import React from 'react';
// import { firebaseApp } from '../firebase';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import './App.css';
import { firebaseApp } from '../firebase';

const App = () => {

  firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('user has signed in or up', user)
    } else {
      console.log('user has signed out or still need to sign in')
    }
  })

  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
    );
}

export default App;
