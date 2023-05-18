import classNames from 'classnames/bind';
import styles from './listItem.module.scss';
import { MedalIcon } from '~/components/Icon';

const cx = classNames.bind(styles);
function Iconnumber({ children, className, num }) {
    let currentColorItem = '';
    let render = true;
    switch (num) {
        case 1:
            currentColorItem = '#ebca42';
            render = true;
            break;
        case 2:
            currentColorItem = '#b7bbaf';
            render = true;
            break;
        case 3:
            currentColorItem = '#ab6b16';
            render = true;
            break;
        default:
            render = false;
    }

    return (
        <div className={cx('wrapper-iconnumber')}>
            {render && (
                <span className={cx('iconsvg')}>
                    <MedalIcon currentColor={currentColorItem} />
                </span>
            )}
            <div className={cx('number')}>{children}</div>
        </div>
    );
}

export default Iconnumber;
