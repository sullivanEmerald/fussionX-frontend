import Header from "../components/profile/header";
import Aside from "../components/profile/side";
import ActiveUser from "../components/authpages/active";

const Active = () => {
    return (
        <>

            <div className="user-profile">

                <div className="side-section">
                    <Aside />
                </div>

                <div className="user-main-section">
                    <Header />

                    <ActiveUser />
                </div>
            </div>
        
        </>
    )
}

export default Active;