import React, { useEffect } from 'react';
import { SET_GOALS } from '../store/type';
import { useDispatch, useSelector } from 'react-redux';
import { goalRef } from '../firebase';

const GoalList = () => {

  const dispatch = useDispatch()
  const goals = useSelector(state => state.goals)

  useEffect(() => {
    goalRef.on('value', snap => {
      const collectGoals = []
      snap.forEach(goal => {
        const { email, title } = goal.val()
        collectGoals.push({ email, title })
      })
      dispatch({ type: SET_GOALS, payload: collectGoals })
    })
  }, [dispatch])
  
  console.log("GOALS - GOAL LIST: ", goals)

  return (
    <div>
      <h4>goal 1</h4>
      <h4>goal 2</h4>
    </div>
  )
}

export default GoalList