import { useContext, useState, useReducer } from 'react';
import { ToggleFlips } from '../../States/app-context/appContext';
import { ACTIONS } from '../../States/actions/app';
import ResetPassword from '../../modals/resetPassword';
import { PasswordReducer } from '../../States/reducers/user/password';
import { INITIALS } from '../../States/initial-states/initial';


   
const ChangePasswordSetting = () => {
    const { state, dispatch } = useContext(ToggleFlips);
    const { APP_ACTIONS} = ACTIONS;
    const [passwordState, passwordDispatch] =  useReducer(PasswordReducer, INITIALS.PASSWORD_RESET)
    const [getpassword, setpassword] = useState({
        password : '',
        confirmPassword : ''
    })
    const[showResetModal, setShowResetModal] = useState(false)


    const resetModal = () => {
        setShowResetModal(true)
    }

    const clsoeResetModal = () => {
        setShowResetModal(false)
    }


    const setNewPassword = (e) => {
        const { name, value} =  e.target;
        setpassword({
            ...getpassword,
            [name] : value
        })
    }


    // useEffect(() => {
    //     const isDisabled = Object.values(getpassword).some(value => value.trim() === '')
    // }, [getpassword])



    return (
        <div className='password-main-section display-profile-setting'>
            <p className='profile-header sub-headers'>Password Setting</p>
            <div className='password-section'>
                <div className='pass-comfirm-profile'>
                    <div>
                        <span className='password-reset-title'>Password</span>
                        <input type='password' placeholder='enter new password' name='password' onChange={setNewPassword} />
                    </div>
                    <div>
                        <span className='password-reset-title'>Confirm Password</span>
                        <input type='password' placeholder='confirm password' name='confirmPassword' onChange={setNewPassword}  />
                    </div>
                </div>
                <button disabled={Object.values(getpassword).some(value => value.trim() === '')} className='change-password-button' onClick={resetModal}>Save Changes</button>
                {state.isPassword && (
                    <img
                        onClick={() => dispatch({ type : APP_ACTIONS.SET_IS_PASSWORD, playload : !state.isPassword })}
                        className='backButton-profile'
                        src='images/dashboard/scrollUp.png'
                        title='back to profile'
                        alt='logo'
                    />
                )}
            </div>
            {showResetModal && <ResetPassword show={resetModal} close={clsoeResetModal} newPassword={getpassword} />}
        </div>
    );
};

export default ChangePasswordSetting;
