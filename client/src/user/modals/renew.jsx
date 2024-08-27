import { Modal } from 'react-bootstrap';
import ChangeProfileForm from '../components/majors/changeprofile';

const ChangeProfilePicture = (props) => {

    const { show, handleClose} = props

    return (
        <>
     
        <Modal show={show} onHide={handleClose} dialogClassName="wallet-modal">

            <ChangeProfileForm handleClose={handleClose} />

        </Modal>

        
        </>
    )
}
export default ChangeProfilePicture;