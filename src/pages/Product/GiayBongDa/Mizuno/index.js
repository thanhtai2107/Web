import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Mizuno.module.scss';
import { Button } from '@mui/material';
import axios from 'axios';

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Mizuno = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [mizuno, setMizuno] = useState([]);

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        try {
            const result = await axios.get('http://localhost:8080/category/list');
            setCategory(result.data);
        } catch (error) {
            console.log('Error fetching category:', error);
        }
    };

    useEffect(() => {
        if (category.length > 0) {
            setMizuno(category[1].products);
        }
    }, [category]);

    return (
        <div className={styles.productsContainer}>
            <h2>Mizuno</h2>
            <div className={styles.productList}>
                {mizuno.map((product) => (
                    <div key={product.id} className={styles.productItem}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name} className={styles.productImage} />
                            <p className={styles.productName}>{product.name}</p>
                            <p className={styles.productPrice}>Giá: {formatCurrency(product.price)} VNĐ</p>
                            {product.salePrice && (
                                <p className={styles.productSalePrice}>
                                    Giá khuyến mãi: {formatCurrency(product.salePrice)} VNĐ
                                </p>
                            )}
                        </Link>
                        <div className={styles.productButtons}>
                            <Link to="/cart">
                                <Button variant="contained">Thêm vào giỏ hàng</Button>
                            </Link>
                            <Link to="/checkout">
                                <Button variant="contained">Mua ngay</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mizuno;
