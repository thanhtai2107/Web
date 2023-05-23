import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nike.module.scss'; // Import CSS module styles
import { Button } from '@mui/material';

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Nike = () => {
    // Danh sách sản phẩm giày Nike
    const products = [
        {
            id: 1,
            name: 'Nike Air Mercurial Blast',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/1-01-01-01-02-01-01-01-01-02-01-01-01-01-01-01-01-01-01-02-01-02-02-01_81bde57062ae4825add0932d32f94842_1024x1024.jpg',
            price: 599000,
            salePrice: 479000,
        },
        {
            id: 2,
            name: 'Nike Mercurial Superfly',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/ed85f38ac15d4fcfbd6477f533aba3a9_a0cdb214bc67458dbe1fab058166e107_1024x1024.jpeg',
            price: 479000,
            salePrice: 349000,
        },
        {
            id: 3,
            name: 'Nike Tiempo Legend',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/anh_sp_add_web2312_2-02-02-02-02-01-01-01-01-01-01-01-02_6b2632dda91f45a9a6f4529ab0f9a028_1024x1024.jpg',
            price: 899000,
            salePrice: 699000,
        },
        // Thêm các sản phẩm khác tương tự
    ];

    return (
        <div className={styles.productsContainer}>
            <h2>Giày bóng đá Nike</h2>
            <div className={styles.productList}>
                {products.map((product) => (
                    <div key={product.id} className={styles.productItem}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
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

export default Nike;
