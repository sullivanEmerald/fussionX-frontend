import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowNavigationRoute from "../middleware/majorroutes";
import { FUSSION, FAQ, PRICING, CONTACT, HOME, REGISTER, LOGIN } from '../page/pages'
import UserProvider from "../../context/loggeduser";

const APP_ROUTES = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={HOME} />

                <Route element={<ShowNavigationRoute />}>
                    <Route path="/fussion" element={FUSSION} />
                    <Route path="/faq" element={FAQ} />
                    <Route path="/pricing" element={PRICING} />
                    <Route path="/contact" element={CONTACT} />
                    <Route path="*" element={<p>Amebo, Use the Links Please</p>} />
                </Route>


                <Route path="/register" element={REGISTER} />
                <Route path="/login" element={
                    <UserProvider>
                        {LOGIN}
                    </UserProvider>
                } />

            </Routes>
        </Router>
    )
}

export default APP_ROUTES;