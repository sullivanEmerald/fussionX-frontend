import Subscribtion from "../components/authpages/subscribtions";
import Aside from "../components/profile/side";
import Header from "../components/profile/header";


const Profile = () => {
    return (
        <>  
            <div className="user-profile">

                    <Aside />
                
                <div className="user-main-section">
                    <Header />

                    <Subscribtion />
                </div>
            </div>
        </>
    )
}

export default Profile;