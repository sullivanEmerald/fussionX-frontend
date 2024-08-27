import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowNavigationRoute from "../middleware/majorroutes";
import { FUSSION, FAQ, PRICING, CONTACT, HOME } from '../page/pages'

const APP_ROUTES = () => {
    return (
        <Router>
            <Routes>
                <Route element={<ShowNavigationRoute />}>
                    <Route path="/fussion" element={FUSSION} />
                    <Route path="/faq" element={FAQ} />
                    <Route path="/pricing" element={PRICING} />
                    <Route path="/contact" element={CONTACT} />
                </Route>

                <Route path="/" element={HOME} />
            </Routes>
        </Router>
    )
}

export default APP_ROUTES;