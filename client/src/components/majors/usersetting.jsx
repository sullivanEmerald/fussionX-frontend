
import { UserRecords } from '../../App';
import { useState, useEffect, useContext} from 'react';
import { useUsers } from '../../context/user';
import { ToggleFlips } from '../../App';
import * as validate from 'yup'

const UserSetting = () => {

    const {isToggle, setToggle} = useContext(ToggleFlips)

    const {getUser} = useContext(UserRecords)
    const {users, setUsers} = useUsers()
    const [isProcessing, setIsProcessing] =  useState(false)
    const [user, setUser] = useState({})
    const [formData, setFormData] = useState({
        firstname : '',
        surname : '',
        email : '',
        phonne  : ''
    })

     // Populate form data with user details on component mount
     useEffect(() => {
        const userId = getUser.id;
        const currentUser = users.find((user) => user._id === userId);
        setUser(currentUser);
    }, [getUser.id, users]);

    useEffect(() => {
        setFormData({
            firstname: user?.name || '',
            surname: user?.surname || '',
            email: user?.email || '',
            phone: user?.phone || ''
        });
    }, [user]);

    // useEffect(() => {
    //     const isEmptyField = Object.values(formData).some(value => value === '');
    //     if(isEmptyField) {
    //         setIsProcessing(true);
    //         return;
    //     }
    // }, [formData])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const [errors, setErrors] = useState('')


    const validationSchema =  validate.object({
        firstname : validate.string().required('firstname is required'),
        surname : validate.string().required('surname is requried'),
        email: validate.string().email('enter the right email format').required('email field is required'),
        phone : validate.string().matches(/^\d{11}$/, "phone number must be 11 digits")
    })


    // const {handleSubmit, formState : {errors}} = useForm()

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await validationSchema.validate(formData, {abortEarly : false})
            console.log(formData)
        } catch (error) {
            const newError = {}
            
            error.inner.forEach((err) => {
                newError[err.path] = err.message
             });

             setErrors(newError)
        }

        // event.preventDefault();
        // setIsProcessing(true);
        // setResponse('')

        // if (Object.values(data).some(value => value === '')) {
        //     setIsProcessing(false);
        //     setResponse('Fill all fields')
        //     return;
        // }
    
        // try {
        //     const response = await fetch(`/users/update/${_id}`, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     });
    
        //     if (!response.ok) {
        //         const {error} = await response.json();
        //         setResponse(error)
        //     } else {
        //         const {msg} = await response.json();
        //         setUsers((previousUsers) => previousUsers.map((item) => item._id === _id ? {...item, name : data.name, surname : data.surname, email : data.email, phone : data.phone} : item))
        //         setResponse(msg);
        //     }
        // } catch (error) {
        //     setResponse('Error during form submission:', error);
        //     console.log('An error occurred during form submission.');
        // } finally { 
        //     setIsProcessing(false);
        // }

    };
    return (
         <div className='profile-setting'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Name</p>
                        <input value={formData.firstname} type='text' onChange={handleChange} name='firstname' />
                        {errors.firstname && <span style={{ color: '#D76504' }}>{errors.firstname}</span>}
                    </div>

                    <div>
                        <p>Surname</p>
                        <input value={formData.surname} type='text' name='surname' onChange={handleChange} />
                        {errors.surname && <span style={{ color: '#D76504' }}>{errors.surname}</span>}
                    </div>

                    <div>
                        <p>email</p>
                        <input type='text' value={formData.email} onChange={handleChange} name='email'  />
                        {errors.email && <span style={{ color: '#D76504' }}>{errors.email}</span>}
                    </div>

                    <div>
                        <p>Phone Number</p>
                        <input type='text' value={formData.phone} onChange={handleChange} name='phone' />
                        {errors.phone && <span style={{ color: '#D76504' }}>{errors.phone}</span>}
                    </div>
                    
                    <button disabled={isProcessing || Object.values(formData).some(value => value === '')} className='edit-button' type='submit'>{isProcessing ? 'Updating Records' : 'Save Changes'}</button>

                </form>

                {isToggle && <img onClick={() => setToggle((prev) => !prev)} className='backButton-profile' src='images/dashboard/scrollUp.png' title='back to profile' alt='logo'/> }
        </div>
    )
}

export default UserSetting;