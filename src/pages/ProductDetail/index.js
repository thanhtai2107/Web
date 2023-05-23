import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProductDetail.module.scss';
import { Button } from '@mui/material';

const formatCurrency = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const products = [
    {
        id: 1,
        name: 'Nike Air Mercurial Blast',
        imageUrls: [
            'https://product.hstatic.net/1000061481/product/1-01-01-01-02-01-01-01-01-02-01-01-01-01-01-01-01-01-01-02-01-02-02-01_81bde57062ae4825add0932d32f94842_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms03732_81859298d28f4ce491013288fcebd417_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms03736_d218fc1e4b484ccb8cf78a5404fbfda7_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms03733_83e19b2ad3754e47b643396b587bd9f8_1024x1024.jpg',
            'https://product.hstatic.net/1000061481/product/nms03731_b1d5067c2792476b8237bdaa5c461023_1024x1024.jpg',
        ],
        price: 599000,
        salePrice: 479000,
        description:
            '"MDS - MERCURIAL DREAM SPEED" - bộ sưu tập dành cho các cầu thủ chạy nhanh nhất thế giới đã cho ra mắt gam màu tiếp theo. Đây đã là Chapter 6 của bộ sưu tập này, Và phối màu Nike chọn lần này là Cobalt Bliss/Black/Punch Chaud rất phù hợp với ngày lễ tình nhân Valentine 14/2 sắp đến gần.',
        brand: 'Nike',
        sizes: ['39', '40', '41', '42', '43'],
        colors: ['Trắng', 'Đen', 'Hồng'],
        rating: 4.5,
    },
    // ...
];

const getProductById = (productId) => {
    return products.find((product) => product.id === Number(productId));
};

const ProductDetail = () => {
    const { productId } = useParams();
    const product = getProductById(productId);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === product.imageUrls.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [product.imageUrls]);

    if (!product) {
        return <p>Không tìm thấy sản phẩm</p>;
    }

    return (
        <div className={styles.productDetailContainer}>
            <div className={styles.productImages}>
                <img
                    src={product.imageUrls[currentImageIndex]}
                    alt={`Chi tiết ${currentImageIndex + 1}`}
                    className={styles.mainImage}
                />
            </div>
            <div className={styles.productImages}>
                <div className={styles.smallImages}>
                    {product.imageUrls.map((image, index) => (
                        <img key={index} src={image} alt={`Chi tiết ${index + 1}`} className={styles.smallImage} />
                    ))}
                </div>
            </div>
            <div className={styles.productInfo}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className={styles.productOptions}>
                    <div className={styles.sizeSelector}>
                        <label htmlFor="size">Kích thước:</label>
                        <select id="size" value={selectedSize} onChange={handleSizeChange}>
                            {product.sizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.colorSelector}>
                        <label htmlFor="color">Màu sắc:</label>
                        <select id="color" value={selectedColor} onChange={handleColorChange}>
                            {product.colors.map((color) => (
                                <option key={color} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.productButtons}>
                    <Link to="/cart">
                        <Button variant="contained">Thêm vào giỏ hàng</Button>
                    </Link>
                    <Link to="/checkout">
                        <Button variant="contained">Mua ngay</Button>
                    </Link>
                </div>
            </div>
            <div className={styles.productPrice}>
                <span>Giá: {formatCurrency(product.price)} VNĐ</span>
                {product.salePrice && <span className="salePrice">{formatCurrency(product.salePrice)} VNĐ</span>}
            </div>
            <div className={styles.productReview}>
                <h3>Đánh giá và nhận xét</h3>
                {/* Hiển thị danh sách đánh giá và nhận xét */}
            </div>
            <div className={styles.relatedProducts}>
                <h3>Sản phẩm liên quan</h3>
                {/* Hiển thị các sản phẩm liên quan */}
            </div>
        </div>
    );
};

export default ProductDetail;
