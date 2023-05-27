import classNames from 'classnames/bind';
import styles from '~/pages/Admin/List/List.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import { Button } from '@mui/material';
import ProductTable from '../components/datatable/ProductDataTable';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function ProductList() {
    return (
        <div className={cx('list')}>
            <SideBar />
            <div className={cx('listContainer')}>
                <Navbar />
                <Link to="/admin/product/new">
                    <Button variant="contained" className={cx('addButton')}>
                        Add Product
                    </Button>
                </Link>
                <ProductTable />
            </div>
        </div>
    );
}

export default ProductList;
