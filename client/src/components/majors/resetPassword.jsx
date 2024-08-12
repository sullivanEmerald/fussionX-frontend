import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import PreLoader from './laoder';
import { useNavigate } from 'react-router-dom';
import { ACTIONS } from '../../States/actions/app';
import { ToggleFlips } from '../../States/app-context/appContext';

const ResetPasswordForm = ({ handleClose, setPasswordError, newPassword }) => {
    const { APP_ACTIONS} = ACTIONS;
    const {state, dispatch} = useContext(ToggleFlips)
    const [isOldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [countdown, setCountdown] = useState(0);
    const navigate = useNavigate();

    const getPassword = (e) => {
        const { value } = e.target;
        setOldPassword(value.trim());
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setError('');

        if (oldPassword.toLowerCase() === newPassword.password.toLowerCase()) {
            setIsProcessing(false);
            return setError('The new password matches your old password, please provide a new password.');
        }

        try {
            const response = await fetch('/users/changepassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ oldPassword, userPass: newPassword.password })
            });

            if (!response.ok) {
                const { error, redirect } = await response.json();
                if (redirect) {
                    let secondsRemaining = 4;
                    setCountdown(secondsRemaining);

                    const intervalId = setInterval(() => {
                        secondsRemaining -= 1;
                        setCountdown(secondsRemaining);
                    }, 1000);

                    setTimeout((error) => {
                        clearInterval(intervalId);
                        setError(`${error}, Redirecting to the Login Page in ${countdown}s`);
                        navigate('/login', { replace: true });
                    }, 4000);
                } else {
                    setError(error);
                }
                return;
            }

            const { msg } = await response.json();
            handleClose()
            dispatch({ type : APP_ACTIONS.SET_USER_RETURNED_MESSAGE, payload : true})
            setPasswordError({ message : msg})

            
        } catch (error) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className='password-reset-modal'>
            <img src='/images/icons/close.png' onClick={handleClose} className='close-button' alt='close' />
            <span style={{ display: 'block', textAlign: 'center', marginBottom: '15px' }}>Password Reset</span>
            {error && <p style={{ color: 'red', margin: '10px' }}>{error}</p>}
            {countdown > 0 && <p style={{ color: 'blue', margin: '10px' }}>Redirecting in {countdown} seconds...</p>}
            <div>
                <label htmlFor='oldPassword'>Previous Password</label>
                <form onSubmit={handleSubmit}>
                    <section>
                        <div className="input-group">
                            <button type="button" className="reset-password-toggle" onClick={() => setOldPasswordVisible(!isOldPasswordVisible)}>
                                <FontAwesomeIcon 
                                    icon={isOldPasswordVisible ? faEyeSlash : faEye}
                                    className='reset-reveal-button'
                                />
                            </button>
                            <input
                                type={isOldPasswordVisible ? 'text' : 'password'}
                                className="form-control"
                                id='oldPassword'
                                placeholder="Enter old password"
                                name='oldPassword'
                                onChange={getPassword}
                                value={oldPassword}
                                required
                            />
                        </div>
                        <input
                            type='hidden'
                            name='newPassword'
                            value={newPassword.password}
                        />
                    </section>
                    <button disabled={isProcessing || oldPassword === ""} type='submit' className='confirm-button'>
                        {isProcessing ? <PreLoader stateCondition='Resetting Password' /> : 'Reset Password'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordForm;
