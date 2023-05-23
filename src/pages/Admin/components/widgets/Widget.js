import {
    AccountBalanceWalletOutlined,
    KeyboardArrowUp,
    MonetizationOnOutlined,
    PersonOutlineOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material';
import classNames from 'classnames/bind';
import styles from '~/pages/Admin/components/widgets/Widget.module.scss';
const cx = classNames.bind(styles);
function Widget({ type }) {
    let data;
    switch (type) {
        case 'user':
            data = {
                title: 'USER',
                isMoney: false,
                link: 'View all users',
                icon: (
                    <PersonOutlineOutlined
                        className={cx('icon')}
                        style={{ color: 'crimson', backgroundColor: 'rgba(255, 0, 0, 0.2)' }}
                    />
                ),
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: (
                    <ShoppingCartOutlined
                        className={cx('icon')}
                        style={{ color: 'goldenrod', backgroundColor: 'rgba(218, 165, 32, 0.2)' }}
                    />
                ),
            };
            break;
        case 'earning':
            data = {
                title: 'EARNING',
                isMoney: true,
                link: 'View earning',
                icon: (
                    <MonetizationOnOutlined
                        className={cx('icon')}
                        style={{ color: 'green', backgroundColor: 'rgba(0, 128, 0, 0.2)' }}
                    />
                ),
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'View balance',
                icon: (
                    <AccountBalanceWalletOutlined
                        className={cx('icon')}
                        style={{ color: 'purple', backgroundColor: 'rgba(128, 0, 128, 0.2)' }}
                    />
                ),
            };
            break;
        default:
            break;
    }
    return (
        <div className={cx('widget')}>
            <div className={cx('left')}>
                <span className={cx('title')}>{data.title}</span>
                <span className={cx('count')}>{data.isMoney && '$'} 100</span>
                <span className={cx('link')}>{data.link}</span>
            </div>
            <div className={cx('right')}>
                <div className={cx('percentage')}>
                    <KeyboardArrowUp />
                    20%
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;
