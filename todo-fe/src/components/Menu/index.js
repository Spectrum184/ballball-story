import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

import Wrapper from '~/components/Wrapper';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Menu({ items, onClick, children, hideOnClick = false, className }) {
    const renderItems = items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
    const renderresult = (attrs) => (
        <div className={(cx('menu-list'), className)} tabIndex="-1" {...attrs}>
            <Wrapper className={cx('menu-popper')}>
                <div className={cx('menu-body')}>{renderItems}</div>
            </Wrapper>
        </div>
    );
    return (
        <HeadlessTippy trigger="click" offset={[0, 0]} interactive placement="bottom" render={renderresult}>
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
