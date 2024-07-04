import { ToggleFlips } from "../../App";
import { useContext } from "react";

const PasswordView = () => {
    
    const { setIsPassword} = useContext(ToggleFlips)

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
                    <button className='change-password-button' onClick={() => setIsPassword((prev) => !prev)}>Change password</button>
                </div>
                           
         </div>
        
        </>
    )
}


export default PasswordView;