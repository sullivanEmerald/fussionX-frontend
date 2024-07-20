import { ACTIONS } from "../actions/app"
import { ToggleFlips } from "../App"
import { useContext } from "react"

const ToggleInteface = () => {
        
        const { dispatch } = useContext(ToggleFlips);

        dispatch({ type  : ACTIONS.TOGGLE, payload : false});
        dispatch({ type  : ACTIONS.SET_IS_PASSWORD, payload : false});

}

export default ToggleInteface;