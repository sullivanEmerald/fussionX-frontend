
import { useState, useContext } from "react";
import WalletModal from "../modals/wallet";
import { UserState } from "../States/app-context/appContext";
import UpdateProfileImage from "./image";


const AcountInformation = () => {
    const { userState } = useContext(UserState)

    const [showWallet, setShowWallet] = useState(false);

    const { name, surname } = userState.userProfileInformation;

    const showModal = () => {
        setShowWallet(true)
    }

    const closeModal = () => {
        setShowWallet(false)
    }
    return (
        <>
            <div className="upper-section">
                <div>
                    <span className="wallet-balance">Wallet Balance</span>
                    <div className="profile-funds">
                        <span className="wallet-figure">N500,000</span>
                        <button className="refresh-button"><img src="/images/dashboard/reload.png" alt="logo" /></button>
                        <button className="fund-wallet"><img src="/images/dashboard/pluswhite.png" className="image-plus" alt="logo" /> Fund wallet</button>
                        <button onClick={showModal} className="fund-transfer">
                            <img src="/images/dashboard/plus.png" className="image-plus" alt="logo" />
                            Transfer Fund
                        </button>
                    </div>
                </div>

                <div className="profile-sect">
                    <img src="/images/dashboard/bellSimple.png" alt="logo" />

                    <UpdateProfileImage />

                    <div className="profile-desc">
                        <span className="profile-name">{`${name} ${surname}`}</span>
                        <div className="plan-and-king">
                            <span className="profile-plan">Premium plan</span>
                            <img src="/images/dashboard/king.png" className="king-image" alt="logo" />
                        </div>
                    </div>
                </div>

            </div>
            {showWallet && <WalletModal show={showModal} handleClose={closeModal} />}

        </>
    )
}


export default AcountInformation;