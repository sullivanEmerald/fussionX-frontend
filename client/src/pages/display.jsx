
import Aside from "../components/profile/side";
import Header from "../components/profile/header";
import UserProfileDetails from "../components/authpages/display";
import {createContext } from "react"; 


export const ToggleForSetting = createContext()


const DisplayProfile = ({isToggle, setIsToggle}) => {
    return (
        <>  
            <ToggleForSetting.Provider value={{ isToggle, setIsToggle}}>

            <div className="user-profile">
                <div className="side-section">
                    <Aside />
                </div>

                <div className="user-main-section">
                    <Header />

                    <UserProfileDetails  />
                </div>
            </div>
            </ToggleForSetting.Provider>
        </>
    )
}

export default DisplayProfile;