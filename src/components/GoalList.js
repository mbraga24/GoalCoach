import React, { useEffect } from 'react';
import { SET_GOALS } from '../store/type';
import { useDispatch, useSelector } from 'react-redux';
import { goalRef } from '../firebase';

const GoalList = () => {

  const dispatch = useDispatch()
  const goals = useSelector(state => state.goal.goals)

  useEffect(() => {
    goalRef.on('value', snap => {
      const goals = []
      snap.forEach(goal => {
        const { email, title } = goal.val()
        goals.push({ email, title })
      })
      dispatch({ type: SET_GOALS, payload: goals })
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