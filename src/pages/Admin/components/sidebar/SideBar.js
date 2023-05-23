import classNames from 'classnames/bind';
import styles from '~/pages/Admin/components/sidebar/SideBar.module.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import {
    AccountCircle,
    Dashboard,
    LibraryBooks,
    Logout,
    Person,
    ProductionQuantityLimits,
    Settings,
} from '@mui/icons-material';
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
                        <span>User</span>
                    </li>
                    <li>
                        <ProductionQuantityLimits className={cx('icon')} />
                        <span>Product</span>
                    </li>
                    <li>
                        <LibraryBooks className={cx('icon')} />
                        <span>Order</span>
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
                        <span>Logout</span>
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
