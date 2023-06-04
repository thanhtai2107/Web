// import React from 'react';
// import { Link } from 'react-router-dom';

// const Adidas = () => {
//   // Danh sách sản phẩm giày Nike
//   const products = [
//     { id: 1, name: 'Adidas', image: '~/pages/Product/GiayBongDa/Nike/image/Superfly.jpeg', price: 560000, salePrice: 480000 },
//     { id: 2, name: 'Adidas', image: 'anh.jpg', price: 470000, salePrice: 390000 },
//     { id: 3, name: 'Adidas', image: 'anh.jpg', price: 720000, salePrice: 670000 },
//     // Thêm các sản phẩm khác tương tự
//   ];

//   return (
//     <div>
//       <h2>Giày bóng đá Adidas</h2>
//       {products.map(product => (
//         <div key={product.id}>
//           <img src={product.image} alt={product.name} />
//           <p>{product.name}</p>
//           <p>Giá: {product.price} VNĐ</p>
//           {product.salePrice && (
//             <p>Giá khuyến mãi: {product.salePrice} VNĐ</p>
//           )}
//           <Link to="/cart">
//             <button>Thêm vào giỏ hàng</button>
//           </Link>
//           <Link to="/checkout">
//           <button>Mua ngay</button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Adidas;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Adidas.module.scss';
import { Button } from '@mui/material';

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Adidas = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/product/list'); //API
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className={styles.productsContainer}>
            <h2>Giày Adidas</h2>
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

export default Adidas;
