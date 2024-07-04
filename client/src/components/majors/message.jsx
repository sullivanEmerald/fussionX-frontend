import { ToggleFlips } from "../../App"
import { useContext, useEffect } from "react"

const ErrorMessage = () => {

    const {errorMessage, userReturnedMessage, setErrorMessage } = useContext(ToggleFlips)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setErrorMessage('');
        }, 5000);
    
        return () => clearTimeout(timerId);
    }, [setErrorMessage]);
    


    return (
        <>
            <p className={!userReturnedMessage ? "profile-error-message" : 'profile-error-sucucess'}>{errorMessage}</p>
        </>
    )
}

export default ErrorMessage;