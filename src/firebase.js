import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "goalcoach-5af8c.firebaseapp.com",
  databaseURL: "https://goalcoach-5af8c.firebaseio.com",
  projectId: "goalcoach-5af8c",
  storageBucket: "goalcoach-5af8c.appspot.com",
  messagingSenderId: "129895719940",
  appId: "1:129895719940:web:a8dea79c3b9bc12bcd8151",
  measurementId: "G-6LLXWTCFEW"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const goalRef = firebase.database().ref('goals')