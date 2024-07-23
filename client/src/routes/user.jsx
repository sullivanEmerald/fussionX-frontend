const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const UserRoutes = {
    login : `${API_BASE_URL}/login`,
    signup: `${API_BASE_URL}/register`,
}

export { UserRoutes as User}