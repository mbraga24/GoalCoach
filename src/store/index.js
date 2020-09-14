import { createStore, combineReducers } from 'redux';
import reducerUser from './reducerUser';
import reducerGoals from './reducerGoals';

const rootReducer = combineReducers({
  user: reducerUser, 
  goal: reducerGoals
})

const store = createStore(rootReducer)

export default store