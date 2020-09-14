import React from 'react';
import { useSelector } from 'react-redux';
import userInputState from '../hooks/userInputState';
import { goalRef } from '../firebase';

const AddGoal = () => {

  const email = useSelector(state => state.user.logUser.email)
  const [ goal, setGoal ] = userInputState("")

  const handleSubmitGoal = e => {
    e.preventDefault()
    const title = goal
    console.log(email, title)
    goalRef.push({ email, title })
  }

  return ( 
    <form onSubmit={handleSubmitGoal}>
      <div className="form-inline">
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            placeholder="Add a goal"
            name="newGoal"
            value={goal}
            onChange={setGoal}
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