import { ToggleFlips } from "../../States/app-context/appContext";
import { useContext, useEffect, useRef } from "react";
import { ACTIONS } from "../../States/actions/app";

const ErrorMessage = () => {
    const { APP_ACTIONS} = ACTIONS;
    const { state, dispatch } = useContext(ToggleFlips);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        const timerId = setTimeout(() => {
            if (isMounted.current) {
                dispatch({ type: APP_ACTIONS.SET_ERROR_MESSAGE, payload: "" });
            }
        }, 5000);

        return () => {
            clearTimeout(timerId);
            isMounted.current = false;
        };
    }, [state.errorMessage, dispatch, APP_ACTIONS.SET_ERROR_MESSAGE]);

    return (
        <p className={!state.userReturnedMessage ? "profile-error-message" : 'profile-error-success'}>
            {state.errorMessage}
        </p>
    );
}

export default ErrorMessage;
