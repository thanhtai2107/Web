import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '~/components/Blog/Blog.module.scss';
import classNames from 'classnames/bind';
import { blogItems } from './BlogItem';
import BlogCard from '~/components/Blog/BlogCard';

const cx = classNames.bind(styles);
function Blog() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className={cx('container')}>
            <Carousel responsive={responsive}>
                {blogItems.map((blog) => {
                    return (
                        <div key={blog.id} className={cx('blog-card')}>
                            <BlogCard
                                img={blog.img}
                                title={blog.title}
                                discription={blog.discription}
                                date={blog.date}
                            />
                        </div>
                    );
                })}
            </Carousel>
            ;
        </div>
    );
}

export default Blog;
