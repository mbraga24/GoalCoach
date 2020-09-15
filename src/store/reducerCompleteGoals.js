import { SET_COMPLETE } from './type';

const defaultState = {
  completed: []
}

const store = (state = defaultState, action) => {
  switch(action.type) {
    case SET_COMPLETE:
      return {
        completed: [...action.payload]
      }
    default:
      return state
  }
}

export default store