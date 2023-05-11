import classNames from 'classnames/bind';
import styles from './StoryProfile.module.scss';
import { BookCover } from 'book-cover-3d';
const cx = classNames.bind(styles);

function StoryProfile({ className, info, header }) {
    const renderList = info.slice(0, 6);
    const renderListItem = renderList.map((item, index) => {
        return (
            <div key={index} className={cx('inner')}>
                <div className={cx('img')}>
                    <a href={item.href}>
                        <BookCover width={60} height={100} rotate={10} rotateHover={50} thickness={30}>
                            <img alt={item.storyname} src="https://yymedia.codeprime.net/media/novels/7852e9242a.jpg" />
                        </BookCover>
                    </a>
                </div>
                <div className={cx('info')}>
                    <a href={item.href} className={cx('name')}>
                        {item.storyname}
                    </a>
                    <a href={item.href} className={cx('author')}>
                        {item.author}
                    </a>
                    <p className={cx('chapter')}>{item.chapternumber} Chương</p>
                    <p className={cx('readed')}>{item.readednumber} Đọc</p>
                    <blockquote className={cx('intro')}>{item.intro}</blockquote>
                </div>
            </div>
        );
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('header-content')}>{header}</h2>
                <a href="/" className={cx('header-link')}>
                    Xem tất cả
                </a>
            </div>
            {renderListItem}
        </div>
    );
}

export default StoryProfile;
