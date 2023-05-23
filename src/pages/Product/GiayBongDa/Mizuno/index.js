import React from 'react';
import { Link } from 'react-router-dom';

const Mizuno = () => {
  // Danh sách sản phẩm giày Nike
  const products = [
    { id: 1, name: 'Mizuno', image: '~/pages/Product/GiayBongDa/Nike/image/Superfly.jpeg', price: 560000, salePrice: 480000 },
    { id: 2, name: 'Mizuno', image: 'anh.jpg', price: 470000, salePrice: 390000 },
    { id: 3, name: 'Mizuno', image: 'anh.jpg', price: 720000, salePrice: 670000 },
    // Thêm các sản phẩm khác tương tự
  ];

  return (
    <div>
      <h2>Giày bóng đá Mizuno</h2>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
          <p>Giá: {product.price} VNĐ</p>
          {product.salePrice && (
            <p>Giá khuyến mãi: {product.salePrice} VNĐ</p>
          )}
          <Link to="/cart">
            <button>Thêm vào giỏ hàng</button>
          </Link>
          <Link to="/checkout">
          <button>Mua ngay</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Mizuno;
