import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import { useImages } from '../../context/image';
import { UserImage } from '../../App';

const UploadImageForm = (props) => {
    const {handleClose} = props
    const {images, setImages} = useImages()
    const {setUserImage} =  useContext(UserImage)

    // useEffect(() => {
    //     const foundImage = images.find((item) => item.userId === id);
        
    //     if (foundImage && foundImage.image !== "") {
    //         setProfileImage(foundImage.image);
    //     }
    // })


    const schema = yup.object().shape({
        profilePicture: yup
            .mixed()
            .test(
                'fileType',
                'Invalid file type. Only JPG, JPEG, and PNG are allowed.',
                (value) => {
                    if (!value) return true; // No file selected, so validation passes
                    return ['image/jpeg', 'image/jpg', 'image/png'].includes(value[0].type);
                }
            )
    });
    
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('profilePicture', data.profilePicture[0]);

            console.log(formData)
            const response = await fetch('/users/image', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const { profilePic } = await response.json()  
                setImages(!images.length ? [profilePic] : [...images, profilePic])
                setUserImage(profilePic.image)
            } else {
                const {error} = await response.json();
                console.log(formData)
                console.log(response)
                
            }
        } catch (error) {
            console.error('Error during image upload:', error);
            // Handle unexpected errors
        }
    };



    return (
        <>
            <div className='fund-transfer-modal'>
                <img src='/images/icons/close.png' onClick={() => handleClose()} className='close-button' alt='logo' />
                <p style={{ textAlign : 'center'}}>Update Profile Picture</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="photoInput">Select Photo</label>
                        <input type='file' id="photoInput" placeholder='Enter bank account number' {...register('profilePicture')} />
                    </div>
                    <button className='picture-upload-button' type='submit'><img src="/images/icons/Export.png" className="remove-style-button change-images" alt="logo" /> Upload</button>
                </form>
            </div>
        </>
    )
}

export default UploadImageForm;