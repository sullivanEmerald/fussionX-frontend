import { useContext, useState, createContext } from "react";
import { Link } from "react-router-dom";
import { UserRecords } from "../App";
import UploadProfilePicture from "../modals/profile";
import UpdateProfileImage from "./profile/image";
import { UserImage } from "../App";
import ChangeProfilePicture from "../modals/renew";

export const UserFormerImage = createContext()


const ProfileDisplay = () => {
  const { getUser } = useContext(UserRecords);
  const [isShowForm, setShowForm] = useState(false);
  const {userProfilePicture} = useContext(UserImage)
  const [feedBack, setFeedBack] = useState('')
   
  const displayForm = () => {
    setShowForm(true);
  };

  const closeDisplayForm = () => {
    setShowForm(false);
  };


  if (!getUser) {

    return <p>Loading...</p>;
  }

  const { name, surname } = getUser;

  

  return (
        <UserFormerImage.Provider value={{ userProfilePicture, setFeedBack }}>
        <div>

        {isShowForm ? (
            userProfilePicture !== "" ? (
              <ChangeProfilePicture show={displayForm} handleClose={closeDisplayForm} />
            ) : (
              <UploadProfilePicture show={displayForm} handleClose={closeDisplayForm} />
            )
          ) : null}
          
        <span className="profile-header">Display setting</span>

        <div className="display-setting">

            <UpdateProfileImage />
            
            <p className="profile-name">{`${name} ${surname}`}</p>
            <div className="profile-badge">
            <span>Premium plan</span>
            <img src="/images/dashboard/king.png" className="" alt="logo" />
            </div>

            {userProfilePicture !== '' ?
              <button onClick={() => displayForm()} className="change-profile-picture-button">
                <img src="/images/dashboard/plus.png" className="" alt="logo" />
              </button>
             :
              <button onClick={() => displayForm() } className="profile-picture">
                <img src="/images/icons/Export.png" className="remove-style-button change-images" alt="logo" />
                <span>Change Profile Picture</span>
              </button>
              }

            <div className="delete-picture">
            <img src="/images/icons/delete.png" className="remove-style-button " alt="logo" />
            <span>Delete Account</span>
            </div>
            <Link className="upgrade-link">Upgrade Plan</Link>
        </div>
        </div>

        </UserFormerImage.Provider>
  );
};

export default ProfileDisplay;
