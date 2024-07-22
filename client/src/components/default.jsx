
import Chat from "./chat";
import StayAheadSecttion from "./fussion";
import Partners from "./partners";
import Layout from "./layout";
import Singup from "./signup";
import Subscription from "./subscription";
import HeroSection from "./heroSection";
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


        </>
        
    )
}
export default Default;