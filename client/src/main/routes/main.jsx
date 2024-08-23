import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavigateLinks from "../nav/link";
import { FUSSION, FAQ, PRICING, CONTACT, } from '../page/pages'

<Router>
    <MainNavigateLinks />
    <Routes>
        <Route path="/fussion" element={FUSSION} />
        <Route path="/faq" element={FAQ} />
        <Route path="/pricing" element={PRICING} />
        <Route path="/contact" element={CONTACT} />
    </Routes>
</Router>