import classNames from 'classnames/bind';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

function Category({ className, children, category }) {
    const rendercategory = category.map((story, index) => {
        return (
            <div key={index} className={cx('inner')}>
                <span className={cx('icon')}>{story.icon}</span>
                <div className={cx('general')}>
                    <a href={story.href} className={cx('name')}>
                        {story.name}
                    </a>
                    <span className={cx('quantity')}>{story.quantity}</span>
                </div>
            </div>
        );
    });

    return <div className={cx('wrapper')}>{rendercategory}</div>;
}

export default Category;
