
import { UserImage } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ToggleFlips } from "../../App";
import { ACTIONS } from "../../actions/app";

const UpdateProfileImage = () => {
    const {userProfilePicture} = useContext(UserImage)
    const {dispatch} = useContext(ToggleFlips)

    const changeToggle = async () => {
         dispatch({ type  : ACTIONS.TOGGLE, payload : false})
         dispatch({ type  : ACTIONS.SET_IS_PASSWORD, payload : false})
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
