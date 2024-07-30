import { Modal } from 'react-bootstrap';
import ResetPasswordForm from '../components/majors/resetPassword';

const ResetPassword = (props) => {

    const { show, handleClose} = props

    return (
        <>
     
        <Modal show={show} onHide={handleClose} dialogClassName="wallet-modal">

            <ResetPasswordForm handleClose={handleClose} />

        </Modal>

        
        </>
    )
}
export default ResetPassword;