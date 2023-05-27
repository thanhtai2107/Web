import classNames from 'classnames/bind';
import styles from '~/pages/Admin/List/List.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import UserTable from '../components/datatable/UserDataTable';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function List() {
    return (
        <div className={cx('list')}>
            <SideBar />
            <div className={cx('listContainer')}>
                <Navbar />
                <Link to="/admin/user/new">
                    <Button variant="contained" className={cx('addButton')}>
                        Add User
                    </Button>
                </Link>
                <UserTable />
            </div>
        </div>
    );
}

export default List;
