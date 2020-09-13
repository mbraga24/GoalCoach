import React, { useState } from 'react';
import userInputState from '../hooks/userInputState';
import styles from './SignIn.module.sass'
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

const SignIn = () => {

  const [ email, setEmail, resetEmail ] = userInputState("")
  const [ password, setPassword, resetPassword ] = userInputState("")
  const [ errorMsg, setErrorMsg ] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      setErrorMsg(error.message)
    })

    console.log(email)
    console.log(password)
    resetEmail()
    resetPassword()
  }

  return (
    <form onSubmit={handleSubmit} className={styles.SignInForm}>
      <div className="form-inline">
        <h2>Sign In</h2>
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
            Sign In
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
        <Link to={'/signup'}>
          Sign up instead
        </Link>
      </div>
    </form>
  );
}

export default SignIn;