import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '~/components/Blog/BlogCard.module.scss';

const cx = classNames.bind(styles);

function BlogCard(props) {
    return (
        <div className={cx('container')}>
            <img src={props.img} alt="blog-slide"></img>
            <div className={cx('content')}>
                <span>{props.date}</span>
                <h2>{props.title}</h2>
                <p>{props.discription}</p>
                <span>
                    Read more
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </div>
        </div>
    );
}

export default BlogCard;
