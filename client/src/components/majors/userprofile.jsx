import { ToggleProfileDetail } from "../../pages/setting";
import { useContext } from "react";

const UserProfileInformations = ({email, name, surname, phone}) => {
    const {setIsToggle} = useContext(ToggleProfileDetail)

    return (
        <>  
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
                <button onClick={() => setIsToggle((prev) => !prev)} className='edit-button'>Edit Profile</button>
            </div>
        </>
    )
}

export default UserProfileInformations;