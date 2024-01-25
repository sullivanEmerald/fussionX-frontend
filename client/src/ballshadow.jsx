
const BallShadow = (props) => {
    const {component : Component} = props
    return (
        <>
            <div className="login  auth-controller-logo relative">
                <section className="Unleash-section relative">
                    <img className="login-img" src="/images/soccerball.png" />
                <div className="relative blur">
                    <section className="relative ball-content">
                        <img src="/images/logo.png" alt="logo"/>
                        <p>Unleash the Power of AI for Accurate Football Predictions!</p>
                    </section>
                </div>
            </section>
            <section>
                <div>
                    <Component />
                </div>
            </section>
        </div>
        </>
    );
}

export default BallShadow;