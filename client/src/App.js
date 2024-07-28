import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from './pages/home';
import Register from './components/authpages/register';
import Login from './components/authpages/login';
import { useEffect, useState, createContext } from 'react';
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





function App() {
  const [islogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [getUser, setUser] = useState(null);

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


  return (
    <LoginContext.Provider value={{ islogged, setIsLogged }}>
      <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
        <UserRecords.Provider value={{ getUser, setUser }}>
          <PredictionProvider>
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
          </PredictionProvider>
        </UserRecords.Provider>
      </AdminContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
