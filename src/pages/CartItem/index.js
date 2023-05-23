import React from 'react';
import styles from '~/pages/CartItem/CartItem.module.scss';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
    const { id, name, price, quantity } = item;

    const handleQuantityChange = (newQuantity) => {
        onUpdateQuantity(id, newQuantity);
    };

    return (
        <div className={styles.cartItem}>
            <div className={styles.productInfo}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>Giá: {price}</span>
                <div className={styles.quantity}>
                    <button onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                </div>
            </div>
            <button className={styles.removeButton} onClick={() => onRemove(id)}>
                Xóa
            </button>
        </div>
    );
};

export default CartItem;
