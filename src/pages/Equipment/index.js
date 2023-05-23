import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './Equipment.module.scss';

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Equipment = () => {
    // Danh sách sản phẩm Equipment
    const products = [
        {
            id: 7,
            name: 'BALO MINI SPORT',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/nms05921282134-2_3f1ac62c313541fb936dcd4197b45899_1024x1024.jpg',
            price: 139000,
            salePrice: 99000,
        },
        {
            id: 8,
            name: 'TÚI ĐEO CHÉO ĐỰNG GIÀY SPORT Q1/2023',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/b0385caddbbb02e55baa_d6f1c9f8676648f4ac1914daf4249d38_1024x1024.jpg',
            price: 159000,
            salePrice: 129000,
        },
        {
            id: 9,
            name: 'TÚI GYMSACK NIKE VSN "EUPHORIA',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/amic-fit-football-boot-90r53f_2ca75d4c295b4bbea300bc6c5af70a83_grande1_168b76ff6ca448feb155c57290b9dd50_1024x1024.jpg',
            price: 119000,
            salePrice: 99000,
        },
        // Thêm các sản phẩm khác tương tự
    ];

    return (
        <div className={styles.productsContainer}>
            <h2>Phụ kiện: </h2>
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

export default Equipment;
