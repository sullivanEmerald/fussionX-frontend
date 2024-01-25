
const ChangePassword = () => {
    return  (
        <>
            <div className='password-main-section'>
                    <p className='profile-header sub-headers'>Password Setting</p>
                    <div className='password-section'>
                        <div className='pass-comfirm-profile'>
                            <div>
                                <span>Password</span>
                                <input placeholder='VicBet'  />
                            </div>
                            <div>
                                <span>Confirm Password</span>
                                <input placeholder='VicBet'  />
                            </div>
                        </div>
                        <button className='change-password-button'>Save Changes</button>
                    </div>
                   
                </div>
        </>
    )
}


export default ChangePassword;