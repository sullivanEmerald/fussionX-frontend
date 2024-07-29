import { useContext, useState } from 'react';
import { ToggleFlips } from '../../States/app-context/appContext';
import { ACTIONS } from '../../States/actions/app';
   
const ChangePasswordSetting = () => {
    const { state, dispatch } = useContext(ToggleFlips);
    const { APP_ACTIONS} = ACTIONS;
    const [getpassword, setpassword] = useState({
        password : '',
        confirmPassword : ''
    })


    const setNewPassword = (e) => {
        const { name, value} =  e.target;
        setpassword({
            ...getpassword,
            [name] : value
        })
    }

    console.log(getpassword)



    return (
        <div className='password-main-section display-profile-setting'>
            <p className='profile-header sub-headers'>Password Setting</p>
            <div className='password-section'>
                <div className='pass-comfirm-profile'>
                    <div>
                        <span className='password-reset-title'>Password</span>
                        <input placeholder='enter new password' name='password' onChange={setNewPassword} />
                    </div>
                    <div>
                        <span className='password-reset-title'>Confirm Password</span>
                        <input placeholder='confirm password' name='confirmPassword' onChange={setNewPassword}  />
                    </div>
                </div>
                <button className='change-password-button'>Save Changes</button>
                {state.isPassword && (
                    <img
                        onClick={() => dispatch({ type : APP_ACTIONS.SET_IS_PASSWORD, playload : !state.isPassword })}
                        className='backButton-profile'
                        src='images/dashboard/scrollUp.png'
                        title='back to profile'
                        alt='logo'
                    />
                )}
                <p>{getpassword?.password}</p>
                <p>{getpassword?.confirmPassword}</p>
            </div>
        </div>
    );
};

export default ChangePasswordSetting;
