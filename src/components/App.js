import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import './App.css';
import { firebaseApp } from '../firebase';

const App = props => {

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        setUser(authUser)
        console.log(authUser)
      } else {
        setUser(null)
      }
    })
  }, [user])

  console.log("APP: ", props.history)
  return (
    <div>
      <Switch>
        {
          user ?
          <>
            <Route path="/dashboard" render={ () => <Dashboard resetUser={setUser}/>}/>
          </>
          : 
          <>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </>
        }
      </Switch>
    </div>
    );
}

export default withRouter(App);
