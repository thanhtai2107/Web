import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const jwt = localStorage.getItem('token');

    return jwt ? children : navigate('/login');
};
