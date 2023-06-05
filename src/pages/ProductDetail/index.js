import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductDetail.module.scss';
import { FaStar } from 'react-icons/fa';

const ProductDetail = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [promoPrice, setPromoPrice] = useState(0); // Thêm state cho giá khuyến mãi

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleRating = (value) => {
        setRating(value);
    };

    const handleHoverRating = (value) => {
        setHoverRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Thực hiện xử lý với dữ liệu của form
    };

    return (
        <>
            <div className={`${styles['small-container']} ${styles['single-product']}`}>
                <div className={styles['row']}>
                    <div className={styles['col-2']}>
                        <img
                            src="https://product.hstatic.net/1000061481/product/ed85f38ac15d4fcfbd6477f533aba3a9_a0cdb214bc67458dbe1fab058166e107_1024x1024.jpeg"
                            width="80%"
                            id="1"
                            alt="Product"
                        />
                    </div>
                    <div className={styles['col-2']} style={{ textAlign: 'left' }}>
                        <h2>NIKE AIR ZOOM MERCURIAL SUPERFLY ELITE 9 FG XXV</h2>
                        <h4>
                            Giá: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(799000)}
                        </h4>
                        <h4>
                            <span className={styles['promo-price']}>
                                Giá khuyến mãi:{' '}
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(619000)}
                            </span>
                        </h4>{' '}
                        {/* Hiển thị giá khuyến mãi */}
                        <select name="" id="">
                            <option value="">Lựa chọn size</option>
                            <option value="">38</option>
                            <option value="">39</option>
                            <option value="">40</option>
                            <option value="">41</option>
                            <option value="">42</option>
                            <option value="">43</option>
                            <option value="">44</option>
                        </select>
                        <div className={styles.quantityContainer}>
                            <input
                                type="number"
                                value={quantity}
                                min="1"
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                            />
                            <br />
                            <Link to="/checkout">
                                <button className={styles['btn']}>Mua ngay</button>
                            </Link>
                            <Link to="/cart">
                                <button className={styles['btn']}>Thêm vào giỏ hàng</button>
                            </Link>
                            <h3>
                                Chi tiết sản phẩm
                                <i className="fa fa-indent" />
                            </h3>
                            <p>
                                Thông số kỹ thuật:
                                <br />
                                Cầu thủ nổi tiếng đại diện: Kevin De Bruyne, Harry Kane và Mason Greendwood....
                                <br />
                                Form giày: Phù hợp form chân thon/chân bè.
                                <br />
                                Công nghệ: Cổ thun Flyknit, ACC (đá ở cả điều kiện ẩm ướt và khô ráo).
                                <br />
                                Kiểu dáng: Đế FG (cỏ tự nhiên).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['review-product']}>
                <h2>Đánh giá sản phẩm</h2>{' '}
                <div className={styles['review-product__container']}>
                    {' '}
                    <div id="myDropdown" className={styles['review-product__form']}>
                        {' '}
                        <form id="form" onSubmit={handleSubmit}>
                            {' '}
                            <div className={styles['form-group']}>
                                <label htmlFor="name">Tên</label>{' '}
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Tên của bạn"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email của bạn"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className={styles['form-group']}>
                                <label>Đánh giá</label>
                                <div className={styles['rating-stars-horizontal']}>
                                    {[...Array(5)].map((_, index) => {
                                        const starValue = index + 1;
                                        return (
                                            <label key={index}>
                                                <input
                                                    type="radio"
                                                    name="rating"
                                                    value={starValue}
                                                    onClick={() => handleRating(starValue)}
                                                />
                                                <FaStar
                                                    className={styles['star']}
                                                    color={starValue <= (hoverRating || rating) ? '#ffc107' : '#e4e5e9'}
                                                    onMouseEnter={() => handleHoverRating(starValue)}
                                                    onMouseLeave={() => handleHoverRating(0)}
                                                />
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className={styles['form-group']}>
                                <label htmlFor="content">Nội dung</label>
                                <textarea
                                    id="content"
                                    cols="60"
                                    rows="8"
                                    placeholder="Nội dung nhận xét của bạn"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>
                            <button id="send-review" type="submit">
                                Gửi đánh giá
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles['small-container']}>
                <div className={`${styles['row']} ${styles['row-2']}`}>
                    <h2>Sản phẩm liên quan</h2>
                </div>
            </div>

            <div className={styles['small-container']}>
                <div className={styles['row']}>
                    <div className={styles['col-4']}>
                        <img
                            src="http://product.hstatic.net/1000061481/product/fba0ad8effda_476134815606435f933d8df38f88c897_1024x1024.jpeg"
                            alt=""
                        />
                        <h4>NIKE PHANTOM GT 2 ACADEMY</h4>
                        <div className={styles['rating']}>
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#e4e5e9" />
                            <FaStar className={styles['star']} color="#e4e5e9" />
                        </div>
                        <p>
                            Giá:{' '}
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2100000)}
                            <br />
                            <span className={styles['promo-price']}>
                                Giá khuyến mãi:{' '}
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(1900000)}
                            </span>
                        </p>
                    </div>
                    <div className={styles['col-4']}>
                        <img
                            src="http://product.hstatic.net/1000061481/product/anh_sp_add_web_joma-02-02-02-01-01_db9bebe9a7044453b1e756337d74a28f_1024x1024.jpg"
                            alt=""
                        />
                        <h4>NIKE PHANTOM GX ACADEMY</h4>
                        <div className={styles['rating']}>
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#e4e5e9" />
                        </div>
                        <p>
                            Giá:{' '}
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2250000)}
                            <br />
                            <span className={styles['promo-price']}>
                                Giá khuyến mãi:{' '}
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2000000)}
                            </span>
                        </p>
                    </div>
                    <div className={styles['col-4']}>
                        <img
                            src="http://product.hstatic.net/1000061481/product/0c44bcf90c18d6468f09_ec75bfed77ec417791b8db718206bb8a_1024x1024.jpg"
                            alt=""
                        />
                        <h4>NIKE REACT PHANTOM GX PRO</h4>
                        <div className={styles['rating']}>
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#e4e5e9" />
                            <FaStar className={styles['star']} color="#e4e5e9" />
                        </div>
                        <p>
                            Giá:{' '}
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2800000)}
                            <br />
                            <span className={styles['promo-price']}>
                                Giá khuyến mãi:{' '}
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(2600000)}
                            </span>
                        </p>
                    </div>
                    <div className={styles['col-4']}>
                        <img
                            src="http://product.hstatic.net/1000061481/product/9cb1b416a82142b381fd353e9b199acf_e16276275c4b4ba3a315f9d452a254cd_1024x1024.jpeg"
                            alt=""
                        />
                        <h4>NIKE PHANTOM GT 2 PRO</h4>
                        <div className={styles['rating']}>
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#ffc107" />
                            <FaStar className={styles['star']} color="#e4e5e9" />
                        </div>
                        <p>
                            Giá:{' '}
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(3300000)}
                            <br />
                            <span className={styles['promo-price']}>
                                Giá khuyến mãi:{' '}
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(3100000)}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
