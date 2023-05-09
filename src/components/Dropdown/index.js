import classNames from 'classnames/bind';
import styles from './Dropdown.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Dropdown({ children }) {
    return (
        <div>
            <ul className={cx('dropdown')}>
                {children.map((subItem) => {
                    return (
                        <li key={subItem.id} className={cx(subItem.cName)}>
                            <Link to={subItem.path}>{subItem.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Dropdown;
