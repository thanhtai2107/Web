import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Login from '~/pages/Login';

import AdminHome from '~/pages/Admin/Home/AdminHome';
import Single from '~/pages/Admin/Single/Single';

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
import Equipment from '~/pages/Equipment';
import Clothe from '~/pages/Clothe';
import Blog from '~/pages/Blog';
import Shoes from '~/pages/Product/Shoes';

import { PrivateRoute } from './privateRouter';
import ProductList from '~/pages/Admin/List/ProductList';
import List from '~/pages/Admin/List/UserList';
import NewUser from '~/pages/Admin/New/NewUser';
import NewProduct from '~/pages/Admin/New/NewProduct';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/blog', component: Blog },
    { path: '/login', component: Login },

    { path: '/admin', component: AdminHome, layout: null, private: PrivateRoute, role: 'ADMIN' },
    { path: '/admin/user', component: List, layout: null },
    { path: '/admin/user:userId', component: Single, layout: null },
    { path: '/admin/user/new', component: NewUser, layout: null },
    { path: '/admin/product', component: ProductList, layout: null },
    { path: '/admin/product/new', component: NewProduct, layout: null },

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
