import React from 'react';
import { useSelector } from 'react-redux';
import userInputState from '../hooks/userInputState';
import { goalRef } from '../firebase';
import styles from './AddGoal.module.sass';

const AddGoal = () => {

  const email = useSelector(state => state.user.logUser.email)
  const [ title, setTitle ] = userInputState("")
  const [ description, setDescription ] = userInputState("")

  const handleSubmitGoal = e => {
    e.preventDefault()
    goalRef.push({ email, title, description })
  }

  return ( 
    <form onSubmit={handleSubmitGoal}>
      <div className="form">
        <div className={`${styles.AddGoalFields} form-group`}>
          <input 
            type="text"
            className="form-control"
            placeholder="title"
            name="title"
            value={title}
            onChange={setTitle}
          />
          <textarea 
            type="text"
            className="form-control"
            placeholder="description"
            name="description"
            value={description}
            onChange={setDescription}
          />
          <button
            className="btn btn-success"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddGoal