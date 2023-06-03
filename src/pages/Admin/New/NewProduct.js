import classNames from 'classnames/bind';
import styles from '~/pages/Admin/New/New.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAuthConfig } from '~/service';
import { Navigate, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function NewProduct() {
    const navigate = useNavigate();
    const [file, setFile] = useState('');
    const [categorySelected, setCategorySelected] = useState('');
    const [categorys, setCategorys] = useState([]);
    const [name, setName] = useState('');
    const [discription, setDiscription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    console.log(categorySelected);
    useEffect(() => {
        loadCategory();
    }, []);
    const loadCategory = async () => {
        const result = await axios.get('http://localhost:8080/category/list');
        console.log(result.data);
        setCategorys(result.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('discription', discription);
        formData.append('price', price);
        formData.append('file', file);
        formData.append('category', categorySelected);
        formData.append('quantity', quantity);
        setName('');
        setDiscription('');
        setFile('');
        setCategorySelected('');
        setPrice('');
        setQuantity('');
        try {
            const result = await axios.post('http://localhost:8080/api/v2/admin/product/add', formData, {
                ...getAuthConfig(),
                'Content-Type': 'multipart/form-data',
            });
            console.log(result.data);
            navigate('/admin/product');
        } catch (e) {
            console.error(' error create product ', e);
        }
    };
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
                        <form onSubmit={handleSubmit}>
                            <div className={cx('formInput')}>
                                <label htmlFor="file">Image:</label>
                                <input onChange={(e) => setFile(e.target.files[0])} type="file" id="file" />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Product name</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    placeholder="Product name"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Discription</label>
                                <input
                                    value={discription}
                                    onChange={(e) => setDiscription(e.target.value)}
                                    type="text"
                                    placeholder="Discription"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Price</label>
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="text"
                                    placeholder="Price"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Quantity</label>
                                <input
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Category</label>
                                <select onChange={(e) => setCategorySelected(e.target.value)}>
                                    <option>--Select Category--</option>
                                    {categorys.map((category, index) => {
                                        return <option key={index}>{category.name}</option>;
                                    })}
                                </select>
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
