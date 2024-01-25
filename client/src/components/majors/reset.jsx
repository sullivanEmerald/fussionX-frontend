import { Link } from "react-router-dom";
const PassswordReset = () => {
    return (
        <>

        <div className='register-user'>
            <section className='register'>
                <p>Reset your password</p>
                <form>
    
                    <p>Password</p>
                    <input  type='password' placeholder='Create an 8-character password' />

                    <p>Confirm password</p>
                    <input  type='password' placeholder='Enter password' />

                    <button className='reg-button'>Reset Password</button>
                </form>
                <span className='reg-already-acct'>Already have an account? <Link to={'/login'} style={{ color : '#FF6C04', textDecoration : 'none'}}>Log in</Link></span>
        </section>
        
        </div>

        </>
    )
}

export default PassswordReset;