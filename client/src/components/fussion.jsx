import '../App.css'
const StayAheadSecttion = () => {
    return (
        <div className="stayAhead">
            <section className="">
                <div className="stayAheadMain">
                    <p className="main-first-p">Why Choose FusionX?</p>
                    <p className="main-second-p">Stay Ahead of the  <br /> <label style={{ color : '#7a7876'}}>with Data-Driven Insightss</label></p>
                    <div className="main-third-p">
                    <p  >
                        We're not just another prediction website. We're your ultimate partner in decoding football matches. Our AI algorithms analyze vast amounts of historical data, player performance, team dynamics, and more to offer predictions that go beyond guesswork. With us, you're not just making predictions – you're making informed decisions.
                    </p>
                    </div>
                </div>
                
                <button>Go to App</button>

                <div className="section-fun-part">
                    <h6>Fun fact</h6>
                    <p>AI has successfully predicted football scores up to 80% </p>
                </div>
            </section>
            <section className='doubleImage'>
                <img src="/images/shadow.png" alt="logo"/>
                <img src="/images/content.png" alt="logo"/>
            </section>
        </div>
    )
}



export default StayAheadSecttion;