import MainNavigateLinks from "../main/nav/link";
import '../App.css'
import { Link } from "react-router-dom";

export default function HeroSection() {
    return <section className="hero-section">
        <img src="/images/football-energy.png" alt="logo" className="hero-ball" />
        <img src="/images/background.png" alt="logo" className="hero-middle" />
        <img
            src="/images/ball.png"
            alt="logo"
            className="hero-ball"
            style={{ mixBlendMode: 'lighten' }}
        />
        <img src="/images/lines.png" alt="logo" className="hero-middle" />
        <div className="hero-main">
            <MainNavigateLinks />
            <div className="hero-parent">
                <div className="hero-content">
                    <h1>Unleash the Power of AI for Accurate Football Predictions!</h1>
                    <p>Elevate Your Game with Accurate AI-Driven Sports Predictions</p>
                    <button className="hero-content-first-button">Go to App</button>
                    <Link to={'register'}><button className="hero-content-last-button">Create Account</button></Link>
                </div>
            </div>
            <div className="percentSection">
                <section>
                    <img src="/images/icons/first.png" alt="fussionX" />
                    <p className="precent-number">85/100</p>
                    <p>Accurate predictions</p>
                </section>
                <section>
                    <img src="/images/icons/second.png" alt="fussionX" />
                    <p className="precent-number">$10,000</p>
                    <p>Made in 1 year</p>
                </section>
                <section>
                    <img src="/images/icons/third.png" alt="fussionX" />
                    <p className="precent-number">100,000</p>
                    <p>Daily users</p>
                </section>
                <section>
                    <img src="/images/icons/first.png" alt="fussionX" />
                    <p className="precent-number">15</p>
                    <p>Trusted partners</p>
                </section>
            </div>
        </div>
    </section>
}