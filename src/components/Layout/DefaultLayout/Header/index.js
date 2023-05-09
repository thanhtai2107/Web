import { faCartShopping, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Navbar from '~/components/Navbar';

const cx = classNames.bind(styles);

function Header() {
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
                            <a>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <p>Tài khoản</p>
                            </a>
                        </div>
                        <div className={cx('header-right__item')}>
                            <a>
                                <div className={cx('icon')}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </div>
                                <p>Giỏ hàng</p>
                            </a>
                        </div>
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
