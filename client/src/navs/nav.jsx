import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
        <div className='navigation'>
            <Link className='navLink'>Why FusionX</Link>
            <Link className='navLink'>fAQ</Link>
            <Link className='navLink'>Pricing</Link>
            <Link className='navLink'>Contact</Link>
            <button>Get Started</button>
        </div>
  );
}

export default Navigation;
