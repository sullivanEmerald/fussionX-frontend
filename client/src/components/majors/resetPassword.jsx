import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ResetPasswordForm = ({ handleClose, password}) => {

    const [isOldPasswordVisible, setOldPasswordVisible] = useState(false)
    const [oldPassword, setOldPassword] = useState('')
    const [error, setError] = useState('')

    const getPassword = (e) => {
        const { value } = e.target;
        setOldPassword(value.trim())
    }
   
    return (
        <div className='password-reset-modal'>
                <img src='/images/icons/close.png' onClick={() => handleClose()} className='close-button' alt='logo' />
                <span style={{ display: 'block', textAlign: 'center', marginBottom : '15xpx' }}>Password Reset</span>
                {error !== '' && <p style={{ color : 'red', margin : '10px'}}>{error}</p>}
                <div>
                    <label htmlFor='oldPassword'>Previous Password</label>
                    <form>
                    <section>
                        <div className="input-group">
                            <button type="button" className="reset-password-toggle" onClick={() => setOldPasswordVisible((prev) => !prev)}>
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
                                name='password'
                                onChange={getPassword}
                            />
                        </div>
                    </section>
                    </form>
                </div>
                <button className='confirm-button'>Confirm Password</button>
                <p>{oldPassword}</p>
            </div>
    )
}


export default ResetPasswordForm;