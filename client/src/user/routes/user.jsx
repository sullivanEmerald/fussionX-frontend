import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfileHeaderAndSideBar from '../navbar/user';
import { DASHBOARD } from '../pages/user';
import UserProvider from '../../context/loggeduser';

const UserLoggedRoutes = () => {
    return (
        <Router>
            <UserProvider>
                <UserProfileHeaderAndSideBar />
                <Routes>
                    <Route path='/dashboard' element={DASHBOARD} />
                </Routes>
            </UserProvider>
        </Router>
    );
}

export default UserLoggedRoutes;
