
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState, useContext } from 'react';
import PreLoader from './laoder';
import '../../login.css'
import { ACTIONS } from '../../States/actions/app';
import { ToggleFlips, UserState } from '../../States/app-context/appContext';



const LoginForm = () => {
  const { APP_ACTIONS, USER_ACTIONS } = ACTIONS;
  const { dispatch } = useContext(ToggleFlips)
  const { userDispatch } = useContext(UserState)
  const navigate = useNavigate()
  const [isProcessing, setProcessing] = useState(false)
  const [isError, setError] = useState('')


  const Schema = yup.object().shape({
    identity: yup
      .string()
      .required('Email or phone number is required')
      .test(
        'identity',
        'Invalid email or phone number format',
        (value) =>
          yup.string().email('Invalid email format').isValidSync(value) ||
          yup.string().matches(/^\+?[0-9]{1,4}[\s.-]?[0-9]{3,10}[\s.-]?[0-9]{3,10}$/).isValidSync(value)
      ),
    password: yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(Schema)
  });


  const onSubmit = async (data, e) => {
    e.preventDefault()

    setProcessing(true)
    setError('')

    try {

      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })


      if (!response.ok) {

        const { err } = response.json()

        setError(err)

      } else {
        const { user } = response.json()

        await localStorage.setItem('user', JSON.stringify(user))

        dispatch({ type: APP_ACTIONS.SET_IS_USER_lOGGED, payload: true })

        userDispatch({ type: USER_ACTIONS.SET_USER_PROFLE_INFORMATION, payload: user })

        navigate('/dashboard', { replace: true });

      }

    } catch (error) {

    } finally {
      setProcessing(false)
    }

  }

  return (
    <>
      <div className='login-section'>
        <section className='login-form'>
          <p>Login</p>
          {isError !== '' && <p className='error-message'>{isError}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>Email address or phone number</p>
            <input type='text' placeholder='victbet@gmail.com or +2349033369470' {...register('identity')} />
            {errors.identity?.message && <p style={{ color: 'red' }}>{errors.identity.message}</p>}

            <p>Password</p>
            <input type='password' placeholder='Enter password' {...register('password')} />
            {errors.password?.message && <p style={{ color: 'red' }}>{errors.password.message}</p>}

            <button type='submit' className='login-button' disabled={isProcessing}>{isProcessing ? <PreLoader stateCondition='logging-In...' /> : 'login'}</button>
          </form>
          <span className='reg-already-acct'>Don't have an account? <Link to={'/register'} style={{ color: '#FF6C04', textDecoration: 'none' }}>Register</Link></span>
        </section>
      </div>
    </>
  )
}

export default LoginForm;