import React from 'react';
import { SIGNED_IN } from '../store/type';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { firebaseApp } from '../firebase';

const Dashboard = props => {

  const dispatch = useDispatch()

  const signOut = () => {
    firebaseApp.auth().signOut()
    props.history.push('/signin')
    dispatch({ type: SIGNED_IN, payload: null })
  }

  console.log(props.history)

  return (
    <div>
      <button
      className="btn btn-danger"
      onClick={signOut}
      >
        Sign Out
      </button>
    </div>
    );
}

export default withRouter(Dashboard);