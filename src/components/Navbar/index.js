import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import classNames from 'classnames/bind';
import { navItems } from './NavItems';
import { shoesItems } from './NavItems';
import Dropdown from '../Dropdown';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    return (
        <>
            <nav className={cx('navbar')}>
                <ul className={cx('navbar-items')}>
                    {navItems.map((item) => {
                        if (item.title === 'Giày bóng đá') {
                            return (
                                <li
                                    key={item.id}
                                    className={cx(item.cName)}
                                    onMouseEnter={() => setDropdown(true)}
                                    onMouseLeave={() => setDropdown(false)}
                                >
                                    <Link to={item.path}>{item.title}</Link>
                                    {dropdown && <Dropdown>{shoesItems}</Dropdown>}
                                </li>
                            );
                        }
                        return (
                            <li key={item.id} className={cx(item.cName)}>
                                <Link to={item.path}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
