import React from 'react';
import styles from './GoalItem.module.sass';

const GoalItem = props => {

  const { email, title, description } = props.goal

  return (
    <a href="#" className={`${styles.GoalItemBox} list-group-item list-group-item-action`}>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title[0].toUpperCase() + title.slice(1)}</h5>
        <small>3 days ago</small>
      </div>
      <p className="mb-1">{description}</p>
      <small>Submitted by {email}</small>
    </a>
  )
}

export default GoalItem