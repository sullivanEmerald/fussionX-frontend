import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserProfileHeaderAndSideBar from '../navbar/user'
import { DASHBOARD, REGISTER, LOGIN } from '../pages/user'

const UserLoggedRoutes = () => {
    return (
        <>
            <Router>
                <UserProfileHeaderAndSideBar />
                <Routes>
                    <Route path='/login' element={LOGIN} />
                    <Route path='/register' element={REGISTER} />
                    <Route path='/dashboard' element={<p>Sullivan Amadike Sullivan, the greatest software Engineer</p>} />
                </Routes>
            </Router>
        
        </>
    )
}

export default UserLoggedRoutes;