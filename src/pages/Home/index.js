import Slider from '~/components/Slider';
import { slides } from '~/components/Slider/SlideImg';
import styles from '~/pages/Home/Home.module.scss';
import classNames from 'classnames/bind';
import CardProduct from '~/components/CardProduct';
import { productItems } from '~/components/CardProduct/ProductItems';
import Blog from '~/components/Blog';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div>
            <div className={cx('slider')}>
                <Slider>{slides}</Slider>
            </div>
            <div className={cx('product-container')}>
                <h1>Top sale</h1>
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

            <div className={cx('blog-container')}>
                <Blog />
            </div>
        </div>
    );
    
}

export default Home;
