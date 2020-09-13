import React from 'react';
import { firebaseApp } from '../firebase';
import './App.css';

const App = () => {

  const signOut = () => {
    firebaseApp.auth().signOut()
  }

  return (
      <div>
        <button
        className="btn btn-danger"
        onClick={signOut}
        >
          Sign Out
        </button>
      </div>
      );
}

export default App;
