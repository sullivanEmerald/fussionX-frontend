import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfileHeaderAndSideBar from '../navbar/user';
import { DASHBOARD } from '../pages/user';
import UserProvider from '../../context/loggeduser';
import IsUserRoute from '../middleware/checkuserroute';

const UserLoggedRoutes = () => {
    return (
        <Router>
            <UserProvider>
                <Routes>
                    <Route element={<IsUserRoute />}>
                        <Route path='/dashboard' element={DASHBOARD} />
                    </Route>
                    <Route path='*' element={<p>The User Page Is Not Found</p>} />
                </Routes>
            </UserProvider>
        </Router>
    );
}

export default UserLoggedRoutes;
