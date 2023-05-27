import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Login from '~/pages/Login';

import AdminHome from '~/pages/Admin/Home/AdminHome';
import List from '~/pages/Admin/List/List';
import Single from '~/pages/Admin/Single/Single';
import New from '~/pages/Admin/New/New';

import Register from '~/pages/Register';
import ForgotPassword from '~/pages/ForgotPassword';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/CheckOut';
import OrderConfirmation from '~/pages/OrderConfirmation';
import CancelOrder from '~/pages/CancelOrder';
import Mizuno from '~/pages/Product/GiayBongDa/Mizuno';
import Nike from '~/pages/Product/GiayBongDa/Nike';
import Adidas from '~/pages/Product/GiayBongDa/Adidas';
import ProductDetail from '~/pages/ProductDetail';
import BlogPage from '~/pages/BlogPage';
import Equipment from '~/pages/Equipment';
import Clothe from '~/pages/Clothe';
import Shoes from '~/pages/Product/Shoes';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/blog', component: BlogPage },
    { path: '/login', component: Login },

    { path: '/admin', component: AdminHome, layout: null },
    { path: '/user', component: List, layout: null },
    { path: '/user:userId', component: Single, layout: null },
    { path: 'user/new', component: New, layout: null },

    { path: '/register', component: Register },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/orderconfirmation', component: OrderConfirmation },
    { path: '/cancelorder', component: CancelOrder },
    { path: '/nike', component: Nike },
    { path: '/mizuno', component: Mizuno },
    { path: '/adidas', component: Adidas },
    { path: '/product/:id', component: ProductDetail },
    { path: '/equipment', component: Equipment },
    { path: '/clothe', component: Clothe },
    { path: '/shoes', component: Shoes },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
