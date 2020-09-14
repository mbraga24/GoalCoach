import React from 'react';
import { withRouter } from 'react-router-dom';
import { firebaseApp } from '../firebase';

const Dashboard = props => {

  const signOut = () => {
    firebaseApp.auth().signOut()
    props.history.push('/signin')
    props.resetUser(null)
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