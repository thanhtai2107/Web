import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Shoes.module.scss'; // Import CSS module styles
import { Button } from '@mui/material';

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Shoes = () => {
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
        {
            id: 10,
            name: 'ADIDAS COPA PURE .1 TF',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/gz5108_e72ccaa94e3d413baeb789899e6081f9_1024x1024.jpeg',
            price: 1290000,
            salePrice: 999000,
        },
        {
            id: 11,
            name: 'ADIDAS PREDATOR ACCURACY',
            imageUrl:
                'https:////product.hstatic.net/1000061481/product/f6251bd32be6_b210798c76024398bebce2853b3379af_1024x1024.jpeg',
            price: 1490000,
            salePrice: 1299000,
        },
        {
            id: 12,
            name: 'ADIDAS PREDATOR EDGE',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/d867274af0a6_f3af680233fb4f73834093a7204e6ea4_1024x1024.jpeg',
            price: 1590000,
            salePrice: 1390000,
        },
        {
            id: 13,
            name: 'MIZUNO ALPHA ELITE FG',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/1-01-01-01-01-02-01-01-01-01-02-01-01-01-01-01-01-01-01-01-02-01-02-02_e661adb0b83f4d9fb94ad3923fa8c52b_1024x1024.jpg',
            price: 2290000,
            salePrice: 1999000,
        },
        {
            id: 14,
            name: 'MIZUNO MONARCIDA NEO',
            imageUrl:
                'http://product.hstatic.net/1000061481/product/eb_221345-02-01-02-02-01-01-011-01-01-01-01-01-01-02-01-01-02-01-01-01_07e7b066632f4d1d8a6379606e3bff3b_1024x1024.jpg',
            price: 2190000,
            salePrice: 1890000,
        },
        {
            id: 15,
            name: 'MIZUNO MORELIA NEO II PRO FG ',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/anh_sp_add_web_p2-02-01-01-02-02-02-02-01-02-02-02-01-02-01-02-02_7b89d37461594e54b3dfd17ade21e315_1024x1024.jpg',
            price: 2890000,
            salePrice: 2499000,
        },
    ];

    return (
        <div className={styles.productsContainer}>
            <h2>Giày bóng đá tổng hợp</h2>
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

export default Shoes;
