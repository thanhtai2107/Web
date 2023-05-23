import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '~/pages/BlogPage/BlogPage.module.scss';

const BlogPage = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Top 5 mẫu giày thể thao nổi bật năm 2023',
            date: '14/05/2023',
            content:
                'Chào mừng các bạn đến với trang blog của chúng tôi! Hôm nay, chúng tôi sẽ giới thiệu đến bạn danh sách những mẫu giày thể thao nổi bật nhất trong năm 2023...',
        },
        {
            id: 2,
            title: 'Cách chăm sóc và bảo quản giày thể thao',
            date: '20/05/2023',
            content: 'Để giày thể thao của bạn luôn mới và bền, hãy áp dụng những cách chăm sóc và bảo quản sau...',
        },
        {
            id: 3,
            title: 'Những xu hướng thiết kế giày thể thao mới nhất',
            date: '22/05/2023',
            content:
                'Trong năm nay, có nhiều xu hướng thiết kế giày thể thao độc đáo và sáng tạo đang được ưa chuộng...',
        },
        // Thêm các bài viết blog khác vào đây
    ];

    return (
        <div className="blog-page">
            <div className="blog-header">
                <h1 className="blog-title">Tin tức</h1>
            </div>
            <div className="blog-content">
                <TransitionGroup>
                    {blogPosts.map((post) => (
                        <CSSTransition key={post.id} timeout={500} classNames="fade">
                            <div className="blog-post">
                                <h2 className="blog-post-title">{post.title}</h2>
                                <p className="blog-post-date">{post.date}</p>
                                <p className="blog-post-content">{post.content}</p>
                                <hr className="blog-post-divider" />
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    );
};

export default BlogPage;
