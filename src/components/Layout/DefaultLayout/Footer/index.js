import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('container')}>
                <div className={cx('column')}>
                    <div className={cx('footer-logo')}>
                        <a className={cx('logo')}>NewStore</a>
                    </div>
                    <p>Được thành lập từ 2023, Mang sứ mệnh đa dạng các sản phẩm chất lượng đến với khách hàng</p>
                    <ul>
                        <li>
                            <div className={cx('logo-address')}>
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <span>Khu phố 6, phường Linh Trung</span>
                        </li>

                        <li>
                            <div className={cx('logo-address')}>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <span>+ 841234567</span>
                        </li>

                        <li>
                            <div className={cx('logo-address')}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <span>exam@gmail.com</span>
                        </li>
                    </ul>
                </div>
                <div className={cx('column')}>
                    <h2 className={cx('footer-title')}>Công ty</h2>
                    <ul>
                        <li>
                            <span>Về chúng tôi</span>
                        </li>

                        <li>
                            <span>Blog</span>
                        </li>

                        <li>
                            <span>Tất cả sản sản phẩm</span>
                        </li>
                        <li>
                            <span>Liên hệ chúng tôi</span>
                        </li>
                    </ul>
                </div>
                <div className={cx('column')}>
                    <h2 className={cx('footer-title')}>Dịch vụ</h2>
                    <ul>
                        <li>
                            <span>Giỏ hàng</span>
                        </li>

                        <li>
                            <span>Tài khoản</span>
                        </li>

                        <li>
                            <span>Chính sách</span>
                        </li>
                        <li>
                            <span>Liên hệ chúng tôi</span>
                        </li>
                    </ul>
                </div>
                <div className={cx('column')}>
                    <h2 className={cx('footer-title')}>Chăm sóc khách hàng</h2>
                    <ul>
                        <li>
                            <span>Giỏ hàng</span>
                        </li>

                        <li>
                            <span>Tài khoản</span>
                        </li>

                        <li>
                            <span>Chính sách</span>
                        </li>
                        <li>
                            <span>Liên hệ chúng tôi</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
