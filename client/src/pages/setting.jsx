import Header from "../components/profile/header";
import Aside from "../components/profile/side";
import ProfileInformations from "../components/authpages/setting";
import {createContext} from 'react'

export const ToggleProfileDetail = createContext()


const Setting = ({isToggle, setIsToggle}) => {
    return (
        <>  
            <ToggleProfileDetail.Provider value={{ isToggle , setIsToggle}}>
                <div className="user-profile">
                    <div className="side-section">
                        <Aside />
                    </div>

                    <div className="user-main-section">
                        <Header />

                        <ProfileInformations />
                    </div>
                </div>
            </ToggleProfileDetail.Provider>
        </>
    )
}
export default Setting;