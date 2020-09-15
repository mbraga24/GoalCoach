import React from 'react';
import { useSelector } from 'react-redux';
import styles from './GoalItem.module.sass';
import { completeGoalRef, goalRef } from '../firebase';

const GoalItem = props => {

  const { email, title, description } = props.goal
  const loggedUser = useSelector(state => state.user.logUser)

  const completeGoal = e => {
    e.preventDefault()

    // Deconstruct values
    const completedBy = loggedUser.email
    const { title, description, serverKey } = props.goal
    const createdBy = props.goal.email
  
    // Remove goal by its serverKey
    goalRef.child(serverKey).remove()
    // Add complete goal to completeGoalRef database
    completeGoalRef.push({ createdBy, completedBy, title, description, serverKey })
  } 

  return (
    <div className={`${styles.GoalItemBox} list-group-item list-group-item-action`}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title[0].toUpperCase() + title.slice(1)}</h5>
      </div>
      <p className="mb-1">{description}</p>
      <small>Submitted by {email}</small>
      <button 
        className={`btn btn-sm btn-primary ${styles.CompleteButton}`}
        onClick={completeGoal}
        >
          Complete
      </button>
    </div>
  )
}

export default GoalItem