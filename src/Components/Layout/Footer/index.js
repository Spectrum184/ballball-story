import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import logo from '~/assets/images/logo.png';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('Wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('Wrapper-logo')}>
                    <img src={logo} className={cx('logo')} alt="logo" to="http://localhost:3000" />
                </div>
                <p className={cx('intro')}>
                    BallBall Story là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được convert hoặc dịch kỹ lưỡng,
                    do các converter và dịch giả đóng góp, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với
                    đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
                </p>
                <div className={cx('app')}>
                    <img
                        src="https://metruyencv.com/assets/images/google-play.png?90125"
                        alt=""
                        height="34"
                        width="100"
                    ></img>
                    <img
                        src="https://metruyencv.com/assets/images/app-store.png?90125"
                        alt=""
                        height="34"
                        width="100"
                    ></img>
                </div>
                <div className={cx('wrapper-contact')}>
                    <a href="/" className={cx('contact')}>
                        Điều khoản dịch vụ
                    </a>
                    <a href="/" className={cx('contact')}>
                        Chính sách bảo mật
                    </a>
                    <a href="/" className={cx('contact')}>
                        Về bản quyền
                    </a>
                    <a href="/" className={cx('contact')}>
                        Hướng dẫn sử dụng
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
