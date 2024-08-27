import { Modal } from 'react-bootstrap';
import ResetPasswordForm from '../components/majors/resetPassword';

const ResetPassword = ({ show, close, ...rest }) => {
    return (
        <>
            <Modal show={show} onHide={close} dialogClassName="wallet-modal">
                <ResetPasswordForm handleClose={close} {...rest} />
            </Modal>
        </>

    );
}

export default ResetPassword;
