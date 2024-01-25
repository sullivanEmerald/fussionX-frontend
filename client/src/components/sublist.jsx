export const SubcribtionList = (props) => {
    const {first, second, third, isColored} = props
    return (
        <section style={{ color : !isColored ? '#FFFFFF' : '#7E563B' }} className='footerIcon'>
            <section >
                <img src="images/fontIcon.png" />
                <p>{first}</p>
            </section>

            <section>
                <img src="images/fontIcon.png" />
                <p>{second}</p>
            </section>

            <section>
                <img src="images/fontIcon.png" />
                <p>{third}</p>
            </section>
    </section>
    )
}

export const Basic = (props) => {
    const {category, price, isMonthly} = props
    return (
        <div className={!isMonthly ? 'basic' : 'premium'}>
            <p>{category}</p>
            <span >&#36;{price}/month</span>
            <button>Get started Now</button>
        </div>
    )
}