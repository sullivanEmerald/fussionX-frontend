import { Link, useNavigate } from 'react-router-dom';
import { useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver} from '@hookform/resolvers/yup'
import { useState } from 'react';
import '../../login.css'
import { useUsers } from '../../context/user';
import { User } from '../../routes/user';


const RegisterForm = () => {
    const { signup } = User;
    const navigate =  useNavigate()
    const {setUsers} = useUsers()
    const[isProcessing, setProcessing] =  useState(false)
    const[isError, setError] = useState('')


    const Schema = yup.object().shape({
        firstname :  yup.string().required('name field is required'),
        surname : yup.string().required('name field is required'),
        email : yup.string().email().required('email address is required'),
        password: yup.string().max(20).required('Password is required'),
        cpassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
        termsCheckbox: yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
        newsletterCheckbox: yup.boolean(),
    });
    
    const { register, handleSubmit, formState: { errors }, formState } = useForm({
        resolver: yupResolver(Schema)
      });


      const { isValid } = formState;


    const onSubmit = async (data, event) => {

        event.preventDefault();

        const { termsCheckbox, newsletterCheckbox, ...restData } = data;

        const formData = {
            ...restData,
            termsCheckbox: !!termsCheckbox, 
            newsletterCheckbox: !!newsletterCheckbox, 
          };

          setProcessing(true)

          setError('')
          
        const response = await fetch(signup, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formData)
        })

        if(!response.ok){
            const {status} = response
            if(status === 400){
                setError('User with the same email already exits.') 
            }else(
                setError('Network or Internal server error.') 
            )
        }

        setProcessing(false)

        const {user} = await response.json()
        const {status} = response
        setUsers(prevUsers => prevUsers.length ? [...prevUsers, user] : [user]);
        if(status === 200){
            navigate('/login',  { replace : true})
        }
    }

    
    
    return (
        <div className='register-user'>
            <section className='register'>
                <p>Sign up</p>
                {isError !== '' && <p className='error-message'>{isError}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>First Name</p>
                    <input type='text' placeholder='Enter your first name' {...register('firstname')}/>
                    {errors.firstname?.message && <p style={{ color: 'red' }}>{errors.firstname.message}</p>}

                    <p>Surname</p>
                    <input   type='text' placeholder='Enter your surname' {...register('surname')} />
                    {errors.surname?.message && <p style={{ color: 'red' }}>{errors.surname.message}</p>}

                    <p>Email address</p>
                    <input  type='email' placeholder='victbet@gmail.com' {...register('email')} />
                    {errors.email?.message && <p style={{ color: 'red' }}>{errors.email.message}</p>}

                    <p>Phone number</p>
                    <input  type='number' placeholder='+234' {...register('phone')}/>
                    {errors.phone?.message && <p style={{ color: 'red' }}>{errors.phone.message}</p>}

                    <p>Password</p>
                    <input  type='password' placeholder='Enter password' {...register('password')}/>
                    {errors.password?.message && <p style={{ color: 'red' }}>{errors.password.message}</p>}

                    <p>Confirm password</p>
                    <input  type='password' placeholder='Re-enter password' {...register('cpassword')}/>
                    {errors.cpassword?.message && <p style={{ color: 'red' }}>{errors.cpassword.message}</p>}

                    <div className='checkbox-group'>
                        <input type='checkbox' {...register('termsCheckbox')} />
                        <label className='check-label' htmlFor='termsCheckbox'>
                        I agree to FusionX <Link className='reg-links'> Terms &amp; Conditions</Link> and{' '}
                        <Link className='reg-links'>Privacy Policy</Link>
                    </label>
                    {errors.termsCheckbox?.message && (
                        <p style={{ color: 'red' }}>{errors.termsCheckbox.message}</p>
                    )}
                    </div>

                    <div className='checkbox-group'>
                        <input type='checkbox' {...register('newsletterCheckbox')} />
                        <label className='check-label' htmlFor='newsletterCheckbox'>
                            I agree to receive newsletter updates from FusionX
                        </label>
                    </div>

                    <button className='reg-button' disabled={!isValid || isProcessing}>{isProcessing ? 'Registering...' : isValid ? 'Continue' : 'Fill all fields'}</button>
                </form>
                <span className='reg-already-acct'>Already have an account? <Link to={'/login'} style={{ color : '#FF6C04', textDecoration : 'none'}}>Log in</Link></span>
        </section>
        
        </div>
    )
}


export default RegisterForm;