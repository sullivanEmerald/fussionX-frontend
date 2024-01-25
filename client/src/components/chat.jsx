import '../App.css'
const Chat = () => {
    return (
        <div className="ChatSection">
            <section className="main-section">
                <p>welcome</p>
                <span className="main-section-span">The future of football prediction is here!</span>
            </section>
            <section className="ai-sect">
                <div className="bg"></div>
                <img src="/images/ellipsechat.png" className="section-ellipse" alt="logo"/>
                <div className="relative">
                <p>Our advanced platform uses AI for precise match insights. Whether you're a fan, bettor, or seeking a better football experience, our predictions offer the winning edge. Join us to revolutionize your engagement with the game!</p>
                <img src="/images/chatimage.png" alt="logo" className="main-img" />
                </div>
                <div className='alertAi' >AI Chatboard Coming soon</div>
            </section>
            
        </div>
    )
}


export default Chat;