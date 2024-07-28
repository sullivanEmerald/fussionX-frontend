
import { UserRecords } from '../../App';
import { useState, useEffect, useContext} from 'react';
import { useUsers } from '../../context/user';
import { ToggleFlips } from '../../States/app-context/appContext';
import * as validate from 'yup';
import PreLoader from './laoder';
import { ACTIONS } from '../../States/actions/app';

const UserSetting = () => {
    const { APP_ACTIONS } =  ACTIONS;
    const {state, dispatch} = useContext(ToggleFlips)
    const {getUser, setUser} = useContext(UserRecords)
    const {users, setUsers} = useUsers()
    const [isProcessing, setIsProcessing] = useState(false)
    const [user, setCurrrentUser] = useState({})
    const [formData, setFormData] = useState({
        firstname : '',
        surname : '',
        email : '',
        phone  : ''
    })

     useEffect(() => {
        const userId = getUser.id;
        const currentUser = users.find((user) => user._id === userId);
        setCurrrentUser(currentUser);
    }, [getUser, users]);

 
    useEffect(() => {
        setFormData({
            firstname: user?.name || '',
            surname: user?.surname || '',
            email: user?.email || '',
            phone: user?.phone || ''
        });
    }, [user]);

   

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

            await setIsProcessing(true)

            await setErrors('')
            
            const response = await fetch(`/users/update/${user._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    });
            
                    if (!response.ok) {

                        const {error} = await response.json();

                         dispatch({ type : APP_ACTIONS.SET_USER_RETURNED_MESSAGE, payload : false});

                        dispatch({ type : APP_ACTIONS.SET_ERROR_MESSAGE, payload : error})

                    } else {

                        const { msg } = await response.json();

                        const { firstname, surname, email, phone, } = formData;

                        setUsers((previousUsers) => previousUsers.map((item) => item._id === user._id ? {...item, name : firstname, surname : surname, email : email, phone : phone} : item))

                        const updatedUser = {...getUser, name: firstname, surname: surname, email: email, phone: phone };

                        setUser(updatedUser);

                        dispatch({ type : APP_ACTIONS.TOGGLE})

                        dispatch({ type :  APP_ACTIONS.SET_USER_RETURNED_MESSAGE, payload : true});

                        dispatch({ type  :  APP_ACTIONS.SET_ERROR_MESSAGE , payload: msg});

                    }
        } catch (error) {   
            const newError = {}
            
            error.inner.forEach((err) => {
                newError[err.path] = err.message
             });

             setErrors(newError)

        } finally {
            setIsProcessing(false)
        }


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
                    
                    <button disabled={isProcessing || Object.values(formData).some(value => value === '')} className='edit-button' type='submit'>{isProcessing ? <PreLoader stateCondition='Updating Record..' /> : 'Save Changes'}</button>

                </form>

                {state.isToggle && <img onClick={() => dispatch({ type : ACTIONS.TOGGLE})} className='backButton-profile' src='images/dashboard/scrollUp.png' title='back to profile' alt='logo'/> }
        </div>
    )
}

export default UserSetting;