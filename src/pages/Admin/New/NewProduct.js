import classNames from 'classnames/bind';
import styles from '~/pages/Admin/New/New.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';

const cx = classNames.bind(styles);
function NewProduct() {
    const [file, setFile] = useState('');
    return (
        <div className={cx('new')}>
            <SideBar />
            <div className={cx('newContainer')}>
                <Navbar />
                <div className={cx('top')}>
                    <h1>Add new Product</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('left')}>
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                            }
                            alt=""
                        />
                    </div>
                    <div className={cx('right')}>
                        <form>
                            <div className={cx('formInput')}>
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlined className={cx('icon')} />
                                </label>
                                <input
                                    onChange={(e) => setFile(e.target.files[0])}
                                    type="file"
                                    id="file"
                                    style={{ display: 'none' }}
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Product name</label>
                                <input type="text" placeholder="Product name" />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Discription</label>
                                <input type="text" placeholder="Discription" />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Price</label>
                                <input type="text" placeholder="Price" />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Quantity</label>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Category</label>
                                <input type="text" placeholder="Category" />
                            </div>
                            <div className={cx('formInput')}>
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewProduct;
