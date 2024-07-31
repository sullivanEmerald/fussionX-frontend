

const ResetPasswordForm = ({ handleClose, password}) => {
   
    return (
        <div className='password-reset-modal'>
                <img src='/images/icons/close.png' onClick={() => handleClose()} className='close-button' alt='logo' />
                <p>Password Reset</p>
                <div>
                    <span>Previous Password</span>
                    <input type='password' placeholder='Enter your Previous Password'  />
                </div>

                <button className='confirm-button'>Confirm Password</button>
            </div>
    )
}


export default ResetPasswordForm;