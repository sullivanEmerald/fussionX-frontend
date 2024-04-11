import { ToggleFlips } from "../../App";
import { useContext } from "react";
import { UserRecords } from "../../App";
import { useEffect, useState} from "react";

const UserProfileInformations = () => {
    const { getUser } =  useContext(UserRecords)
    const {setToggle} = useContext(ToggleFlips)
    const [userProfile, setUserProfile] = useState(getUser)

    useEffect(() => {
        setUserProfile({...getUser})
    }, [getUser])

    return (
        <>  
                <div className='profile-details'>
                    <div>
                        <p>Name</p>
                        <span>{userProfile.name}</span>
                    </div>

                    <div>
                        <p>Surname</p>
                        <span>{userProfile.surname}</span>
                    </div>

                    <div>
                        <p>email</p>
                        <span>{userProfile.email}</span>
                    </div>

                    <div>
                        <p>Phone Number</p>
                        <span>(+234){userProfile.phone}</span>
                    </div>
                <button onClick={() => setToggle((prev) => !prev)} className='edit-button'>Edit Profile</button>
            </div>
        </>
    )
}

export default UserProfileInformations;