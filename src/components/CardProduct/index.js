import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '~/components/CardProduct/CardProduct.module.scss';

const cx = classNames.bind(styles);
function CardProduct(props) {
    return (
        <div className={cx('product-list')}>
            <div className={cx('product-card')} key={props.id}>
                <img src={props.img} alt="" className={cx('product-image')}></img>

                <FontAwesomeIcon className={cx('add-to-cart')} icon={faCartShopping} />
                <div className={cx('product-content')}>
                    <h3 className={cx('product-name')}>{props.name}</h3>

                    <div className={cx('display')}>
                        <div className={cx('price-price')}>{props.price}</div>
                        <div className={cx('price-sold')}>{props.totalSale}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;
