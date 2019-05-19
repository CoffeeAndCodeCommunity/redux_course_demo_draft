import initialState from '../store/initialState'
import { when } from 'q';

const rootReducer = (state = initialState, action) => {
  // if (action.type === 'CHANGE_GREETING') {
  //   return {
  //     ...state,
  //     greeting: state.proposed_greeting
  //   }
  // } else if (action.type === 'PROPOSE_GREETING') {
  //   return {
  //     ...state,
  //     proposed_greeting: action.greeting
  //   }
  // } else {
  //   return state
  // }

  switch (action.type) {
    case 'CHANGE_GREETING':
      return {
        ...state,
        greeting: state.proposed_greeting
      }
    case 'PROPOSE_GREETING':
      return {
        ...state,
        proposed_greeting: action.greeting
      }
    default:
      return state
  }

}

export default rootReducer