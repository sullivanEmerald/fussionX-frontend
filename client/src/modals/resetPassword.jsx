import { Modal } from 'react-bootstrap';
import ResetPasswordForm from '../components/majors/resetPassword';

const ResetPassword = (props) => {

    const { show, close , newPassword} = props

    return (
        <>
     
        <Modal show={show} onHide={close} dialogClassName="wallet-modal">
        
            <ResetPasswordForm handleClose={close} {...newPassword} />

        </Modal>

        
        </>
    )
}
export default ResetPassword;