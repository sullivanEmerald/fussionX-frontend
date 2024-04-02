import Header from "../components/profile/header";
import Aside from "../components/profile/side";
import ProfileInformations from "../components/authpages/setting";


const Setting = () => {
    return (
        <> 
                <div className="user-profile">
                  
                        <Aside />

                    <div className="user-main-section">
                        <Header />

                        <ProfileInformations />
                    </div>
                </div>
        </>
    )
}
export default Setting;