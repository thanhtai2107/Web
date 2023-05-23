import Slider from '~/components/Slider';
import { slides } from '~/components/Slider/SlideImg';
import styles from '~/pages/Home/Home.module.scss';
import classNames from 'classnames/bind';
import CardProduct from '~/components/CardProduct';
import { productItems } from '~/components/CardProduct/ProductItems';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div>
            <div className={cx('slider')}>
                <Slider>{slides}</Slider>
            </div>
            <div className={cx('product-contain')}>
                <h1>Our product</h1>
                <div className={cx('product-list')}>
                    <div className={cx('products')}>
                        {productItems.map((product) => {
                            return (
                                <CardProduct
                                    key={product.id}
                                    img={product.img}
                                    name={product.name}
                                    price={product.price}
                                    totalSale={product.totalSale}
                                />
                            );
                            
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Home;
