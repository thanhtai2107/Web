import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const CancelOrder = () => {
    return (
        <div>
            <h2>Quý khách đã hủy đơn hàng thành công</h2>
            <Link to="/">
                {' '}
                <Button variant="contained" component="label">
                    Quay lại trang chủ
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
            </Link>
        </div>
        // </div>
    );
};

export default CancelOrder;
