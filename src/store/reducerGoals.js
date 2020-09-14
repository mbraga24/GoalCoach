import { SET_GOALS } from './type';

const defaultState = {
  goals: []
}

const store = (state = defaultState, action) => {
  switch(action.type) {
    case SET_GOALS:
      return {
        ...state,
        goals: [...action.payload]
      }
    default:
      return state
  }

}

export default store