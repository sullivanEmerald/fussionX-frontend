import WhyFussionRoute from "../components/why"
import FaqRoute from "../components/faq"
import PricingRoute from "../components/pricing"
import ContactRoute from "../components/contact"
import Home from "../components/home"
import Login  from '../components/login'
import Register from "../components/register"


const MAIN_PAGES = {
    FUSSION : <WhyFussionRoute />,
    FAQ : <FaqRoute />,
    PRICING : <PricingRoute />,
    CONTACT : <ContactRoute />,
    HOME :  <Home />,
    LOGIN : <Login />,
    REGISTER : <Register />

}


const { FUSSION, FAQ, PRICING, CONTACT, HOME, LOGIN, REGISTER} = MAIN_PAGES;

module.exports = {FUSSION, FAQ, PRICING, CONTACT };