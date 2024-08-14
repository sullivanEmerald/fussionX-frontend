import { useEffect } from 'react';

const BallShadow = () => {

    useEffect(() => {
       
        document.body.style.backgroundColor = '#110507';

        return () => {
            document.body.style.backgroundColor = ''; 
        };
    }, []);

    return (
        <div className="login auth-controller-logo relative">
            <section className="Unleash-section relative">
                <img className="login-img" src="/images/soccerball.png" alt="fussionX football" />
                <div className="relative blur">
                    <section className="relative ball-content">
                        <img src="/images/logo.png" alt="logo" />
                        <p>Unleash the Power of AI for Accurate Football Predictions!</p>   
                    </section>
                </div>
            </section>
        </div>
    );
};

export default BallShadow;
