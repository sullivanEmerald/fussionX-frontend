import { useReducer } from "react";
import { TogglePasswordSeen} from '../States/reducers/user/user'
import { INITIALS } from "../States/initial-states/initial";
import { ACTIONS } from "../States/actions/app";

const TogglePasswordVisibility = () => {

    const { REVEAL_PASSWORD} = INITIALS;

    const { PASSWORD_VISIBILITY } = ACTIONS;

    const [ passsWordState, passwordDispatch] = useReducer(TogglePasswordSeen, REVEAL_PASSWORD)

    const RevealPassword = () => {
        passwordDispatch({ type : PASSWORD_VISIBILITY.IS_PASSWORD_VISIBLE})
    }

    const RevealConfrimPassword = () => {
        passwordDispatch({ type : PASSWORD_VISIBILITY.IS_CONFIRM_PASSWORD_VISIBLE})
    }

    return [ passsWordState, RevealPassword, RevealConfrimPassword]

}

export default TogglePasswordVisibility;