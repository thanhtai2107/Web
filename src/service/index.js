import jwtDecode from 'jwt-decode';
import { redirect } from 'react-router-dom';

export const getRole = () => {
    const jwt = localStorage.getItem('token');
    if (!jwt) return [];

    const decodeJwt = jwtDecode(jwt);
    if (!decodeJwt) return [];
    return decodeJwt.authorities[0].authority;
};

export const getAuthConfig = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});

export const logout = () => {
    localStorage.removeItem('token');
};
