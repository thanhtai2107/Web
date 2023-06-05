// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './Nike.module.scss';
// import { Button } from '@mui/material';
// import axios from 'axios';

// const formatCurrency = (value) => {
//     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
// };

// const Nike = () => {
//     const [products, setProducts] = useState([]);
//     const [category, setCategory] = useState([]);
//     const [nike, setNike] = useState([]);
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         loadCategory();
//     }, []);

//     const loadCategory = async () => {
//         try {
//             const result = await axios.get('http://localhost:8080/category/list');
//             setCategory(result.data);
//         } catch (error) {
//             console.log('Error fetching category:', error);
//         }
//     };

//     useEffect(() => {
//         if (category.length > 0) {
//             setNike(category[2].products);
//         }
//     }, [category]);

//     const addToCart = (products) => {
//         setCartItems([...cartItems, products]);
//     };
//     console.log(cartItems);

//     return (
//         <div className={styles.productsContainer}>
//             <h2>Nike</h2>
//             <div className={styles.productList}>
//                 {nike.map((products) => (
//                     <div key={products.id} className={styles.productItem}>
//                         <Link to={`/product/${products.id}`}>
//                             <img src={products.image} alt={products.name} className={styles.productImage} />
//                             <p className={styles.productName}>{products.name}</p>
//                             <p className={styles.productPrice}>Giá: {formatCurrency(products.price)} VNĐ</p>
//                             {products.salePrice && (
//                                 <p className={styles.productSalePrice}>
//                                     Giá khuyến mãi: {formatCurrency(products.salePrice)} VNĐ
//                                 </p>
//                             )}
//                         </Link>
//                         <div className={styles.productButtons}>
//                             <Button variant="contained" onClick={() => addToCart(products)}>
//                                 Thêm vào giỏ hàng
//                             </Button>
//                             <Link to="/checkout">
//                                 <Button variant="contained">Mua ngay</Button>
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Nike;

import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nike.module.scss';
import { Button, Snackbar } from '@mui/material';
import axios from 'axios';
import { CartContext } from '~/pages/CartContext';
import { getAuthConfig } from '~/service';

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Nike = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [nike, setNike] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const { cartItems, setCartItems } = useContext(CartContext);
    const quantity = 1;
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        try {
            const result = await axios.get('http://localhost:8080/category/list');
            setCategory(result.data);
            setNike(result.data[2].products);
        } catch (error) {
            console.log('Error fetching category:', error);
        }
    };

    useEffect(() => {
        if (category.length > 0) {
            setNike(category[2].products);
        }
    }, [category]);

    const handleAddToCart = async (id) => {
        // const updatedCartItems = [...cartItems, product];
        // setCartItems(updatedCartItems);
        // setSuccessMessage(`Đã thêm sản phẩm "${product.name}" vào giỏ hàng`);
        // setOpenSnackbar(true);
        // console.log(cartItems);
        const formData = new FormData();
        formData.append('productId', id);
        formData.append('userId', userId);
        formData.append('quantity', quantity);
        const result = await axios('http://localhost:8080/api/cart/add', formData, {
            ...getAuthConfig(),
            'Content-Type': 'multipart/form-data',
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className={styles.productsContainer}>
            <h2>Nike</h2>
            <div className={styles.productList}>
                {nike.map((product) => (
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
                            <Button variant="contained" onClick={() => handleAddToCart(product.id)}>
                                Thêm vào giỏ hàng
                            </Button>
                            <Link to="/checkout">
                                {' '}
                                <Button variant="contained">Mua ngay</Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={successMessage}
            />
        </div>
    );
};

export default Nike;
