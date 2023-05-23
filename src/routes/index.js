import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Login from '~/pages/Login';
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

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/blog', component: BlogPage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forgot-password', component: ForgotPassword },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/orderconfirmation', component: OrderConfirmation },
    { path: '/cancelorder', component: CancelOrder },
    { path: '/nike', component: Nike },
    { path: '/mizuno', component: Mizuno },
    { path: '/adidas', component: Adidas },
    { path: '/product/:productId', component: ProductDetail },
    { path: '/equipment', component: Equipment },
    { path: '/clothe', component: Clothe },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
