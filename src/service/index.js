import jwtDecode from 'jwt-decode';

export const getRole = () => {
    const jwt = localStorage.getItem('token');
    if (!jwt) return [];

    const decodeJwt = jwtDecode(jwt);
    if (!decodeJwt) return [];
    return decodeJwt.authorities[0].authority;
};
