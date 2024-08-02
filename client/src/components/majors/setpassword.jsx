import React, { useContext, useReducer, useState } from 'react';
import { ToggleFlips } from '../../States/app-context/appContext';
import { ACTIONS } from '../../States/actions/app';
import ResetPassword from '../../modals/resetPassword';
import { INITIALS } from '../../States/initial-states/initial';
import { userReducer } from '../../States/reducers/user/user';
import useModal from '../../hooks/password';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


// Validation schema
const validationSchema = yup.object().shape({
    password: yup.string().required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
});

const ChangePasswordSetting = () => {
    const { state, dispatch } = useContext(ToggleFlips);
    const { APP_ACTIONS, USER_ACTIONS } = ACTIONS;
    const [userState, userDispatch] = useReducer(userReducer, { ...INITIALS.USER_STATE, ...INITIALS.PASSWORD_RESET });
    const [showResetModal, openResetModal, closeResetModal] = useModal(false);
    const [errors, setErrors] = useState({});
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const setNewPassword = (e) => {
        setErrors({});
        const { name, value } = e.target;
        userDispatch({ type: USER_ACTIONS.RESET_PASSWORD, payload: { name, value : value.trim()} });
    };

    const handleSaveChanges = async () => {
        setErrors({});
        try {
            await validationSchema.validate(userState, { abortEarly: false });
            setErrors({});
            openResetModal();
        } catch (err) {
            const validationErrors = {};
            err.inner.forEach((error) => {
                validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
        }
    };


    return (
        <div className='password-main-section display-profile-setting'>
            <section className='password-error-handler'>
                <p className='profile-header sub-headers'>Password Setting</p>
                {errors !== null && (
                    <span className='error-message'>
                        {errors.password ? errors.password : errors.confirmPassword}
                    </span>
                )}
            </section>
            <div className='password-section'>
                <form className='pass-comfirm-profile'>
                    <section>
                        <label className='password-reset-title' htmlFor='password'>Password</label>
                        <div className="input-group">
                            <button type="button" className="input-group-text" onClick={() => setIsPasswordVisible((prev) => !prev)}>
                                <FontAwesomeIcon 
                                    icon={isPasswordVisible ? faEyeSlash : faEye}
                                    className='password-reveal-button'
                                />
                            </button>
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                className="form-control"
                                id='password'
                                placeholder="Enter new password"
                                name='password'
                                onChange={setNewPassword}
                            />
                        </div>
                    </section>

                    <section>
                        <label className='password-reset-title' htmlFor='confirmPassword'>Confirm Password</label>
                        <div className="input-group">
                            <button type="button" className="input-group-text" onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}>
                                <FontAwesomeIcon 
                                    icon={isConfirmPasswordVisible ? faEyeSlash : faEye}
                                    className='password-reveal-button'
                                />
                            </button>
                            <input
                                type={isConfirmPasswordVisible ? "text" : "password"}
                                id='confirmPassword'
                                className="form-control"
                                placeholder="Confirm password"
                                name='confirmPassword'
                                onChange={setNewPassword}
                            />
                        </div>
                    </section>
                </form>
                <button
                    disabled={userState.password === '' || userState.confirmPassword === ''}
                    className='change-password-button'
                    onClick={handleSaveChanges}
                >
                    Save Changes
                </button>
                {state.isPassword && (
                    <img
                        onClick={() => dispatch({ type: APP_ACTIONS.SET_IS_PASSWORD, playload: !state.isPassword })}
                        className='backButton-profile'
                        src='images/dashboard/scrollUp.png'
                        title='Back to profile'
                        alt='logo'
                    />
                )}
            </div>
            {showResetModal && (
                <ResetPassword show={openResetModal} close={closeResetModal} newPassword={{ password : userState.password}} />
            )}
        </div>
    );
};

export default ChangePasswordSetting;
