import React from 'react';
import styles from './CompleteGoalItem.module.sass'

const CompleteGoalItem = props => {

  const { createdBy, completedBy, title, description } = props.goal

  return(
    <div className={`${styles.GoalItemBox} list-group-item list-group-item-action`}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title[0].toUpperCase() + title.slice(1)}</h5>
      </div>
      <p className="mb-1">{description}</p>
      <small>Completed by {completedBy}</small> | <small>Submitted by {createdBy}</small>
    </div> 
  )
}

export default CompleteGoalItem