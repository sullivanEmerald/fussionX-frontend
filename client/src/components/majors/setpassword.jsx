import { useContext } from 'react';
import { ToggleFlips } from '../../States/app-context/appContext';
import { ACTIONS } from '../../States/actions/app';
   
const ChangePasswordSetting = () => {
    const { state, dispatch } = useContext(ToggleFlips);
    const { APP_ACTIONS} = ACTIONS;

    return (
        <div className='password-main-section display-profile-setting'>
            <p className='profile-header sub-headers'>Password Setting</p>
            <div className='password-section'>
                <div className='pass-comfirm-profile'>
                    <div>
                        <span>Password</span>
                        <input placeholder='enter new password' />
                    </div>
                    <div>
                        <span>Confirm Password</span>
                        <input placeholder='confirm password' />
                    </div>
                </div>
                <button className='change-password-button'>Save Changes</button>
                {state.isPassword && (
                    <img
                        onClick={() => dispatch({ type : APP_ACTIONS.SET_IS_PASSWORD, payload : true })}
                        className='backButton-profile'
                        src='images/dashboard/scrollUp.png'
                        title='back to profile'
                        alt='logo'
                    />
                )}
            </div>
        </div>
    );
};

export default ChangePasswordSetting;
