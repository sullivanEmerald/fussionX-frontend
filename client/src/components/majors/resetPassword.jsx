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

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(oldPassword.toLowerCase() === password.toLowerCase()) {
           return setError('The new password matches your old password, Provide a new password')
        }

       try {

        const response = await fetch(`/users/changepassword`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ oldPassword, userPass : password})
        })

        if(!response.ok){
            const { error} = await response.json()
            setError(error)
        }else{
            console.log('sucessful')
        }
        
       } catch (error) {
        
       }
    }
   
    return (
        <div className='password-reset-modal'>
                <img src='/images/icons/close.png' onClick={() => handleClose()} className='close-button' alt='logo' />
                <span style={{ display: 'block', textAlign: 'center', marginBottom : '15xpx' }}>Password Reset</span>
                {error !== '' && <p style={{ color : 'red', margin : '10px'}}>{error}</p>}
                <div>
                    <label htmlFor='oldPassword'>Previous Password</label>
                    <form onSubmit={handleSubmit}>
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
                            <input
                                className="form-control"
                                placeholder="Enter old password"
                                name='newPassword'
                                onChange={getPassword}
                                type='hidden'
                                value={password}
                            />
                    </section>
                        <button type='submit' className='confirm-button'>Confirm Password</button>
                    </form>
                    
                </div>
                
            </div>
    )
}


export default ResetPasswordForm;