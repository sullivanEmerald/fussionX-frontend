
import Chat from "./chat";
import StayAheadSecttion from "./fussion";
import Partners from "./partners";
import Layout from "./layout";
import Singup from "./signup";
import Subscription from "./subscription";
import HeroSection from "./heroSection";
import Community from "./community";
import Testimonial from "./testimonial";
import '../App.css'


const Default = () => {
    return (
        <>        
                <HeroSection />
                <Chat />
                <StayAheadSecttion />
                <Partners />
                <Layout />
                <Singup />
                <Subscription /> 
                {/* <Community />    */}
                {/* <Testimonial /> */}

        </>
        
    )
}
export default Default;