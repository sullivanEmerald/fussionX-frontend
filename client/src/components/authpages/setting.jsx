import ProfileDisplay from '../profile';
import {useContext } from 'react';
import UserProfileInformations from '../majors/userprofile';
import UserSetting from '../majors/usersetting';
import { ToggleFlips } from '../../States/app-context/appContext';
import ErrorMessage from '../majors/message';
import PasswordView from '../majors/passwordview';
import ChangePasswordSetting from '../majors/setpassword';


const ProfileInformations = () => {
    // const {users} =  useUsers() 
    // const {getUser} =  useContext(UserRecords)
    // const [userInfo, setUserInfo] = useState({})
    const { state } = useContext(ToggleFlips)
      
    // useEffect(() => {
    //     if (getUser?.id) {
    //         const userId = getUser.id;
    //         const foundUser = users.find((user) => user._id === userId);
    //         setUserInfo(foundUser || {});
    //     }
    // }, [getUser, users]);


    return (    
        <div className={state.errorMessage !== '' ? 'profile-cover-error' : 'profile-cover'}>


            {state.errorMessage !== '' && <ErrorMessage />}
            

            <section className="profile-info-sect">

                <ProfileDisplay />

                <div>
                    <span className='profile-header'>Profile setting</span>

                        {state.isToggle ? 
                        
                        <UserSetting /> 

                        :
                        
                        <UserProfileInformations />

                        }
                        

                        {state.isPassword ? 

                            <ChangePasswordSetting />

                            :
                            
                            <PasswordView />
                        }

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
        </div>
    )
}


export default ProfileInformations;