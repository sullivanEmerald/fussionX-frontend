import BonusPackage from "../components/authpages/bonus";
import Aside from "../components/profile/side";
import Header from "../components/profile/header";


const Bonus = () => {
    return (
        <>  
            <div className="user-profile">
                
                    <Aside />
            
                <div className="user-main-section">
                    <Header />

                    <BonusPackage />
                </div>
            </div>
        </>
    )
}

export default Bonus;