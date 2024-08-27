import { Modal } from 'react-bootstrap';
import FundWalletForm from './components/fund';

const WalletModal = (props) => {
    const {show, handleClose} =  props
    return (
        <>
            <Modal show={show} onHide={handleClose} dialogClassName="wallet-modal">

                <FundWalletForm handleClose={handleClose} />
                
            </Modal>
        </>
    )
}


export default WalletModal ;