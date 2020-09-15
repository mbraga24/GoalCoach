import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import userInputState from '../hooks/userInputState';
import { goalRef } from '../firebase';
import styles from './AddGoal.module.sass';

const AddGoal = () => {

  const email = useSelector(state => state.user.logUser.email)
  const [ title, setTitle, resetTitle ] = userInputState("")
  const [ description, setDescription, resetDescription ] = userInputState("")
  const [ errorMsg, setErrorMsg ] = useState("")
  const [ isItVisible, setIsItVisible ] = useState(false)

  const dismissMessage = () => {
    setTimeout(() => { 
      setIsItVisible(false)
    }, 2000);
  }

  const handleSubmitGoal = e => {
    e.preventDefault()
    if (title === "" || description === "") {
      setErrorMsg("A goal title and description cannot be blank")
      setIsItVisible(true)
      dismissMessage()
    } else {
      goalRef.push({ email, title, description })
      resetTitle()
      resetDescription()
    }
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
          {
            (errorMsg !== undefined && isItVisible) &&
            <div className="alert alert-danger" role="alert">
              {errorMsg}
            </div>
          }
        </div>
      </div>
    </form>
  )
}

export default AddGoal