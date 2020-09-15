import React, { useEffect } from 'react';
import { SET_GOALS } from '../store/type';
import { useDispatch, useSelector } from 'react-redux';
import { goalRef } from '../firebase';
import GoalItem from './GoalItem';

const GoalList = () => {

  const dispatch = useDispatch()
  const goals = useSelector(state => state.goals.goals)

  useEffect(() => {
    // Reading data from firebase database
    goalRef.on('value', snap => {
      const collectGoals = []
      // Loop through each goal from the database
      snap.forEach(goal => {
        const { email, title, description } = goal.val()
        // Goal unique key
        const serverKey = goal.key
        collectGoals.push({ email, title, description, serverKey })
      })
      // Set goals global state
      dispatch({ type: SET_GOALS, payload: collectGoals })
    })
  }, [dispatch])

  const renderGoalItems = () => {
    return goals.map((goal, index) => (
       <GoalItem key={index} goal={goal} />
    ))   
  }

  return (
    <div className="list-group">
      {renderGoalItems()}
    </div>
  )
}

export default GoalList