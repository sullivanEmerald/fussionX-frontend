
import { ACTIONS } from "../../actions/app";

const userReducer = (state, action) => {

    const { USER_ACTIONS } = ACTIONS;

    switch(action.type) {
        case USER_ACTIONS.SET_PROFILE_PICTURE:
            return {
                ...state,
                profilePicture : action.payload
            }
        case USER_ACTIONS.RESET_PASSWORD:
            return {
                ...state,
                [action.payload.name] : action.payload.value
            }
        case USER_ACTIONS.SET_USER_PROFILE_INFORMATION:
            return {
                ...state,
                userProfileInformation : action.payload
            }
        default :
        
        return state
    }
} 

const TogglePasswordSeen = (state, action) => {

    const { PASSWORD_VISIBILITY} = ACTIONS;

    switch(action.type) {
        case PASSWORD_VISIBILITY.IS_PASSWORD_VISIBLE: 
            return {
                ...state,
                isPasswordVisible : !state.isPasswordVisible
            }
        case PASSWORD_VISIBILITY.IS_CONFIRM_PASSWORD_VISIBLE: 
            return {
                ...state,
                isConfirmPasswordVisible : !state.isConfirmPasswordVisible
            }
        default : 

        return state

    }

}

export {userReducer, TogglePasswordSeen};