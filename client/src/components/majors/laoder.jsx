

 const PreLoader = ({ stateCondition }) => {
    return (
        <div className="preloader-container" >  
                <p style={{ color : '#030101'}}>{stateCondition}</p>
                <div className='loader'></div>
        </div>
    )
}

export default PreLoader;