import React from 'react';
import { useSpring, animated } from 'react-spring';
import './BlogPost.module.scss';

const BlogPost = ({ title, image, content, date }) => {
    const fadeInAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500,
    });

    return (
        <animated.article style={fadeInAnimation}>
            <h2>{title}</h2>
            <img src={image} alt="Hình ảnh bài viết" />
            <p>{content}</p>
            <div className="date-time">
                Ngày đăng: <span className="date">{date}</span>
            </div>
        </animated.article>
    );
};

export default BlogPost;
