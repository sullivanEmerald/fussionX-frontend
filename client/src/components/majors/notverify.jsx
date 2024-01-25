const IsNotVerified = () => {
    return (
        <>
            <section className="verify-acct">
                <p>Your email is not verified</p>
                <span className="verify-email">Verify your email</span>
                <p className="verify-link">An email has been sent to <label style={{ color : '#FFFFFF'}}>vicbet@gmail.com</label>
                    Follow the link in the email to verify and activate your account
                </p>
            </section>
        </>
    )
}

export default IsNotVerified;