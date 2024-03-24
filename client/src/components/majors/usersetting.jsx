
import { UserRecords } from '../../App';
import { useForm } from 'react-hook-form';
import { useState, useEffect, useContext} from 'react';
import { useUsers } from '../../context/user';
import { ToggleFlips } from '../../App';

const UserSetting = () => {

    const {isToggle, setToggle} = useContext(ToggleFlips)

    const {getUser} = useContext(UserRecords)
    const {users, setUsers} = useUsers()
    const [isProcessing, setIsProcessing] =  useState(false)
    const [user, setUser] = useState({})
    const {name, surname, email, phone, _id} =  user || {}
    const [response, setResponse] = useState('')

    const [userName, setUserName] = useState(name);
    const [userSurname, setUserSurname] = useState(surname)
    const [useEmail, setUserEmail] = useState(email)
    const [userPhone, setUserPhone] = useState(phone)



    useEffect(() => {
        const userId = getUser.id
        setUser(users.find((user) => user._id === userId))

        setUserName(name)
        setUserSurname(surname)
        setUserEmail(email)
        setUserPhone(phone)

    }, [])



    const {register, handleSubmit, formState : {errors}} = useForm()

    const onSubmit = async (data, event) => {
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
                {response !== '' && <p style={{ color : 'red'}}>{response}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <p>Name</p>
                        <input  value={userName !== '' ? userName : name} type='text' onChange={(e) => setUserName(e.target.value)} />
                        {errors.name?.message && <p style={{ color: '#D76504' }}>{errors.name.message}</p>}
                    </div>

                    <div>
                        <p>Surname</p>
                        <input value={userSurname !== '' ? userSurname : surname} type='text' {...register('surname')} onChange={(e) => setUserSurname(e.target.value)} />
                        {errors.surname?.message && <p style={{ color: '#D76504' }}>{errors.surname.message}</p>}
                    </div>

                    <div>
                        <p>email</p>
                        <input type='text' value={useEmail  !== '' ? useEmail : email }  {...register('email')} onChange={(e) => setUserEmail(e.target.value)}  />
                        {errors.email?.message && <p style={{ color: '#D76504' }}>{errors.email.message}</p>}
                    </div>

                    <div>
                        <p>Phone Number</p>
                        <input type='text' value={userPhone !== '' ? userPhone : phone} {...register('phone')} onChange={(e) => setUserPhone(e.target.value)} />
                        {errors.phone?.message && <p style={{ color: '#D76504' }}>{errors.phone.message}</p>}
                    </div>
                    
                    <button disabled={isProcessing} className='edit-button' type='submit'>{isProcessing ? 'Saving' : 'Save Changes'}</button>

                </form>

                {isToggle && <img onClick={() => setToggle((prev) => !prev)} className='backButton-profile' src='images/dashboard/scrollUp.png' title='back to profile' alt='logo'/> }
        </div>
    )
}

export default UserSetting;