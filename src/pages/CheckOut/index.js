import React, { useState } from 'react';
import styles from '~/pages/CheckOut/CheckOut.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Checkout = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        paymentMethod: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý đơn hàng
        // ...
    };

    return (
        <div className={styles.checkout}>
            <h2>Form Thông tin Khách hàng</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Tên:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="address">Địa chỉ:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="paymentMethod">Phương thức thanh toán:</label>
                    <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">Chọn phương thức thanh toán</option>
                        <option value="creditCard">Thẻ tín dụng</option>
                        <option value="bankTransfer">Chuyển khoản ngân hàng</option>
                        <option value="eWallet">Ví điện tử</option>
                        <option value="cod">COD (thanh toán khi nhận hàng)</option>
                    </select>
                </div>
                {/* <div className={styles.confirmOrder}>
                    <button className={styles.confirmButton} onClick={handleSubmit}> */}
                {/* <Link to="/orderconfirmation">Xác nhận đơn hàng</Link> */}
                <Link to="/orderconfirmation">
                    {' '}
                    <Button variant="outlined">Xác nhận đơn hàng</Button>
                </Link>
                {/* <Button variant="outlined">Xác nhận đơn hàng</Button> */}
                {/* </button> */}
                {/* </div> */}
            </form>
        </div>
    );
};

export default Checkout;
