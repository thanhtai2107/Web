import styles from '~/components/Slider/Slider.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Slider({ children }) {
    const length = children.length;
    const [current, setCurrrent] = useState(0);
    const nextSlide = () => {
        setCurrrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div>
            <section className={cx('slider')}>
                <FontAwesomeIcon icon={faChevronCircleLeft} className={cx('turn-left')} onClick={prevSlide} />
                <FontAwesomeIcon icon={faChevronCircleRight} className={cx('turn-right')} onClick={nextSlide} />
                {children.map((slide, index) => {
                    return (
                        <div className={current === index ? cx('slide-active') : cx('slide-static')} key={index}>
                            {index === current && <img key={index} src={slide.image} alt="slide-img" />}
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default Slider;
