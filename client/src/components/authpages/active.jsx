

const ActiveUser = () =>{
    return (
        <>
            <div className="active-main-section">
                <p>Congrats to being an active user! You have been awarded <label style={{ color : 'white'}}>2 bonus(es).</label>  Click to view</p>

                <div className="active-table-section">
                        <div className="bonus-sect">
                            <div className="bonus-sect-bonus" >
                                <span className="bonus-text">Bonus</span>
                                <img src="images/icons/Gift.png" alt="logo"/>
                            </div>
                            <button className="remove-style-button"><img src="images/icons/Vector.png" alt="logo"/></button>
                        </div>

                        <div className="vip-active-section">
                            <div className="vip-flex">
                                <span className="vip-active">VIP</span>
                                <img src="/images/icons/silverking.png" alt="logo" />
                            </div>
                            <table class="custom-table active-table">
                                <thead className="table-header">
                                    <tr>
                                        <th>Date</th>
                                        <th className="header-match" >Match</th>
                                        <div  className="header-prediction">
                                            <th>Prediction</th>
                                        </div>
                                    </tr>
                                </thead>
                                <tbody className="tableBody">
                                    <tr>
                                        <td>12/3/23 (15:00 WAT)</td>
                                        <td>Real Madrid vs Barcelona</td>
                                        <td>Full Time <label className="odd-value" >Over 1.5</label></td>
                                    </tr>
                                    <tr>
                                        <td>12/3/23 (15:00 WAT)</td>
                                        <td>Real Madrid vs Barcelona</td>
                                        <td>Full Time <label className="odd-value">Over 1.5</label></td>
                                    </tr>
                                    <tr>
                                        <td>12/3/23 (15:00 WAT)</td>
                                        <td>Real Madrid vs Barcelona</td>
                                        <td>Full Time <label className="odd-value">Over 1.5</label></td>
                                    </tr>
                                    <tr  style={{ borderBottom  :'none'}}>
                                        <td>12/3/23 (15:00 WAT)</td>
                                        <td>Real Madrid vs Barcelona</td>
                                        <td>Full Time <label className="odd-value">Over 1.5</label></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* table */}
                        
                    

                </div>

                {/* GIFT SECTION */}

                <div className="active-sect-coins">
                    <div className="coins-sect">
                        <span  className="bonus-text">Bonus 2</span>
                        <img src="images/icons/Coins.png" alt="logo"/>
                    </div>
                    <button className="remove-style-button"><img src="images/icons/CaretDown.png" alt="logo"/></button>
                </div>
            </div>
        
        </>
    )
}


export default ActiveUser;