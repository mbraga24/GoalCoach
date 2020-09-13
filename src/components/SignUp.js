import React from 'react';
import userInputState from '../hooks/userInputState';

const SignUp = () => {

  const [ email, setEmail, resetEmail ] = userInputState("")
  const [ password, setPassword, resetPassword ] = userInputState("")

  const signUp = e => {
    e.preventDefault()

    console.log(email)
    console.log(password)
    resetEmail()
    resetPassword()
  }

  return (
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
          type="button"
          onClick={signUp}
          >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUp;