import React from 'react';
import BlogPost from '~/pages/BlogPost';
import styles from './Blog.module.scss';

const Blog = () => {
    return (
        <div className={styles.blog}>
            <header>
                <h1>Blog của tôi</h1>
            </header>

            <main>
                <BlogPost
                    className={styles['blog-post']}
                    title="NIKE CHÍNH THỨC RA MẮT ÁO ĐẤU SÂN NHÀ CLB PARIS SAINT-GERMAIN PSG 23/24"
                    image="http://file.hstatic.net/1000061481/file/psg-1-min_b930901784ee42eebd18c03fd332bf32_master.jpg"
                    content="Với một thiết kế mang đậm chất cổ điển lấy nguồn cảm hứng từ thập kỷ 00, Nike đã cho ra mắt áo đấu sân nhà cho CLB Paris Saint-Germain (PSG) 23/24, được dự kiến sẽ được ra mắt trong trận đấu cuối cùng tại sân nhà mùa giải này với đối thủ Clermont Foot. Sau khi chính thức giành được chức vô địch Ligue 1 lần thứ 11 vào cuối tuần trước, câu lạc bộ Paris Saint-Germain có thể tự tin dành một vài ngày để nghỉ ngơi và kỳ vọng cao vào kết quả tốt nhất trong trận đấu tiếp theo. Để hỗ trợ cho màn ra sân đầy ấn tượng hơn, nhà sản xuất thiết kế áo của CLB Pháp - Nike chính thức trình làng áo đấu sân nhà mới cho mùa giải 23/24. "
                    date="05/23/2023"
                />
                <BlogPost
                    className={styles['blog-post']}
                    title="RÒ RỈ HÌNH ẢNH PHIÊN BẢN GIÀY ĐÁ BANH GIỚI HẠN MANG ĐẬM DẤU ẤN CỦA HAALAND"
                    image="http://file.hstatic.net/1000061481/file/nike_phantom_gx_haaland_8f35911ca66c4b89beadc25b66dc9845_master.jpg"
                    content="Thiết kế của đôi giày này đã tạo ra sự kết hợp..."
                    date="05/29/2023"
                />
                <BlogPost
                    className={styles['blog-post']}
                    title="MIZUNO RA MẮT BỘ SƯU TẬP GIÀY ĐÁ BANH SR4 ẤN TƯỢNG LẤY CẢM HỨNG TỪ HUYỀN THOẠI SERGIO RAMOS"
                    image="http://file.hstatic.net/1000061481/file/ramos-5-min_17ea8205afe14b30ae5434dc280fa5c2_master.jpg"
                    content="Sau khi ra mắt phiên bản Morelia Neo III β 'SR4'..."
                    date="06/1/2023"
                />
                {/* Thêm các BlogPost khác vào đây */}
            </main>

            <footer>
                <p>Bản quyền &copy; 2023 Blog của tôi</p>
            </footer>
        </div>
    );
};

export default Blog;
