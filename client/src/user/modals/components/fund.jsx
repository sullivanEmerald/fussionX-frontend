const FundWalletForm = ({ handleClose}) => {
    return (
        <>
        
            <div className='fund-transfer-modal'>
                <img src='/images/icons/close.png' onClick={() => handleClose()} className='close-button' alt='logo' />
                <p>Funds Transfer</p>

                <div>
                    <span>Amount</span>
                    <input placeholder='Enter amount of funds' />
                </div>

                <div>
                    <span>Bank</span>
                    <input placeholder='Enter amount of funds' />
                </div>

                <div>
                    <span>Bank account number</span>
                    <input placeholder='Enter bank account number' />
                </div>

                <button className='transfer-button'>Transfer to Bank</button>
            </div>
        </>
    )
}

export default FundWalletForm;