import { useReducer } from "react"
import { APP_REDUCER } from '../user/States/reducers/main'
import { INITIALS } from "../user/States/initial-states/initial"
import { ToggleFlips } from "../user/States/app-context/appContext"

const AppProvider = ({children }) => {
    
    const { INITIAL_STATE} = INITIALS;
    
    const [state, dispatch]= useReducer(APP_REDUCER, INITIAL_STATE);

    return (
        <ToggleFlips.Provider value={{ state, dispatch}}>
            {children}
        </ToggleFlips.Provider>
    )

}

export default AppProvider;