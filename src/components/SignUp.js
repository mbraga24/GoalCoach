import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userInputState from '../hooks/userInputState';
import styles from './SignUp.module.sass'
import { firebaseApp } from '../firebase';

const SignUp = props => {

  const [ email, setEmail ] = userInputState("")
  const [ password, setPassword ] = userInputState("")
  const [ errorMsg, setErrorMsg ] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log(email, password)
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    .catch(error => {
      console.log(error.message)
      setErrorMsg(error.message)
    })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.SignUpForm}>
      <div className="form-inline">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input 
            className="form-control"
            type="text"
            placeholder="email"
            value={email}
            onChange={setEmail}
          />
          <input 
            className="form-control"
            type="password"
            placeholder="password"
            value={password}
            onChange={setPassword}
          />
          <button 
            className="btn btn-primary"
            type="submit"
            >
            Sign Up
          </button>
        </div>
      </div>
      {
        errorMsg.length !== 0 && 
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      }
      <div>
        <Link to={'/signin'}>
          Already a user? Sign in instead
        </Link>
      </div>
    </form>
  );
}

export default SignUp;