
import { ACTIONS } from "../actions/app"

// REDUCER FOR THE WHOLE ROUTES

const APP_REDUCER = (state, action) => {

    const { APP_ACTIONS} = ACTIONS;
    switch (action.type) {
      case APP_ACTIONS.TOGGLE :
        return {
          ...state,
          isToggle : action.payload ?? !state.isToggle
        }
      case APP_ACTIONS.SET_IS_PASSWORD : 
        return {
          ...state,
          isPassword : action.payload ? !state.isPassword : action.payload
        }
      case APP_ACTIONS.SET_ERROR_MESSAGE :
        return {
          ...state,
          errorMessage : action.payload
        }
      case APP_ACTIONS.SET_USER_RETURNED_MESSAGE : 
        return {
          ...state,
          userReturnedMessage  : action.payload
        }
        default :
        
         return state
    }
  }

export {APP_REDUCER }