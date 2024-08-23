import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UploadProfilePicture from "../modals/profile";
import UpdateProfileImage from "./profile/image";
import { UserState } from "../States/app-context/appContext";
import ChangeProfilePicture from "../modals/renew";


const ProfileDisplay = () => {
  const [isShowForm, setShowForm] = useState(false);
  const {userState} = useContext(UserState)
   
  const displayForm = () => {
    setShowForm(true);
  };

  const closeDisplayForm = () => {
    setShowForm(false);
  };


  const { name, surname } = userState.userProfileInformation;

  

  return (
        <div>

        {isShowForm ? (
            userState.profilePicture !== "" ? (
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

            { userState.profilePicture !== '' ?
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

  );
};

export default ProfileDisplay;
