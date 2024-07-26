import { ACTIONS } from "../../Reducer/actions/app"

const userReducer = (state, action) => {
    const { USER_ACTIONS } = ACTIONS;

    switch(state, action.type) {
        case USER_ACTIONS.SET_PROFILE_PICTURE:
            return {
                ...state,
                profilePicture : action.payload
            }
    }
}

export {userReducer};