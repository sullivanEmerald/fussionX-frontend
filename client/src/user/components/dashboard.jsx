
// import Predictions from "../../components/profile/predictions";
import { UserState } from "../States/app-context/appContext";
import { useContext, useEffect } from "react";
import { ACTIONS } from "../States/actions/app";

const Regular = () => {

    const { USER_ACTIONS } = ACTIONS;

    const { userState, userDispatch } = useContext(UserState)

    useEffect(() => {
        if (!userState.userProfileInformation || Object.keys(userState.userProfileInformation).length === 0) {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const user = JSON.parse(storedUser);
                userDispatch({ type: USER_ACTIONS.SET_USER_PROFILE_INFORMATION, payload: user });
            }
        }
    }, [userState.userProfileInformation, userDispatch]);

    return (
        <>
            <p>Sullivan, the greatest software Engineer</p>
        </>
    )
}
export default Regular;