import ProfileDisplay from '../profile';
import UserSetting from '../majors/usersetting';
import { useState } from 'react';
import ChangePassword from '../majors/setpassword';
import { ProfileToggle } from '../majors/userprofile';

const UserProfileDetails = () => {
    const [error, setError] = useState('')
    
    return (
        <>
            <main className='profile-setting-main'>
                <section className="profile-info-sect display-profile-setting">
                    
                <ProfileDisplay />

        <div>
            <span className='profile-header'>Profile setting</span>

                {error !== '' && <span style={{ color : 'red'}}>{error}</span>}

                <UserSetting profileSetting={false} />
            
                <ChangePassword />

                <p className='profile-header sub-headers'>Account details</p>
                <div className='account-details'>
                    <div>
                        <span className='acct-info'>Account number: <label style={{ opacity : '100%', color : '#FFFFFF'}}>087678976</label></span>
                        <span className='profile-copy'>Copy</span>
                    </div>
                    <span className='profile-bank'>Bank: <label style={{ opacity : '50%'}}>Opay</label></span>
                </div>
        </div>
    </section>
            </main>

        {/* MODALS */}

        <div className='transaction-account'>
            <p>
                Copy account number below to fund your account
            </p>

            <p><label style={{ opacity : '50%'}}>Account number:</label> 087678976 <label style={{ color : '#FF6C04', paddingLeft : '10px'}}>Copy</label></p>
            <p><label style={{ opacity : '50%'}}>Bank:</label> Opay</p>
            <img src='/images/icons/close.png' className='close-button' alt='logo' />
        </div>

        </>
    )
} 

export default UserProfileDetails;