import React, { useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { SIGNED_IN } from '../store/type';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import './App.css';
import { firebaseApp } from '../firebase';

const App = props => {

  const dispatch = useDispatch()
  const loggedInUser = useSelector(state => state.user.logUser)

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({ type: SIGNED_IN, payload: authUser })
      }
    })
  }, [dispatch])

  // console.log("APP: ", user)
  return (
    <div>
      <Switch>
        {
          loggedInUser ?
          <>
            <Route path="/dashboard" component={Dashboard} />
            <Redirect to="/dashboard" />
          </> 
          :
          <>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Redirect to="/signin" />
          </>
        }
      </Switch>
    </div>
    );
}

export default withRouter(App);
