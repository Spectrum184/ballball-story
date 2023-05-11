import classNames from 'classnames/bind';
import styles from './listItem.module.scss';
import Iconnumber from './IconNumber';
import { BookCover } from 'book-cover-3d';

const cx = classNames.bind(styles);
function ListItem({ children, className, info, header }) {
    const Firstitem = info[0];
    const Otheritem = info.slice(1);
    const renderListItem = Otheritem.map((item, index) => {
        return (
            <div key={index} className={cx('otheritem')}>
                <div className={cx('iconother')}>
                    <Iconnumber num={item.code}>{item.code}</Iconnumber>
                </div>
                <div className={cx('infoother')}>
                    <a href={item.href} className={cx('nameother')}>
                        {item.storyname}
                    </a>
                </div>
                <div className={cx('chapterother')}>
                    <p className={cx('chapterotheritem')}>{item.chapternumber} chương</p>
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
            <div className={cx('listitem')}>
                <div className={cx('item1')}>
                    <div className={cx('icon1')}>
                        <Iconnumber num={1}>{'1'}</Iconnumber>
                    </div>
                    <div className={cx('info1')}>
                        <a href={Firstitem.href} className={cx('name')}>
                            {Firstitem.storyname}
                        </a>
                        <p className={cx('chapter')}>{Firstitem.chapternumber} Chương</p>
                        <a href={Firstitem.href} className={cx('author')}>
                            {Firstitem.author}
                        </a>
                        <a href={Firstitem.href} className={cx('genre')}>
                            {Firstitem.genre}
                        </a>
                    </div>
                    <div className={cx('img')}>
                        <a href={Firstitem.href}>
                            <BookCover width={60} height={100} rotate={10} rotateHover={50} thickness={30}>
                                <img
                                    alt={Firstitem.storyname}
                                    src="https://yymedia.codeprime.net/media/novels/7852e9242a.jpg"
                                />
                            </BookCover>
                        </a>
                    </div>
                </div>
                <div className={cx('otheritemwrapper')}>{renderListItem}</div>
            </div>
        </div>
    );
}

export default ListItem;
