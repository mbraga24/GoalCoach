import React, { useEffect } from 'react';
import { goalRef } from '../firebase';

const GoalList = () => {

  useEffect(() => {
    goalRef.on('value', snap => {
      const goals = []
      snap.forEach(goal => {
        const { email, title } = goal.val()
        goals.push({ email, title })
      })
      console.log("GOALS - GOAL LIST: ", goals)
    })
  }, [])

  return (
    <div>
      <h4>goal 1</h4>
      <h4>goal 2</h4>
    </div>
  )
}

export default GoalList