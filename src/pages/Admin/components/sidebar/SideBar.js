import classNames from 'classnames/bind';
import styles from '~/pages/Admin/components/sidebar/SideBar.module.scss';
import {
    AccountCircle,
    Category,
    Dashboard,
    LibraryBooks,
    Logout,
    Person,
    ProductionQuantityLimits,
    Settings,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { logout } from '~/service';
const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('sidebar')}>
            <div className={cx('top')}>
                <span className={cx('logo')}>New Store</span>
            </div>
            <hr></hr>
            <div className={cx('center')}>
                <ul>
                    <p className={cx('title')}>Main</p>
                    <li>
                        <Dashboard className={cx('icon')} />
                        <span>Dashboard</span>
                    </li>
                    <p className={cx('title')}>List</p>
                    <li>
                        <AccountCircle className={cx('icon')} />

                        <Link to="/admin/user">
                            {' '}
                            <span>User</span>
                        </Link>
                    </li>
                    <li>
                        <ProductionQuantityLimits className={cx('icon')} />
                        <Link to="/admin/product">
                            <span>Product</span>
                        </Link>
                    </li>
                    <li>
                        <LibraryBooks className={cx('icon')} />
                        <Link to="/admin/oder">
                            <span>Order</span>
                        </Link>
                    </li>
                    <li>
                        <Category className={cx('icon')} />
                        <Link to="/admin/category">
                            <span>Category</span>
                        </Link>
                    </li>
                    <p className={cx('title')}>Service</p>
                    <li>
                        <Person className={cx('icon')} />
                        <span>Profile</span>
                    </li>
                    <li>
                        <Settings className={cx('icon')} />
                        <span>Setting</span>
                    </li>
                    <li>
                        <Logout className={cx('icon')} />
                        <Link to="/login">
                            <span onClick={logout}>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={cx('bottom')}>
                <div className={cx('color-option')}></div>
                <div className={cx('color-option')}></div>
                <div className={cx('color-option')}></div>
            </div>
        </div>
    );
}

export default SideBar;
