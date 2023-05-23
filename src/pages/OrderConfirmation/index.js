import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Styles } from '~/pages/OrderConfirmation/OrderConfirmation.module.scss';

const OrderConfirmation = () => {
    const [cancelReason, setCancelReason] = useState('');

    const handleCancelReasonChange = (event) => {
        setCancelReason(event.target.value);
    };

    const handleCancelOrder = () => {
        // Xử lý hủy đơn hàng
        console.log('Đơn hàng đã bị hủy với lý do:', cancelReason);
    };

    return (
        <div>
            <h1>Đặt hàng thành công!</h1>
            <p>Cảm ơn quý khách đã đặt hàng.</p>
            <Link to="/cancelorder">
                <button onClick={handleCancelOrder}>Hủy đơn hàng</button>
            </Link>
            <select value={cancelReason} onChange={handleCancelReasonChange}>
                <option value="">Lý do hủy</option>
                <option value="Thay đổi địa chỉ">Thay đổi địa chỉ</option>
                <option value="Phí vận chuyển cao">Phí vận chuyển cao</option>
                <option value="Thay đổi phương thức thanh toán">Thay đổi phương thức thanh toán</option>
                <option value="Lý do khác">Lý do khác</option>
            </select>
            {cancelReason === 'Lý do khác' && <input type="text" placeholder="Lý do khác" />}
        </div>
    );
};

export default OrderConfirmation;
