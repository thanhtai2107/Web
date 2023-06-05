import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from '~/pages/Admin/Single/Single.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { getAuthConfig } from '~/service';

const cx = classNames.bind(styles);
function UpdateProduct() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [file, setFile] = useState('');
    const [img, setImg] = useState('');
    const [categorySelected, setCategorySelected] = useState('');
    const [categorys, setCategorys] = useState([]);
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [discription, setDiscription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const loadProduct = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/v2/admin/product/${productId}`, getAuthConfig());
            console.log(result.data);
            setName(result.data.name);
            setDiscription(result.data.discription);
            setImg(result.data.image);
            setPrice(result.data.price);
            setQuantity(result.data.quantity);
            setCategory(result.data.category.name);
            setCategorySelected(result.data.category.name);
        } catch (e) {
            console.error('error', e);
        }
    };
    const loadCategory = async () => {
        const result = await axios.get('http://localhost:8080/category/list');
        setCategorys(result.data);
    };
    useEffect(() => {
        loadProduct();
        loadCategory();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('discription', discription);
        formData.append('price', price);
        formData.append('quantity', quantity);
        formData.append('category', categorySelected);

        try {
            const result = await axios.put(`http://localhost:8080/api/v2/admin/product/update/${productId}`, formData, {
                ...getAuthConfig(),
                'Content-Type': 'multipart/form-data',
            });
            console.log(result);
            navigate('/admin/product');
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
                    <h1>Update Product</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('left')}>
                        <img src={img} alt="" />
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
                                    placeholder="Quantity"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Category</label>
                                <select defaultChecked={category} onChange={(e) => setCategorySelected(e.target.value)}>
                                    <option>--Select Category--</option>
                                    {categorys.map((category, index) => {
                                        return (
                                            <option key={index} selected={category === category ? 'selected' : ''}>
                                                {category.name}
                                            </option>
                                        );
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

export default UpdateProduct;
