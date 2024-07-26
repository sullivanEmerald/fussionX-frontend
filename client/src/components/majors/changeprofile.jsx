import { useContext, useState } from "react";
import { UserFormerImage } from "../profile";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import {useForm} from 'react-hook-form'
import { useImages } from "../../context/image";
import { ToggleFlips, UserState } from "../../States/app-context/appContext";

import { ACTIONS } from "../../States/actions/app";

const ChangeProfileForm = ({ handleClose}) => {
    const {userProfilePicture} = useContext(UserFormerImage)
    const [processing, setProcessing] =  useState(false)
    const [error, setError] = useState('')
    const {setImages} = useImages()
    const {dispatch} = useContext(ToggleFlips)
    const { userDispatch } = useContext(UserState)

    const schema = yup.object().shape({
        newPhoto: yup
            .mixed()
            .test(
                'fileType',
                'Select an Image',
                (value) => {
                    if (!value) {
                        return 'You must select an image.';
                    }
                    if (!value[0]) {
                        return false; // Reject the value as it is empty
                    }
                    return ['image/jpeg', 'image/jpg', 'image/png'].includes(value[0].type);
                }
            )
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {

            setProcessing(true)

            if (errors.newPhoto) {
                // Validation failed, display the error message
                setError(errors.newPhoto.message);
                return;
            }
            
            const formData = new FormData();
            formData.append('newPhoto', data.newPhoto[0]);

            const response = await fetch('/users/image/update', {
                method: 'PUT',
                body: formData,
            });

            if (response.ok) {
                const { userNewImage, msg , user} = await response.json()  
                userDispatch({ type  : ACTIONS.USER_ACTIONS.SET_PROFILE_PICTURE, paylaod : userNewImage})
                dispatch({ type : ACTIONS.APP_ACTIONS.SET_ERROR_MESSAGE, paylaod : true})
                dispatch({ type : ACTIONS.APP_ACTIONS.SET_ERROR_MESSAGE, paylaod : msg})
                await new Promise((resolve) => {
                    setImages((prevImages) =>
                      prevImages.map((item) =>
                        item.userId === user
                          ? { ...item, image: userNewImage.image, cloudinaryId: userNewImage.cloudinaryId }
                          : item
                      )
                    );
                    resolve(); 
                  });
            } else {
                const {error} = await response.json(); 
                setProcessing(false)
                setError(error)               
            }
        } catch (error) {
            setError(error)
        } finally {
            setProcessing(false)
        }
    };



    return (
        <>
            <div className='fund-transfer-modal'>
                <img src='/images/icons/close.png' onClick={() => handleClose()} className='close-button' alt='logo' />

                {error && <p style={{  color : 'red'}}>{error}</p>}

                <p style={{ textAlign : 'center'}}>Change Profile Avatar</p>

                <div  className="view-former-image">
                    <img src={userProfilePicture} className="profile-photo" id="renew-photo" alt="logo" />
                </div>

                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="photoInput">Select Photo</label>
                        <input type='file' id="photoInput" placeholder='Enter bank account number' {...register('newPhoto')} />
                        {errors.profilePicture && <p style={{ color: 'red' }}>{errors.profilePicture.message}</p>}
                    </div>
                    <button
                        disabled={processing}
                        className='picture-upload-button' 
                        type='submit'><img src="/images/icons/Export.png" 
                        className="remove-style-button change-images" alt="logo" />
                        {processing ? 'Uploading' : 'upload'}
                    </button>
                </form>
            </div>
        </>
    )
}

export default ChangeProfileForm;