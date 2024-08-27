import { useContext } from "react"; 
import { ToggleFlips} from '../States/app-context/appContext'
import { ACTIONS } from "../States/actions/app";

const ToggleInteface = () => {
        const { APP_ACTIONS} = ACTIONS
        const { dispatch } = useContext(ToggleFlips);

        dispatch({ type  : APP_ACTIONS.TOGGLE, payload : false});
        dispatch({ type  : APP_ACTIONS.SET_IS_PASSWORD, payload : false});

}

export default ToggleInteface;