import { createStore, combineReducers } from 'redux';
import user from './reducerUser';
import goals from './reducerGoals';

const rootReducer = combineReducers({
  user,
  goals
})

const store = createStore(rootReducer)

export default store