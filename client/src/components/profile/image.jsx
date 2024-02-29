
import { UserImage } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

const UpdateProfileImage = () => {
    const {userProfilePicture} = useContext(UserImage)
    return (
        <>
            <Link to={'/profile'}>
                <img src={userProfilePicture !== "" ? userProfilePicture : '/images/dashboard/default.jpeg'} className="profile-photo"  alt="logo" />
                {userProfilePicture !== '' && <button>Sullivan</button>}
            </Link>
        </>
    )
}


export default UpdateProfileImage;
