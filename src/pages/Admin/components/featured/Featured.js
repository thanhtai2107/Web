import { MoreVert } from '@mui/icons-material';
import classNames from 'classnames/bind';
import { CircularProgressbar } from 'react-circular-progressbar';
import styles from '~/pages/Admin/components/featured/Featured.module.scss';
import 'react-circular-progressbar/dist/styles.css';

const cx = classNames.bind(styles);

function Featured() {
    return (
        <div className={cx('featured')}>
            <div className={cx('top')}>
                <h1 className={cx('title')}>Total Revenue</h1>
                <MoreVert fontSize="small" />
            </div>
            <div className={cx('bottom')}>
                <div className={cx('featuredChart')}>
                    <CircularProgressbar value={70} text="70%" />
                </div>
                <p className={cx('title')}>Total sale made today</p>
                <p className={cx('amount')}>$420</p>
                <p className={cx('desc')}>Previous transactions progessing. Last payments may not be included</p>
            </div>
        </div>
    );
}

export default Featured;
