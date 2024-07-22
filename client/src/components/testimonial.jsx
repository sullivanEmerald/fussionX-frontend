const Testimonial = () => {
    return (
        <>
            <section className="test-sect relative">
                    <img src="/images/testimonials/line.png" alt="fussionX-logo" className="test-image" style={{ position : 'absolute'}} />
                    <img src="/images/testimonials/ellipse.png" className="test-image" style={{ position : 'absolute'}} alt="fussionX-logo" />
                <div>
                    <div>
                        <p>Testimonials!</p>
                        <p>What our users are saying about FusionX</p>
                    </div>
                    <div>
                        <img src="/images/testimonials/left.png" alt="logo"  />
                        <img src="/images/testimonials/right.png" alt="logo" />
                    </div>
                </div>
                <section className="test-msg">
                    <img src="/images/testimonials/leftmsg.png" alt="logo" />
                    <img src="/images/testimonials/middle.png" alt="logo" />
                    <img src="/images/testimonials/rightmsg.png" alt="logo" />
                </section>
            </section>
        </>
    )
}

export default Testimonial;