import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '~/service';

export const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const jwt = localStorage.getItem('token');
    var date = new Date();

    useEffect(() => {
        if (jwt) {
            if (date.getTime() > jwtDecode(jwt).exp * 1000) {
                // console.log(date.getTime());
                // console.log(jwtDecode(jwt).exp * 1000);
                logout();
            }
        } else {
            navigate('/login');
        }
    }, []);

    return jwt ? children : navigate('/login');
};
