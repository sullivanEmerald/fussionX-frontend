import { useReducer } from "react"
import { INITIALS } from "../user/States/initial-states/initial"
import { userReducer } from "../user/States/reducers/user/user"
import { UserState } from "../user/States/app-context/appContext"

const UserProvider = ({ children }) => {

    const { USER_STATE } = INITIALS;

    const [userState, userDispatch] = useReducer(userReducer, USER_STATE)

    return (
        <UserState.Provider value={{ userState, userDispatch}}>
            {children}
        </UserState.Provider>
    ) 
}

export default UserProvider;