import { ToggleFlips } from "../../States/app-context/appContext";
import { useContext } from "react";
import { ACTIONS } from "../../States/actions/app";

const PasswordView = () => {    
    const { APP_ACTIONS} = ACTIONS;
    const {state, dispatch } = useContext(ToggleFlips)

    return (
        <>
         <div className='password-main-section'>
            <p className='profile-header sub-headers'>Password Setting</p>
            <div className='password-section'>
                <div className='password-sect'>
                    <span>Password</span>
                    <img src="/images/icons/EyeClosed.png" alt="logo" /> 
                </div>
                    <span>*************</span>
                    <button className='change-password-button' onClick={() => dispatch({ type : APP_ACTIONS.SET_IS_PASSWORD, payload : !state.isPassword})}>Change password</button>
                </div>
                           
         </div>
        
        </>
    )
}


export default PasswordView;