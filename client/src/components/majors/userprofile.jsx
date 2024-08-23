import { ToggleFlips, UserState } from "../../States/app-context/appContext";
import { useContext } from "react";
import { ACTIONS } from "../../States/actions/app";

const UserProfileInformations = () => {
    const { APP_ACTIONS } = ACTIONS;
    const { userState } = useContext(UserState)
    const { state, dispatch } = useContext(ToggleFlips)

    const { name, surname, email, phone} = userState.userProfileInformation;

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
                <button onClick={() => dispatch({ type: APP_ACTIONS.TOGGLE, payload: !state.isToggle })} className='edit-button'>Edit Profile</button>
            </div>
        </>
    )
}

export default UserProfileInformations;