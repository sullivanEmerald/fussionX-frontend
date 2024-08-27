import Regular from "../components/dashboard";
import Login from "../auth/pages/login";
import Register from "../auth/pages/register";


const USER_ROUTES = {

    DASHBOARD : <Regular />,
    REGISTER : <Register />,
    LOGIN : <Login />
}

const { DASHBOARD, REGISTER, LOGIN } = USER_ROUTES;

export {DASHBOARD, REGISTER, LOGIN}