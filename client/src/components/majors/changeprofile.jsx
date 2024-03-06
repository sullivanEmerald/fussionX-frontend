import { useContext } from "react";
import { UserFormerImage } from "../profile";

const ChangeProfileForm = ({ handleClose}) => {
    const { userProfilePicture} = useContext(UserFormerImage)
    return (
        <>
            <div className='fund-transfer-modal'>
                <img src='/images/icons/close.png' onClick={() => handleClose()} className='close-button' alt='logo' />
                {/* {error && <p style={{  color : 'red'}}></p>} */}
                <p style={{ textAlign : 'center'}}>Change Profile Avatar</p>
                <div  className="view-former-image">
                    <img src={userProfilePicture} className="profile-photo" id="renew-photo" alt="logo" />
                </div>
                <form>
                    <div>
                        <label htmlFor="photoInput">Select Photo</label>
                        <input type='file' id="photoInput" placeholder='Enter bank account number' />
                    </div>
                    <button className='picture-upload-button' type='submit'><img src="/images/icons/Export.png" className="remove-style-button change-images" alt="logo" /> Upload</button>
                </form>
            </div>
        </>
    )
}

export default ChangeProfileForm;