import { Button } from '@mui/material';
import React, { useState } from 'react';
import styles from '~/pages/Cart/Cart.module.scss';
import CartItem from '~/pages/CartItem';
import { Link } from 'react-router-dom';

const formatCurrency = (value) => {
    return value.toLocaleString() + ' VNĐ';
};

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'NIKE AIR ZOOM MERCURIAL SUPERFLY ELITE 9 FG XXV',
            price: 619000,
            quantity: 1,
            image: 'https://product.hstatic.net/1000061481/product/ed85f38ac15d4fcfbd6477f533aba3a9_a0cdb214bc67458dbe1fab058166e107_1024x1024.jpeg',
        },
        // {
        //     id: 4,
        //     name: 'GRANDSPORT ÁO THI ĐẤU ĐT VIỆT NAM SÂN NHÀ 2023',
        //     price: 1390000,
        //     quantity: 1,
        //     image: 'https://product.hstatic.net/1000061481/product/screenshot_99_a1073bfe6c18453fbacad7ee9f3eb9d1_1024x1024.png',
        // },
        // {
        //     id: 7,
        //     name: 'BALO MINI SPORT',
        //     price: 99000,
        //     quantity: 1,
        //     image: 'https://product.hstatic.net/1000061481/product/nms05921282134-2_3f1ac62c313541fb936dcd4197b45899_1024x1024.jpg',
        // },
    ]);

    const removeItem = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
    };

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCartItems = cartItems.map((item) => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <div className={styles.cart}>
            <h1>Giỏ hàng</h1>
            {cartItems.map((item, index) => (
                <CartItem
                    key={item.id}
                    item={{
                        ...item,
                        price: formatCurrency(item.price),
                    }}
                    onRemove={removeItem}
                    onUpdateQuantity={updateQuantity}
                    index={index + 1} // Thêm số thứ tự tại đây
                />
            ))}
            <div className={styles.total}>
                <span>Tổng tiền:</span>
                <span>{formatCurrency(calculateTotal())}</span>
            </div>
            <div className={styles.buttonContainer}>
                <Link to="/">
                    <Button variant="contained">Tiếp tục mua hàng</Button>
                </Link>
            </div>
            <div className={styles.buttonContainer1}>
                <Link to="/checkout">
                    <Button variant="outlined">Thanh toán đơn hàng</Button>
                </Link>
            </div>
            <div className={styles.cancelButtonContainer}>
                <Link to="/">
                    <Button variant="outlined" color="error">
                        Quay lại
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
