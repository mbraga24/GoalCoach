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
      snap.forEach(goal => {
        const { email, title, description } = goal.val()
        collectGoals.push({ email, title, description })
      })
      dispatch({ type: SET_GOALS, payload: collectGoals })
    })
  }, [dispatch])

  const renderGoalItems = () => {
    return goals.map((goal, index) => (
       <GoalItem key={index} goal={goal} />
    ))   
  }
  
  console.log("GOALS - GOAL LIST: ", goals)

  return (
    <div className="list-group">
      {renderGoalItems()}
    </div>
  )
}

export default GoalList