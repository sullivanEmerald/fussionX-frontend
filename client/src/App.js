// import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
// import User from './components/authpages/user';
import './App.css'
import APP_ROUTES from './main/routes/main';
import { useEffect, useContext } from 'react';
import { ToggleFlips, UserState } from './user/States/app-context/appContext'
import { ACTIONS } from './user/States/actions/app';
import UserLoggedRoutes from './user/routes/user';
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




function App() {
  const { USER_ACTIONS, APP_ACTIONS } = ACTIONS;
  const { state, dispatch } = useContext(ToggleFlips)
  const { userDispatch } = useContext(UserState)

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');

    if (!userLocalStorage || Object.keys(userLocalStorage).length === 0) {
      dispatch({ type: APP_ACTIONS.SET_IS_USER_lOGGED, payload: false })
      userDispatch({ type: USER_ACTIONS.SET_USER_PROFILE_INFORMATION, payload: null });
    } else {
      dispatch({ type: APP_ACTIONS.SET_IS_USER_lOGGED, payload: true })
      dispatch({ type: USER_ACTIONS.SET_USER_PROFILE_INFORMATION, payload: userLocalStorage })
    }
  }, []);
  

  if(state.isUserLoggedIn) return <UserLoggedRoutes />

  return (
    <>

      <APP_ROUTES />

    </>
  );
}

export default App;
