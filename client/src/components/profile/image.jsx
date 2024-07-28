
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserState, ToggleFlips } from "../../States/app-context/appContext";
import { ACTIONS } from "../../States/actions/app";

const UpdateProfileImage = () => {
    const {APP_ACTIONS} = ACTIONS;
    const{ dispatch } = useContext(ToggleFlips)
    const {userState} = useContext(UserState)
    

    const changeToggle = async () => {
         dispatch({ type  : APP_ACTIONS.TOGGLE, payload : false})
         dispatch({ type  : APP_ACTIONS.SET_IS_PASSWORD, payload : false})
    }

    return (
        <>
            
            <Link to={'/profile'} onClick={() => changeToggle()}>
                <img src={userState.profilePicture !== "" ? userState.profilePicture : '/images/dashboard/default.jpeg'} className="profile-photo"  alt="logo" />
            </Link>
        </>
    )
}


export default UpdateProfileImage;
