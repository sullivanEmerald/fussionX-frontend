import { Basic, SubcribtionList  } from "../sublist"

const PurchaseRate = () => {
    return (
        <div className="dashboard-billing">

            <section className="billing-sect">
                <p><label style={{ opacity : '60%'}}>You are currently on the premium plan.</label>Upgrade to VIP plan to unlock the best predictions</p>
                <div>
                    
                    <div className="purchase-sub">
                            <h6>Annual Biling</h6>
                            <h6>Monthly Biling</h6>
                        </div>
                        <div className="purchase-arrow">
                            <img src="images/arrow.png" />
                            <span>Save 20% per month</span>
                        </div>
                    </div>
            </section>

            <section className='purchaseSectionAside'>
                <div className="sub-card1">
                    <div className="card-header">
                        <Basic category='Basic' price={0} isMonthly={false} />
                    </div>
                    <div className="card-top-container">
                    <div className="card-top">
                    <img src="images/orange-circle.png"/>
                    <img src="images/lines.png" style={{
                        height: "400px",
                        objectFit: "cover"
                    }} />
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
                    <img src="images/orange-circle.png"/>
                    <img src="images/lines.png" style={{
                        height: "400px",
                        objectFit: "cover"
                    }} />
                        <div className="card-shadow"></div>

                    </div>
                    </div>
                    <div className="card-footer">
                       <SubcribtionList first='Early Predictions'  second='In-Depth Analysis' third='Personalized Recommendations' isColored={true} />
                    </div>
                </div>
                <div className="sub-card1">
                    <div className="card-header">
                        <Basic category='VIP' price={16} isMonthly={false} />
                    </div>
                    <div className="card-top-container">
                    <div className="card-top">
                    <img src="images/orange-circle.png"/>
                    <img src="images/lines.png" style={{
                        height: "400px",
                        objectFit: "cover"
                    }} />
                        <div className="card-shadow"></div>

                    </div>
                    </div>
                    <div className="card-footer">
                       <SubcribtionList first='Best Predictions' second='In-depth Analysis' third='Personalized Recommendations' isColored={false} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PurchaseRate;