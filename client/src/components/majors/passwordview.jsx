import { ToggleFlips } from "../../App";
import { useContext } from "react";
import { ACTIONS } from "../../actions/app";

const PasswordView = () => {
    
    const { dispatch} = useContext(ToggleFlips)

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
                    <button className='change-password-button' onClick={() => dispatch({ type : ACTIONS.SET_IS_PASSWORD})}>Change password</button>
                </div>
                           
         </div>
        
        </>
    )
}


export default PasswordView;