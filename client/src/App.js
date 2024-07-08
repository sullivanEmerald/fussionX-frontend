import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './pages/home';
import Register from './components/authpages/register';
import Login from './components/authpages/login';
import { useEffect, useState, createContext, useReducer } from 'react';
import User from './components/authpages/user';
import './App.css'
import Profile from './pages/profile';
import Search from './pages/search';
import Bonus from './pages/bonus';
import Active from './pages/active';
import Setting from './pages/setting';
import DisplayProfile from './pages/display';
import VerifyRoute from './pages/verify';
import Notverified from './pages/notverified';
import Passsword from './pages/password';
import ResetPasssword from './pages/reset';
import AdminIndexPage from './admin/pages/home';
import AdminRoute from './middleware/secureadmin';
import { PredictionProvider } from './context/predictions';
import { ACTIONS } from './actions/app';

const INITIAL_STATE = {
  isToggle : false,
  isPassword : false,
  errorMessage  : '',
  userReturnedMessage : false,
}

export const LoginContext = createContext({
  islogged: false,
  setIsLogged: () => {},
});
export const AdminContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},
});

export const UserRecords = createContext({
  getUser: null,
  setUser: () => {},
});

export const UserImage = createContext({
  userProfilePicture : '',
  setUserImage : () => {}
})

export const ToggleFlips = createContext({
  state: INITIAL_STATE,
  dispatch: () => {},
});


const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE :
      return {
        ...state,
        isToggle : !action.payload ?  action.payload : !state.isToggle
      }
    case ACTIONS.SET_IS_PASSWORD : 
      return {
        ...state,
        isPassword : !action.payload ? action.payload : !state.isPassword 
      }
    case ACTIONS.SET_ERROR_MESSAGE :
      return {
        ...state,
        errorMessage : action.payload
      }
    case ACTIONS.SET_USER_RETURNED_MESSAGE : 
      return {
        ...state,
        userReturnedMessage  : action.payload
      }
      default :
       return state
  }
}

function App() {
  const [islogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [getUser, setUser] = useState(null);
  const [userProfilePicture, setUserImage] = useState('')

  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE)


  useEffect(() => {
    // Check localStorage for isAdmin and isUser flags when the app loads
    const userLocalStorage = JSON.parse(localStorage.getItem('user') || '{}');

    if (!userLocalStorage || Object.keys(userLocalStorage).length === 0) {
      setIsAdmin(false);
      setIsLogged(false);
      setUser(null);
    } else {
      if (userLocalStorage.role) {
        setIsAdmin(true);
        setIsLogged(true);
      } else {
        setIsAdmin(false);
        setIsLogged(true);
      }

      setUser(userLocalStorage);
    }
  }, [setIsAdmin, setIsLogged]);


  console.log(`the admin value is ${isAdmin}`)
  console.log(`the admin value is ${islogged}`)

  return (
    <LoginContext.Provider value={{ islogged, setIsLogged }}>
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <UserRecords.Provider value={{ getUser, setUser }}>
          <UserImage.Provider value={{userProfilePicture, setUserImage }}>
          <PredictionProvider>
            <ToggleFlips.Provider value={{ state, dispatch }} >
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<User />} />
                <Route path='/subscribtion' element={<Profile />}/>
                <Route path='/payment' element={<Search />} />
                <Route path='/bonus' element={<Bonus />} />
                <Route path='/active' element={<Active />} />
                <Route path='/settings' element={<DisplayProfile />} />
                <Route path='/profile' element={<Setting />} />
                <Route path='/verify' element={<VerifyRoute />} />
                <Route path='/notverify' element={<Notverified />} />
                <Route path='/password' element={<Passsword />} /> 
                <Route path='/reset' element={<ResetPasssword />} />

                {/* ADMIN ROUTES */}

                <Route path="/admin" element={<AdminRoute isAdmin={isAdmin} component={AdminIndexPage} />} />
              </Routes>
          </Router> 
          </ToggleFlips.Provider>
          </PredictionProvider>
          </UserImage.Provider>
        </UserRecords.Provider>
      </AdminContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
