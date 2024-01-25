import '../App.css'


const Singup = () => {
    return (
        <div className="relative sign-outer">
            <img src="/images/Ellipse1.png"  className='bg-shadow' alt="logo"/>
            <section className="relative sign-flex">
                <section className="sign-first-section">
                    <div className='signup-header'>
                        <p>SignUp or Login</p>
                        <img src="/images/log.png"  className="sign-image" alt="logo"/>
                    </div>
                    <img src="/images/bar.png" className="bar-image" alt='logo'/>
                </section>
                <section className="sign-second-section">
                    <p>It’s easy to get started</p>
                    <p><label style={{ opacity  : '45%'}}>Start your wining journey in just</label> 4 simple steps</p>
                    <button>Create Account</button>
                    
                    <div className="sign-fun-part">
                        <h6>Fun fact</h6>
                        <p>AI has successfully predicted football scores up to 80% </p>
                    </div>
                </section>
            </section>
        </div>

    )
}
export default Singup;




