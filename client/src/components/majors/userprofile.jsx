import UserSetting from "./usersetting";
import { useState, createContext } from "react";


const UserProfileInformations = ({email, name, surname, phone}) => {

    const [showSetting, setShowSetting] = useState(false)

    return (
        <>  

            {showSetting ? (

                <UserSetting /> 

            ) : (
                <div className='profile-details'>
                    <div>
                        <p>Name</p>
                        <span>{name}</span>
                    </div>

                    <div>
                        <p>Surname</p>
                        <span>{surname}</span>
                    </div>

                    <div>
                        <p>email</p>
                        <span>{email}</span>
                    </div>

                    <div>
                        <p>Phone Number</p>
                        <span>(+234){phone}</span>
                    </div>
                <button onClick={() => setShowSetting(true)} className='edit-button'>Edit Profile</button>
            </div>
            )}
        </>
    )
}

export default UserProfileInformations;