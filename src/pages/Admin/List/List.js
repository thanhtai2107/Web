import classNames from 'classnames/bind';
import styles from '~/pages/Admin/List/List.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import DataTable from '../components/datatable/DataTable';

const cx = classNames.bind(styles);

function List() {
    return (
        <div className={cx('list')}>
            <SideBar />
            <div className={cx('listContainer')}>
                <Navbar />
                <DataTable />
            </div>
        </div>
    );
}

export default List;
