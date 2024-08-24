import { Link } from 'react-router-dom';
import LogoImage from '../../components/logo';

const MainNavigateLinks = () => {
  return (
    <div className="nav-bar">

      <LogoImage />

      <div className='navigation'>
        <Link to="/fussion" className='navLink'>Why FusionX</Link>
        <Link to='/faq' className='navLink'>fAQ</Link>
        <Link to='/pricing' className='navLink'>Pricing</Link>
        <Link to='/contact' className='navLink'>Contact</Link>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default MainNavigateLinks;

