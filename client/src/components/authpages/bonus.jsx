import { Link } from "react-router-dom";
const BonusPackage = () => {
    return (
        <>
            <div className="bonus-main-section">
                <p>Congrats to being an active user! You have been awarded <label style={{ color : '#FFFFFF'}}>2 bonus(es).</label>Click to view</p>
                <div className="bouns-section">
                    <div className="bonus-sect">
                        <div className="bonus-sect-bonus" >
                            <span className="bonus-text">Bonus</span>
                            <img src="images/icons/Gift.png" alt="logo"/>
                        </div>
                        <button className="remove-style-button"><img src="images/icons/Vector.png" alt="logo"/></button>
                    </div>
                    <span className="vip-section-text">You have been awarded free viewing of 2 VIP predictions. <Link className="bonus-link">Views</Link></span>
                </div>

                <div className="bonus-sect-coins">
                    <div className="coins-sect">
                        <span  className="bonus-text">Bonus 2</span>
                        <img src="images/icons/Coins.png" alt="logo"/>
                    </div>
                    <button className="remove-style-button"><img src="images/icons/CaretDown.png" alt="logo"/></button>
                </div>
            </div>
        </>
    )
}

export default BonusPackage;