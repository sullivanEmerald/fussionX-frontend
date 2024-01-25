import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminRoute = (props) => {
    const { component: Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        const userLocalStorage = JSON.parse(localStorage.getItem('user')) || {}; 
        if (!userLocalStorage || !userLocalStorage.role) {
            navigate('/login', { replace: true });
        }
    }, [navigate]);

    return <Component />;
};

export default AdminRoute;
