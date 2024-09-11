// import Footer from "../../components/profile/footer";
import Stakes from '../sub-sections/stakefilter'
import { useState, useEffect} from 'react'
import usePredictions from '../../store/predictions'
import LogoImage from '../../components/logo'

const Predictions = () => {

    const { predictions, loadPredictions } = usePredictions((state) => state) 

    const [showFreePrediction, SetshowFreePrediction] = useState(true)

    useEffect(() => {
        loadPredictions()
    }, [loadPredictions])

    return (
        <>
            <div className="stakes-sect" style={{ position: 'relative' }}>
                <div className="stakes-sect-heading">
                    <p>Available Predictions</p>
                    <div className="stakes-sect-buttons">
                        <button className="all-button">All</button>
                        <button>Stake of the day</button>
                        <button>Risk of the day</button>
                        <button>2X stake of the day</button>
                    </div>
                </div>

                <div className="sect-figure-table">

                    <Stakes />

                    <div className="odd-table">
                        <div className="sect-freemode">
                            <p className="sect-freemode-free">Free</p>
                            <button
                                onClick={showFreePrediction ? () => SetshowFreePrediction(false) : () => SetshowFreePrediction(true)} className="mode-button">
                                {showFreePrediction ? <img src="/images/dashboard/scrollUp.png" alt="logo" /> : <img src="/images/dashboard/scrollUp.png" className="scrollDown" alt="logo" />}
                            </button>
                        </div>
                        {showFreePrediction && (
                            <div>
                                <table class="custom-table">
                                    <thead className="table-header">
                                        <tr>
                                            <th>Date</th>
                                            <th className="header-match" >Match</th>
                                            <div className="header-prediction">
                                                <th>Prediction</th>
                                            </div>
                                            <th>{''}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tableBody">
                                        {predictions.map((item, i) => (
                                            <tr key={item._id} style={{ position: 'relative' }} className={i === predictions.length - 1 ? 'last-row' : 'table-body-row'}>
                                                <td>{item.date} (15:00 WAT)</td>
                                                <td>{item.home} vs {item.away}</td>
                                                <td>{item.stage}</td>
                                                <td className="odd-data">{item.prediction}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        <div className="premium-sect">
                            <div className="premium-flex">
                                <span className="premium-text">Premium</span>
                                <img src="/images/dashboard/king.png" alt="logo" />
                            </div>
                            <button className="caretDown"><img src="/images/dashboard/CaretDown.png" alt="logo" /></button>
                        </div>
                        <div className="vip-sect">
                            <div className="vip-flex">
                                <span className="vip-text">VIP</span>
                                <img src="/images/dashboard/kingSilver.png" alt="logo" />
                                <img src="/images/dashboard/LockKey.png" alt="logo" />
                                <p className="vip-note">(Buy a VIP plan to unlock the best predictions)</p>
                            </div>
                            <button className="caretDown"><img src="/images/dashboard/CaretDown.png" alt="logo" /></button>
                        </div>
                    </div>

                </div>
                <div className="betting-advise">
                    <p>Note: This is not financial advice. <label id="adviseShow">Stake only what you can afford to lose.</label></p>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Predictions;