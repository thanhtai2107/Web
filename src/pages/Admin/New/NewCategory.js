import classNames from 'classnames/bind';
import styles from '~/pages/Admin/New/New.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { getAuthConfig } from '~/service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);
function NewCategory() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        setName('');

        try {
            const result = await axios.post('http://localhost:8080/api/v2/admin/category/add', formData, {
                ...getAuthConfig(),
                'Content-Type': 'multipart/form-data',
            });
            console.log(result.data);
            navigate('/admin/category');
        } catch (e) {
            console.error(' error create category ', e);
        }
    };
    return (
        <div className={cx('new')}>
            <SideBar />
            <div className={cx('newContainer')}>
                <Navbar />
                <div className={cx('top')}>
                    <h1>Add new category</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('right')}>
                        <form onSubmit={handleSubmit}>
                            <div className={cx('formInput')}>
                                <label>Category name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Category name"
                                />
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

export default NewCategory;
