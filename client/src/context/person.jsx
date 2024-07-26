import { useReducer } from "react"
import { INITIALS } from "../States/initial-states/initial"
import { userReducer } from "../States/reducers/user"
import { UserState } from "../States/app-context/appContext"

const UserProvider = ({ children }) => {

    const { USER_STATE} = INITIALS;

    const [userState, userDispatch] = useReducer(userReducer, USER_STATE)

    return (
        <UserState.Provider value={{ userState, userDispatch}}>
            {children}
        </UserState.Provider>
    ) 
}

export default UserProvider;