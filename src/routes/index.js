import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Login from '~/pages/Login';
import AdminHome from '~/pages/Admin/Home/AdminHome';
import List from '~/pages/Admin/List/List';
import Single from '~/pages/Admin/Single/Single';
import New from '~/pages/Admin/New/New';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/login', component: Login },
    { path: '/admin', component: AdminHome, layout: null },
    { path: '/user', component: List, layout: null },
    { path: '/user:userId', component: Single, layout: null },
    { path: 'user/new', component: New, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
