import React from 'react';
import { SIGNED_IN } from '../store/type';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { firebaseApp } from '../firebase';
import styles from './Dashboard.module.sass';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

const Dashboard = props => {

  const dispatch = useDispatch()

  const signOut = () => {
    // signing user out
    firebaseApp.auth().signOut()
    props.history.push('/signin')
    dispatch({ type: SIGNED_IN, payload: null })
  }

  return (
    <div className={styles.Dashboard}>
      <h3>Goals</h3>
      <AddGoal />
      <h3>Goal List</h3>
      <GoalList />
      <button
        className="btn btn-danger"
        onClick={signOut}
      >
        Sign out
      </button>
    </div>
    );
}

export default withRouter(Dashboard);