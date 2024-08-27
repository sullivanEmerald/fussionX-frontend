import WhyFussionRoute from "../components/why"
import FaqRoute from "../components/faq"
import PricingRoute from "../components/pricing"
import ContactRoute from "../components/contact"
import Home from "../components/home"


const MAIN_PAGES = {
    FUSSION: <WhyFussionRoute />,
    FAQ: <FaqRoute />,
    PRICING: <PricingRoute />,
    CONTACT: <ContactRoute />,
    HOME: <Home />,
}


const { FUSSION, FAQ, PRICING, CONTACT, HOME } = MAIN_PAGES;


export { FUSSION, FAQ, PRICING, CONTACT, HOME };