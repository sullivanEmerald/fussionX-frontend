import ProfileImage from "../profile-image";
import {Link} from 'react-router-dom'
import { ToggleFlips } from "../../App";
import { useContext } from "react";

const Aside = () => {
    const {setToggle} = useContext(ToggleFlips)
    
    return  (
        <>
            <section className="aside-container">
                <div className="image-con">
                    <ProfileImage />
                </div>

                <div className="aside-links">
                    <div>
                        <Link to={'/dashboard'} className="links"><img src="/images/sideicons/home.png" className="link-icons" alt="logo" /> 
                            <span>Home</span> 
                        </Link>
                    </div>
                    <div className="ai-section">
                        <Link className="links"><img src="/images/sideicons/ai.png" className="link-icons" alt="logo" /> 
                             <span>AI</span>
                        </Link>
                        <p>Coming soon</p>
                    </div>
                    <div>
                        <Link to={'/subscribtion'} className="links"><img src="/images/sideicons/sub.png" className="link-icons" alt="logo" /> 
                            <span>Subscribtion</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/payment'} className="links"><img src="/images/sideicons/pay.png" className="link-icons" alt="logo" /> 
                            <span>Payment History</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/bonus'} className="links"><img src="/images/sideicons/bonus.png" className="link-icons" alt="logo" /> 
                            <span>Bonus</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/settings'} onClick={() => setToggle(false)} className="links"><img src="/images/sideicons/setting.png" className="link-icons" alt="logo" />
                            <span>Setting</span>
                        </Link>
                    </div>
                </div>
            </section>
            
        
        </>
    )
}


export default Aside;