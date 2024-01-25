import UploadImageForm from "../components/majors/upload";
import { Modal } from 'react-bootstrap';

const UploadProfilePicture = (props) => {
    const {show, handleClose} =  props

    return (
        <>
     
            <Modal show={show} onHide={handleClose} dialogClassName="wallet-modal">

                <UploadImageForm handleClose={handleClose} />

            </Modal>
        </>
    )
}

export default UploadProfilePicture;