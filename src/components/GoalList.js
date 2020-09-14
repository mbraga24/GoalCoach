import React, { useEffect } from 'react';
import { SET_GOALS } from '../store/type';
import { useDispatch, useSelector } from 'react-redux';
import { goalRef } from '../firebase';
import GoalItem from './GoalItem';

const GoalList = () => {

  const dispatch = useDispatch()
  const goals = useSelector(state => state.goals.goals)

  useEffect(() => {
    goalRef.on('value', snap => {
      const collectGoals = []
      snap.forEach(goal => {
        const { email, title } = goal.val()
        collectGoals.push({ email, title })
      })
      console.log("USE EFFECT")
      dispatch({ type: SET_GOALS, payload: collectGoals })
    })
  }, [dispatch])

  const renderGoalItems = () => {
    return goals.map((goal) => (
       <GoalItem goal={goal} />
    ))   
  }
  
  console.log("GOALS - GOAL LIST: ", goals)

  return (
    <div class="list-group">
      { goals ? renderGoalItems() : null}
    </div>
  )
}

export default GoalList