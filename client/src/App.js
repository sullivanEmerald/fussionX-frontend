// import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
// import User from './components/authpages/user';
import './App.css'
import APP_ROUTES from './main/routes/main';
// import Profile from './pages/profile';
// import Search from './pages/search';
// import Bonus from './pages/bonus';
// import Active from './pages/active';
// import Setting from './pages/setting';
// import DisplayProfile from './pages/display';
// import VerifyRoute from './pages/verify';
// import Notverified from './pages/notverified';
// import Passsword from './pages/password';
// import ResetPasssword from './pages/reset';
// import AdminIndexPage from './admin/pages/home';
// import AdminRoute from './middleware/secureadmin';
// import { PredictionProvider } from './context/predictions';



function App() {

  // useEffect(() => {
  //   // Check localStorage for isAdmin and isUser flags when the app loads
  //   const userLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');

  //   if (!userLocalStorage || Object.keys(userLocalStorage).length === 0) {
  //     setIsAdmin(false);
  //     setIsLogged(false);
  //     setUser(null);
  //   } else {
  //     if (userLocalStorage.role) {
  //       setIsAdmin(true);
  //       setIsLogged(true);
  //     } else {
  //       setIsAdmin(false);
  //       setIsLogged(true);
  //     }

  //   }
  // }, []);


  return (
      <APP_ROUTES />
  );
}

export default App;
