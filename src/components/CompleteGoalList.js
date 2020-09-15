import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SET_COMPLETE } from '../store/type';
import { completeGoalRef } from '../firebase';
import CompleteGoalItem from './CompleteGoalItem';
import styles from './CompleteGoalList.module.sass';

const CompleteGoalList = () => {

  const dispatch = useDispatch()
  const completedGoals = useSelector(state => state.complete.completed)

  useEffect(() => {
    // Read data from firebase database
    completeGoalRef.on('value', snap => {
      const collectGoals = []
      // Loop through each completed goal from the database
      snap.forEach(goal => {
        const { createdBy, completedBy, title, description, serverKey } = goal.val()
        // Goal unique key
        collectGoals.push({ createdBy, completedBy, title, description, serverKey })
      })
      dispatch({ type: SET_COMPLETE, payload: collectGoals })
    })
  },[dispatch])


  const clearAll = e => {
    e.preventDefault()
    // Clear all completed goals by its serverKey
    completeGoalRef.set([])
  }

  const renderCompleteGoals = () => {
    return completedGoals.map((goal, index) => (
      <CompleteGoalItem key={index} goal={goal} />
    ))
  }

  return (
    <div className="list-group">
      {renderCompleteGoals()}
      <hr/>
      <div className={`${styles.ButtonContainer}`}>
        <button 
          className="btn btn-sm btn-secondary"
          onClick={clearAll}
          >
            Clear All
        </button>
      </div>
    </div>
  )
}

export default CompleteGoalList