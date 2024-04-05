import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState} from "react";
import { useImages } from '../../context/image';
import { UserImage } from '../../App';
import { ToggleFlips } from '../../App';


const UploadImageForm = (props) => {
    const {handleClose} = props
    const {images, setImages} = useImages()
    const {setUserImage} =  useContext(UserImage)
    const {error, setError} = useState('')
    const {setErrorMessage, setUserReturnedMessage, userReturnedMessage} = useContext(ToggleFlips)
    console.log(userReturnedMessage)

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

            if (errors.profilePicture) {
                // Validation failed, display the error message
                setError(errors.profilePicture.message);
                return; // Prevent form submission
            }
            
            const formData = new FormData();
            formData.append('profilePicture', data.profilePicture[0]);

            const response = await fetch('/users/image', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const { profilePic, msg } = await response.json()  

                await setUserImage(profilePic.image)

                await setUserReturnedMessage(true);
                

                await setImages(!images.length ? [profilePic] : [...images, profilePic])
                
               await  handleClose()

                await setErrorMessage(msg)

            } else {
                const {error} = await response.json(); 
                setError(error)               
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
                {error && <p style={{  color : 'red'}}></p>}
                <p style={{ textAlign : 'center'}}>Update Profile Picture</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="photoInput">Select Photo</label>
                        <input type='file' id="photoInput" placeholder='Enter bank account number' {...register('profilePicture')} />
                        {errors.profilePicture && <p style={{ color: 'red' }}>{errors.profilePicture.message}</p>}
                    </div>
                    <button className='picture-upload-button' type='submit'><img src="/images/icons/Export.png" className="remove-style-button change-images" alt="logo" /> Upload</button>
                </form>
            </div>
        </>
    )
}

export default UploadImageForm;