import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import PreLoader from './laoder';
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm = ({ handleClose, password }) => {
    const [isOldPasswordVisible, setOldPasswordVisible] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [error, setError] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate()

    const getPassword = (e) => {
        const { value } = e.target;
        setOldPassword(value.trim());
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setError(''); 

        if (oldPassword.toLowerCase() === password.toLowerCase()) {
            setIsProcessing(false);
            return setError('The new password matches your old password, please provide a new password.');
        }

        try {
            const response = await fetch('/users/changepassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ oldPassword, userPass: password })
            });

            if (!response.ok) {
                const { error, redirect } = await response.json();
                if (redirect) {
                    setTimeout(() => {
                        setError(error);
                        alert('Redirecting to login...'); 
                        navigate('/login', {replace : true})
                    }, 4000);
                } else {
                    setError(error);
                }
                return; 
            }

            const { msg } = await response.json();
            // Handle success (e.g., display a success message)
        } catch (error) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    }

    return (
        <div className='password-reset-modal'>
            <img src='/images/icons/close.png' onClick={handleClose} className='close-button' alt='close' />
            <span style={{ display: 'block', textAlign: 'center', marginBottom: '15px' }}>Password Reset</span>
            {error && <p style={{ color: 'red', margin: '10px' }}>{error}</p>}
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
                            value={password}
                        />
                    </section>
                    <button disabled={isProcessing || oldPassword === "" } type='submit' className='confirm-button'>
                        {isProcessing ? <PreLoader stateCondition='Resetting Password' /> : 'Confirm Password'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPasswordForm;
