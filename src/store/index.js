import { createStore, combineReducers } from 'redux';
import user from './reducerUser';
import goals from './reducerGoals';
import complete from './reducerCompleteGoals';

const rootReducer = combineReducers({
  user,
  goals,
  complete
})

const store = createStore(rootReducer)

export default store