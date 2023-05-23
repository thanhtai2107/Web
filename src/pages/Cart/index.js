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
        { id: 1, name: 'Sản phẩm 1', price: 190000, quantity: 2 },
        { id: 2, name: 'Sản phẩm 2', price: 150000, quantity: 1 },
        { id: 3, name: 'Sản phẩm 3', price: 220000, quantity: 3 },
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
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={{
                        ...item,
                        price: formatCurrency(item.price),
                    }}
                    onRemove={removeItem}
                    onUpdateQuantity={updateQuantity}
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
                        Hủy đơn
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
