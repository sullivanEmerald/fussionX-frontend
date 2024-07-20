import { ToggleFlips } from "../../App";
import { useContext, useEffect, useRef } from "react";
import { ACTIONS } from "../../actions/app";

const ErrorMessage = () => {
    const { state, dispatch } = useContext(ToggleFlips);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        const timerId = setTimeout(() => {
            if (isMounted.current) {
                dispatch({ type: ACTIONS.SET_ERROR_MESSAGE, payload: " " });
            }
        }, 5000);

        return () => {
            clearTimeout(timerId);
            isMounted.current = false;
        };
    }, [state.errorMessage, dispatch]);

    return (
        <p className={!state.userReturnedMessage ? "profile-error-message" : 'profile-error-success'}>
            {state.errorMessage}
        </p>
    );
}

export default ErrorMessage;
