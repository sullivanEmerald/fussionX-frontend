
import Aside from "../components/profile/side";
import Header from "../components/profile/header";
import UserProfileDetails from "../components/authpages/display";


const DisplayProfile = () => {
    return (
        <>  
            <div className="user-profile">
                <div className="side-section">
                    <Aside />
                </div>

                <div className="user-main-section">
                    <Header />

                    <UserProfileDetails />
                </div>
            </div>
        </>
    )
}

export default DisplayProfile;