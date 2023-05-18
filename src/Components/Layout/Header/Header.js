import React from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import logo from '~/assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faBars,
    faBell,
    faBookOpen,
    faEnvelope,
    faGear,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import 'tippy.js/dist/tippy.css';

import Menu from '../../Menu';
import Search from '../../Search';

const usermenu = [
    {
        title: 'Trang cá nhân',
        icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
        title: 'Cài đặt',
        icon: <FontAwesomeIcon icon={faGear} />,
    },
    {
        title: 'Đăng xuất',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    },
];
const cx = classNames.bind(styles);
const searchlist = [
    { name: 'Nguyen Van A', age: 18 },
    { name: 'Nguyen Van B', age: 19 },
    { name: 'Nguyen Van C', age: 20 },
    { name: 'Nguyen Van D', age: 21 },
    { name: 'Nguyen Van E', age: 22 },
];

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('wrapper-header')}>
                    <div className={cx('img')}>
                        <img src={logo} className={cx('logo')} alt="logo" to="http://localhost:3000" />
                    </div>
                    <div className={cx('search')}>
                        <Search searchlist={searchlist}></Search>
                    </div>
                    <div className={cx('nav-btn')}>
                        <Menu items={[]}>
                            <div className={cx('btn-icon')}>
                                {
                                    <button className={cx('icon')}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </button>
                                }
                            </div>
                        </Menu>

                        <Menu items={[]}>
                            <div className={cx('btn-icon')}>
                                {
                                    <button className={cx('icon')}>
                                        <FontAwesomeIcon icon={faBell} />
                                    </button>
                                }
                            </div>
                        </Menu>

                        <Menu items={[]}>
                            <div className={cx('btn-icon')}>
                                {
                                    <button className={cx('icon')}>
                                        <FontAwesomeIcon icon={faBookOpen} />
                                    </button>
                                }
                            </div>
                        </Menu>

                        <Menu items={usermenu} className={cx('menu-btn')}>
                            <div className={cx('btn-icon')}>
                                {<button className={cx('icon')}>{<FontAwesomeIcon icon={faBars} />}</button>}
                            </div>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
