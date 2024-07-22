import {SubcribtionList, Basic} from "./sublist";
import '../App.css'
const Subscription = () => {
    return (
        <main className="relative">
            <img src="images/sideellipse.png" className="shadow-image" alt="fussionX-logo" />
            <div className="subscriptionSection relative">
                <section className="subscriptionSectionMain" >
                    <div>
                        <p className="sub-heading">Stay Ahead with Premium Subscriptions</p>
                        <h1>Unleash Exclusive Features <span style={{ opacity : '45%'}}>for the Ultimate Advantage</span></h1>
                        <div className="billing-sub">
                            <h6>Annual Biling</h6>
                            <h6>Monthly Biling</h6>
                        </div>
                        <div className="sub-arrow">
                            <img src="images/arrow.png" alt="fussionX-logo" />
                            <span>Save 20% per month</span>
                        </div>
                    </div>
                </section>
            <section className='subscriptionSectionAside'>
                <div className="sub-card1">
                    <div className="card-header">
                        <Basic category='Basic' price={0} isMonthly={false} />
                    </div>
                    <div className="card-top-container">
                    <div className="card-top">
                    <img src="images/orange-circle.png"alt="fussionX-logo" />
                    <img src="images/lines.png" style={{
                        height: "400px",
                        objectFit: "cover"
                    }} alt="fussionX-logo" />
                        <div className="card-shadow"></div>

                    </div>
                    </div>
                    <div className="card-footer">
                       <SubcribtionList first='Normal Predictions' second='Normal Analysis' third='General Recommendations' isColored={false} />
                    </div>
                </div>
                <div className="sub-card1 sub-card2">
                    <div className="card-header">
                        <Basic category='Premium' price={8} isMonthly={true} />
                    </div>
                    <div className="card-top-container">
                    <div className="card-top">
                    {/* <img src="images/subscribtion/background.png" /> */}
                    <img src="images/orange-circle.png" alt="fussionX-logo" />
                    <img src="images/lines.png" style={{
                        height: "400px",
                        objectFit: "cover"
                    }} alt="fussionX-logo" />
                        <div className="card-shadow"></div>

                    </div>
                    </div>
                    <div className="card-footer">
                       <SubcribtionList first='Early Predictions'  second='In-Depth Analysis' third='Personalized Recommendations' isColored={true} />
                    </div>
                </div>
            </section>
        </div>
        </main> 
    )
}


export default Subscription;