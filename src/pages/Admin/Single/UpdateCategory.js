import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from '~/pages/Admin/Single/Single.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { getAuthConfig } from '~/service';

const cx = classNames.bind(styles);
function UpdateCategory() {
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const [name, setName] = useState('');

    const loadCategory = async () => {
        try {
            const result = await axios.get(
                `http://localhost:8080/api/v2/admin/category/${categoryId}`,
                getAuthConfig(),
            );
            console.log(result.data);
            setName(result.data.name);
        } catch (e) {
            console.error('error', e);
        }
    };

    useEffect(() => {
        loadCategory();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);

        try {
            const result = await axios.put(
                `http://localhost:8080/api/v2/admin/category/update/${categoryId}`,
                formData,
                {
                    ...getAuthConfig(),
                    'Content-Type': 'multipart/form-data',
                },
            );
            console.log(result);
            navigate('/admin/category');
        } catch (e) {
            console.error('error update', e);
        }
    };
    return (
        <div className={cx('update')}>
            <SideBar />
            <div className={cx('updateContainer')}>
                <Navbar />
                <div className={cx('top')}>
                    <h1>Update Category</h1>
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

export default UpdateCategory;
