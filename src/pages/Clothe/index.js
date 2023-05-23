import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './Clothe.module.scss';

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Clothe = () => {
    // Danh sách sản phẩm Equipment
    const products = [
        {
            id: 4,
            name: 'GRANDSPORT ÁO THI ĐẤU ĐT VIỆT NAM SÂN NHÀ 2023',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/screenshot_99_a1073bfe6c18453fbacad7ee9f3eb9d1_1024x1024.png',
            price: 1590000,
            salePrice: 1390000,
        },
        {
            id: 5,
            name: 'ÁO BÓNG ĐÁ CHÍNH HÃNG MANCHESTER UNITED THỨ 3 2022/23',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/73526836476e4e9c8e63e1f6edaba3fe_88450ce777f441868246b5694d33e3c0_1024x1024.jpeg',
            price: 1790000,
            salePrice: 1590000,
        },
        {
            id: 6,
            name: 'ÁO BÓNG ĐÁ CHÍNH HÃNG CHELSEA SÂN KHÁCH 2022/23',
            imageUrl:
                'https://product.hstatic.net/1000061481/product/a4213aef9dee40c992555abe899bf056_1e4e7d3162b2461a85536f8f281e5cb8_1024x1024.jpg',
            price: 1790000,
            salePrice: 1590000,
        },
        // Thêm các sản phẩm khác tương tự
    ];

    return (
        <div className={styles.productsContainer}>
            <h2>Quần, áo đá bóng chính hãng: </h2>
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

export default Clothe;
