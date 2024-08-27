

const Payment = () => {
    return (
        <>
           <div className="payment-container">
                <div className="payment-header-sect">
                    <p>Payment</p>
                    <input placeholder="seach by date or title" className="paymentInput" />
                    <div className="payment-downlaod">
                        <span>Download</span>
                        <img src="/images/dashboard/downlaod.png" alt="logo" />
                    </div>
                </div>
                <div className="table-section">
                            <table class="payment-table">
                                <thead className="payment-header">
                                    <tr>
                                        <th>Date</th>
                                        <th >Title Amount</th>
                                        <th>Prediction</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="payment-table-body">
                                    <tr>
                                        <td className="payment-date">12/3/23</td>
                                        <td>Fund wallet</td>
                                        <td>N100,200</td>
                                    </tr>
                                    <tr>
                                        <td className="payment-date">12/3/23</td>
                                        <td>Transfer fund <label className="payment-date">to Kuda Bank (45621345)</label> </td>
                                        <td>N70,200</td>
                                    </tr>
                                    <tr>
                                        <td className="payment-date">12/3/23</td>
                                        <td>Subscribe <label className="payment-date">to Premium Plan</label></td>
                                        <td>N20,000</td>
                                    </tr>
                                    <tr>
                                        <td className="payment-date">12/3/23</td>
                                        <td>Transfer fund <label className="payment-date">to Access Bank (45621345)</label></td>
                                        <td>N10,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="load-more-sect">
                            <button className="remove-style-button"><img src="images/dashboard/refresh-plain.png" alt="logo" /></button>
                            <span>Load more</span>
                        </div>
           </div>
        </>
    )
}


export default Payment;