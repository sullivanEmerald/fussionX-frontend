import { Link } from "react-router-dom";

const LogoImage = () => {
    return (
        <>
            <Link to='/'>
                <img src="/images/logo.png" alt="logo" />
            </Link>
        </>
    )
}


export default LogoImage;