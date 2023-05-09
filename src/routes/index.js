import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Login from '~/pages/Login';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/login', component: Login },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
