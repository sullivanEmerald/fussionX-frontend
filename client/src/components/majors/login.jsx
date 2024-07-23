
  import { Link, useNavigate } from 'react-router-dom';
  import { User } from '../../routes/user';
  import { useForm} from 'react-hook-form'
  import * as yup from 'yup'
  import { yupResolver} from '@hookform/resolvers/yup'
  import { useState, useContext } from 'react';
  import { LoginContext, AdminContext, UserRecords} from '../../App'
  import '../../login.css'


  const LoginForm = () => {
      const { login } = User;
      const navigate =  useNavigate()
      const[isProcessing, setProcessing] =  useState(false)
      const[isError, setError] = useState('') 


      const { setIsLogged} = useContext(LoginContext)
      const { setIsAdmin} = useContext(AdminContext)
      const {setUser} =  useContext(UserRecords)

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
      
          const { register, handleSubmit, formState: { errors },  } = useForm({
          resolver: yupResolver(Schema)
        });



        const onSubmit = async (data, e) => {
          e.preventDefault()

          setProcessing(true)
          setError('')

          const response = await fetch(login, {
              method :'POST',
              headers : {
                  'Content-Type' : 'application/json'
              }, 
              body : JSON.stringify(data)
          })


          if(!response.ok){
                  setProcessing(false)

                  const {status} = response
                  if(status === 404){
                    setError('Entered a wrong email or password')
                  }else if(status === 401){
                    setError('Authentication failed')
                  }else{
                    setError('Network Error')
                  }
          }

          const loginData = await response.json()
          const {status} =  response;
          const { user } = loginData;

          if (status === 200) {
              const userData = {
              id: user._id,
              name: user.name,
              surname :  user.surname,
              phone :user.phone,
              email : user.email,
              role: user.role,
          };

          localStorage.setItem('user', JSON.stringify(userData));


          if(user.role){
              setIsAdmin(true)
            }else{
              setIsLogged(true);
            }
          
            setUser(userData);
            navigate(user.role ? '/admin' : '/dashboard', { replace: true });
          }
        }

      return (
          <>
              <div className='login-section'>
              {/* <img src='/images/logo.png' className='register-fussion-image' alt="logo" /> */}
              <section className='register'>
                  <p>Login</p>
                  {isError !== '' && <p className='error-message'>{isError}</p>}
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <p>Email address or phone number</p>
                      <input  type='text' placeholder='victbet@gmail.com or +2349033369470' {...register('identity')} />
                      {errors.identity?.message && <p style={{ color: 'red' }}>{errors.identity.message}</p>}

                      <p>Password</p>
                      <input  type='password' placeholder='Enter password' {...register('password')}/>
                      {errors.password?.message && <p style={{ color: 'red' }}>{errors.password.message}</p>}

                    <button type='submit' className='reg-button' disabled={isProcessing}>{isProcessing ? 'Logging in...' : 'login'}</button>
                  </form>
                  <span className='reg-already-acct'>Don't have an account? <Link to={'/register'} style={{ color : '#FF6C04', textDecoration : 'none'}}>Register</Link></span>
          </section>
          </div>
          </>
      )
  }

  export default LoginForm;