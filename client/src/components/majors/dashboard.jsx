import Header from "../profile/header"
import Aside from "../profile/side";

import Predictions from "../profile/predictions";

const Regular = () => {
    return (
        <>  
            <div className="user-profile">
                <div className="side-section">
                    <Aside />
                </div>

                <div className="user-main-section">
                    <Header />

                    <Predictions />
                </div>
            </div>
        </>
    )
}
export default Regular;