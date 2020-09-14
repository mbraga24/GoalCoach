import { SIGNED_IN } from './type';

const defaultState = {
  logUser: null
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case SIGNED_IN:
      return {
        logUser: action.payload
      }
    default:
      return state 
  }
}

export default reducer