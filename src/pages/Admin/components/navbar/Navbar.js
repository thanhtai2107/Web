import {
    ChatBubbleOutlineOutlined,
    DarkModeOutlined,
    FullscreenExitOutlined,
    LanguageOutlined,
    ListOutlined,
    NotificationAddOutlined,
    Search,
} from '@mui/icons-material';
import classNames from 'classnames/bind';
import styles from '~/pages/Admin/components/navbar/Navbar.module.scss';

const cx = classNames.bind(styles);
function Navbar() {
    return (
        <div className={cx('navbar')}>
            <div className={cx('wrapper')}>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search..." />
                    <Search />
                </div>
                <div className={cx('items')}>
                    <div className={cx('item')}>
                        <LanguageOutlined className={cx('icon')} />
                        English
                    </div>
                    <div className={cx('item')}>
                        <DarkModeOutlined className={cx('icon')} />
                    </div>
                    <div className={cx('item')}>
                        <FullscreenExitOutlined className={cx('icon')} />
                    </div>
                    <div className={cx('item')}>
                        <NotificationAddOutlined className={cx('icon')} />
                        <div className={cx('counter')}>1</div>
                    </div>
                    <div className={cx('item')}>
                        <ChatBubbleOutlineOutlined className={cx('icon')} />
                        <div className={cx('counter')}>2</div>
                    </div>
                    <div className={cx('item')}>
                        <ListOutlined className={cx('icon')} />
                    </div>
                    <div className={cx('item')}>
                        <img
                            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.6435-9/133116988_1078712192592101_3962054394413320279_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mI1zmzLZj68AX8v-PFO&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfBrFs_65uDj_M7h8MfV3OOz_HSKKHFseYxxaiGB7wJ7jA&oe=6486E9D5"
                            alt=""
                            className={cx('avatar')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
