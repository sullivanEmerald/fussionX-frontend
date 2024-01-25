import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-heading">
                    <span>&copy; 2023 Sports Fusion. All rights reserved </span>
                    <span>Terms of Use</span>
                    <span>Need help? Contact Support</span>
                </div>
                <div className="footer-images">
                    <Link><img src="/images/dashboard/twitter.png" alt="logo" /></Link>
                    <Link><img src="/images/dashboard/fly.png" alt="logo" /></Link>
                    <Link><img src="/images/dashboard/facebook.png" alt="logo" /></Link>
                </div>
            </div>
        </>
    )
}
export default Footer;