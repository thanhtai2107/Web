import { faCartShopping, faMagnifyingGlass, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Navbar from '~/components/Navbar';
import { Link } from 'react-router-dom';
import { LogoutOutlined } from '@mui/icons-material';
import { logout } from '~/service';

const cx = classNames.bind(styles);

function Header() {
    const jwt = localStorage.getItem('token');
    return (
        <div className={cx('header')}>
            <div className={cx('header-top')}>
                <div className={cx('container')}>
                    <div className={cx('header-left')}>
                        <a className={cx('logo')}>NewStore</a>
                    </div>
                    <div className={cx('header-center')}>
                        <form>
                            <div className={cx('search')}>
                                <input placeholder="Tìm kiếm sản phẩm" />
                                <button>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={cx('header-right')}>
                        <div className={cx('header-right__item')}>
                            {jwt ? (
                                <Link>
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <p>Xin chao</p>
                                </Link>
                            ) : (
                                <Link to="/login">
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <p>Tài khoản</p>
                                </Link>
                            )}
                        </div>
                        <div className={cx('header-right__item')}>
                            <Link to="/cart">
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </div>
                                <p>Giỏ hàng</p>
                            </Link>
                        </div>
                        {jwt && (
                            <div className={cx('header-right__item')}>
                                <Link to="/login">
                                    <div className={cx('icon')}>
                                        <FontAwesomeIcon onClick={logout} icon={faSignOut} />
                                    </div>
                                    <p>Đăng xuất</p>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('header-bottom')}>
                <div className={cx('container')}>
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

export default Header;
