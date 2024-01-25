const Layout = () => {
    return (
        <div className="layout-section">
            <section className="layout-header">
                <p>How It Works</p>
                <span><label className="colored-header">Unveiling</label> the Future of Football <label className="colored-header">Outcomes</label></span>
            </section>
            <section className="four-cards">
                <div className="glow-card">
                    <img src="/images/group/orange.png" alt="" className="glow" />
                    <div className="relative">
                    <div className="text-container">
                        <h6>Accurate Predictions:</h6>
                        <p>leverages advanced AI algorithms to provide highly accurate football match predictions. Users can make more informed decisions when betting or simply enjoy the game with a deeper understanding of likely outcomes.</p>
                    </div>
                    <div className="img-container">

                    <img src="/images/group/img1.png" alt="" />
                    </div>
                    </div>
                </div>
                <div className="glow-card">
                    <img src="/images/group/blue.png" alt="" className="glow" />
                    <div className="relative">
                    <div className="text-container">
                        <h6>Pay less for more:</h6>
                        <p>By opting for a premium subscription, users unlock exclusive benefits such as early predictions, in-depth match analyses, and personalized recommendations, maximizing their chances of success and enjoyment.</p>
                    </div>
                    <div className="img-container">

                    <img src="/images/group/img2.png" alt=""  style={{
                    "--left":"60%"
                }} />
                    </div>
                    </div>
                </div>
                <div className="glow-card">
                    <img src="/images/group/blue.png" alt="" className="glow" />
                    <div className="relative">
                    <div className="text-container">
                        <h6>AI’s Unbiased Analysis</h6>
                        <p>Gain a significant strategic advantage over others by leveraging our AI-generated predictions, which reveal hidden patterns and trends that human analysis may miss, giving users the upper hand in their football-related endeavors.</p>
                    </div>
                    <div className="img-container">

                    <img src="/images/group/img3.png" alt=""  style={{
                    "--left":"60%"
                }} />
                    </div>
                    </div>
                </div>
                <div className="glow-card">
                    <img src="/images/group/orange.png" alt="" className="glow" />
                    <div className="relative">
                    <div className="text-container">
                        <h6>Easy Chat-style Interface:</h6>
                        <p>Access predictions through our user-friendly platform, designed to make your experience seamless and intuitive.</p>
                    </div>
                    <div className="img-container">

                    <img src="/images/group/img4.png" alt=""  style={{
                    "--left":"60%"
                }} />
                    </div>
                    <p className="layout-soon">Coming soon</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Layout;