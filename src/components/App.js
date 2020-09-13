import React from 'react';
// import { firebaseApp } from '../firebase';
import { Switch, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {

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
