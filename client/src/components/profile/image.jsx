
import { UserImage } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToggleFlips } from "../../App";

const UpdateProfileImage = () => {
    const {userProfilePicture} = useContext(UserImage)
    const {setToggle, setIsPassword} = useContext(ToggleFlips)

    const changeToggle = async () => {
        await setToggle(false)
        await setIsPassword(false)
    }

    return (
        <>
            
            <Link to={'/profile'} onClick={() => changeToggle()}>
                <img src={userProfilePicture !== "" ? userProfilePicture : '/images/dashboard/default.jpeg'} className="profile-photo"  alt="logo" />
            </Link>
        </>
    )
}


export default UpdateProfileImage;
