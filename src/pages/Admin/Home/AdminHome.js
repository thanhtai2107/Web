import classNames from 'classnames/bind';
import styles from '~/pages/Admin/Home/AdminHome.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import Widget from '../components/widgets/Widget';
import Featured from '../components/featured/Featured';
import Chart from '../components/chart/Chart';
import Table from '../components/table/Table';

const cx = classNames.bind(styles);
function AdminHome() {
    return (
        <div className={cx('home')}>
            <SideBar />
            <div className={cx('homeContainer')}>
                <Navbar />
                <div className={cx('widgets')}>
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className={cx('charts')}>
                    <Featured />
                    <Chart />
                </div>
                <div className={cx('listContainer')}>
                    <div className={cx('listTitle')}>Lastest Transactions</div>
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default AdminHome;
