import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckOut.module.scss';
import { Button } from '@mui/material';

const Checkout = () => {
    const [discountCode, setDiscountCode] = useState('');

    const handleDiscountCodeChange = (event) => {
        setDiscountCode(event.target.value);
    };

    const handleDiscountCodeSubmit = (event) => {
        event.preventDefault();
        // Xử lý mã giảm giá tại đây
    };

    return (
        <div className={styles['checkout-payment']}>
            <table>
                <tbody>
                    <tr>
                        <td className={styles['checkout-left']} width="50%">
                            <div className={styles['checkout-section']}>
                                <div className={styles['checkout-section-header']}>
                                    <h2 className={styles['checkout-section-title']}>Thông tin giao hàng</h2>
                                </div>
                                <div className={styles['checkout-section-text']}>
                                    <p className={styles['checkout-section-text-content']}>
                                        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
                                    </p>
                                </div>
                            </div>
                            <div className={styles['checkout-fieldset']}>
                                <input type="text" placeholder="Họ và tên" />
                                <input type="email" placeholder="Email" />
                                <input type="tel" placeholder="Số điện thoại" />
                                <textarea cols="50" rows="4" placeholder="Địa chỉ giao hàng"></textarea>
                            </div>
                            <div className={styles['checkout-section-shipping']}>
                                <div className={styles['checkout-shipping-header']}>
                                    <h3>Phương thức vận chuyển</h3>
                                </div>
                                <div className={styles['checkout-content-box']}>
                                    <input name="type-shipping" type="radio" value="Giao hàng tận nơi" id="shipping1" />
                                    <label htmlFor="shipping1" className={styles['radio-label']}>
                                        Giao hàng tận nơi
                                    </label>
                                </div>
                            </div>
                            <div className={styles['checkout-section-payments']}>
                                <div className={styles['checkout-payments-header']}>
                                    <h3>Hình thức thanh toán</h3>
                                </div>
                                <div className={styles['checkout-payments']}>
                                    <div className={styles['checkout-control-radio']}>
                                        <input
                                            name="choose"
                                            className={styles['checkout-control-radio-input']}
                                            type="radio"
                                            id="payment1"
                                        />
                                        <label htmlFor="payment1" className={styles['checkout-control-radio-label']}>
                                            Tiền mặt
                                        </label>
                                    </div>
                                    <div className={styles['checkout-control-radio']}>
                                        <input
                                            name="choose"
                                            className={styles['checkout-control-radio-input']}
                                            type="radio"
                                            id="payment2"
                                        />
                                        <label htmlFor="payment2" className={styles['checkout-control-radio-label']}>
                                            Chuyển khoản
                                        </label>
                                    </div>
                                    <div className={styles['checkout-control-radio']}>
                                        <input
                                            name="choose"
                                            className={styles['checkout-control-radio-input']}
                                            type="radio"
                                            id="payment3"
                                        />
                                        <label htmlFor="payment3" className={styles['checkout-control-radio-label']}>
                                            Ship code
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['checkout-section-footer']}>
                                <Link to="/orderconfirmation">
                                    <Button variant="contained" type="submit" className={styles['submit']}>
                                        <span className={styles['btn-next']}>Đặt hàng</span>
                                    </Button>
                                </Link>
                            </div>
                        </td>
                        <td className={styles['checkout-right']}>
                            <div className={styles['checkout-right-title']}>
                                <h2 className={styles['checkout-title']}>Thông tin đơn hàng</h2>
                            </div>
                            <div className={styles['checkout-product-info']}>
                                <table className={styles['checkout-info']}>
                                    <tbody>
                                        <tr>
                                            <td className={styles['checkout-image']}>
                                                <img
                                                    src="https://product.hstatic.net/1000061481/product/ed85f38ac15d4fcfbd6477f533aba3a9_a0cdb214bc67458dbe1fab058166e107_1024x1024.jpeg"
                                                    alt="Sản phẩm 1"
                                                    className={styles['checkout-img-responsive']}
                                                    style={{ width: '100px', height: '100px' }}
                                                />
                                            </td>
                                            <td className={styles['checkout-name']}>
                                                <span className={styles['checkout-product-name']}>
                                                    NIKE AIR ZOOM MERCURIAL SUPERFLY ELITE 9 FG XXV
                                                </span>
                                                <br />
                                                <span className={styles['checkout-product-quantity-size']}>
                                                    Size: 41
                                                </span>
                                            </td>
                                            <td className={styles['checkout-product-quantity']} aria-hidden="true">
                                                x1
                                            </td>
                                            <td className={styles['checkout-price']}>
                                                <span className={styles['checkout-product-price']}>349.000 VNĐ</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className={styles['checkout-discount']}>
                                    <table className={styles['checkout-discount-table']}>
                                        <tbody>
                                            <tr className={styles['checkout-discount-tr']}>
                                                <td>
                                                    <input
                                                        className={styles['checkout-field-input']}
                                                        type="text"
                                                        placeholder="Mã giảm giá"
                                                        value={discountCode}
                                                        onChange={handleDiscountCodeChange}
                                                    />
                                                </td>
                                                <td>
                                                    <button
                                                        type="submit"
                                                        className={styles['checkout-field-input-btn']}
                                                        onClick={handleDiscountCodeSubmit}
                                                    >
                                                        <span className={styles['checkout-btn-content']}>Xác nhận</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={styles['checkout-sum']}>
                                    <table className={styles['checkout-total']}>
                                        <tbody>
                                            <tr className={styles['checkout-total-subtotal']}>
                                                <td className={styles['checkout-total-name']}>Tạm tính: 619.000 VNĐ</td>
                                                <td className={styles['checkout-total-price']}>
                                                    {/* <span className={styles['checkout-total-value']}>619.000 VNĐ</span> */}
                                                </td>
                                            </tr>
                                            <tr className={styles['checkout-total-shipping']}>
                                                <td className={styles['checkout-total-name']}>
                                                    Phí vận chuyển: Miễn phí
                                                </td>
                                                {/* <td className={styles['checkout-total-price']}></td> */}
                                                {/* <span className={styles['checkout-total-value']}>15.000 VNĐ</span> */}

                                                <td className={styles['checkout-total-price']}>
                                                    {/* <span className={styles['checkout-total-value']}>-</span> */}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className={styles['checkout-bot']}>
                                    <table className={styles['checkout-footer-table']}>
                                        <tbody>
                                            <tr className={styles['checkout-total-footer']}>
                                                <td className={styles['checkout-total-name payment-label']}>
                                                    <span className={styles['checkout-payment']}>Tổng cộng: </span>
                                                </td>
                                                <td className={styles['checkout-total-name payment-due']}>
                                                    {/* <span className={styles['checkout-payment-due-currency']}>VND</span> */}
                                                    <span className={styles['checkout-payment-due-price']}>
                                                        619.000 VNĐ
                                                    </span>
                                                    <span className={styles['checkout_version']}></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;
