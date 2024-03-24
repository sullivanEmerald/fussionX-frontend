
import { UserImage } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToggleFlips } from "../../App";

const UpdateProfileImage = () => {
    const {userProfilePicture} = useContext(UserImage)
    const {setToggle} = useContext(ToggleFlips)

    return (
        <>
            
            <Link to={'/profile'} onClick={() => setToggle(false)}>
                <img src={userProfilePicture !== "" ? userProfilePicture : '/images/dashboard/default.jpeg'} className="profile-photo"  alt="logo" />
            </Link>
        </>
    )
}


export default UpdateProfileImage;
