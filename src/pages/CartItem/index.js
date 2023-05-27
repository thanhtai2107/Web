import React from 'react';
import styles from '~/pages/CartItem/CartItem.module.scss';

const CartItem = ({ item, onRemove, onUpdateQuantity, index }) => {
    const { id, name, price, quantity, image } = item;

    const handleDecrease = () => {
        if (quantity > 1) {
            onUpdateQuantity(id, quantity - 1);
        }
    };

    return (
        <div className={styles.cartItem}>
            <span className={styles.itemIndex}>{index}</span>
            <img src={image} alt={name} className={styles.productImage} />
            <div className={styles.productInfo}>
                <h3>{name}</h3>
                <p>Giá: {price}</p>
                <div className={styles.quantityContainer}>
                    Số lượng:
                    <button onClick={handleDecrease}>-</button>
                    <input
                        type="number"
                        value={quantity}
                        min="1"
                        onChange={(e) => onUpdateQuantity(id, parseInt(e.target.value))}
                    />
                    <button onClick={() => onUpdateQuantity(id, quantity + 1)}>+</button>
                </div>
            </div>
            <button className={styles.removeButton} onClick={() => onRemove(id)}>
                Xóa
            </button>
        </div>
    );
};

export default CartItem;
