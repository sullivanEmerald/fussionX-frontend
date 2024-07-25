import { useReducer } from "react"
import { APP_REDUCER } from "../States/reducers/main"
import { Initials } from "../States/initial-states/initial"
import { ToggleFlips } from "../States/app-context/appContext"

const AppProvider = ({children }) => {

    const [state, dispatch ]= useReducer(APP_REDUCER, Initials)

    return (
        <ToggleFlips.Provider value={{ state, dispatch}}>
            {children}
        </ToggleFlips.Provider>
    )

}

export default AppProvider;