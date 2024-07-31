
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
        default :

        return state
    }
} 

export {userReducer};