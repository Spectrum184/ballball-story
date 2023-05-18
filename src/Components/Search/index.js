import Wrapper from '~/components/Wrapper';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function Search({ children, searchlist }) {
    return (
        <HeadlessTippy
            interactive={true}
            placement="bottom"
            delay={[0, 50]}
            offset={[0, 24]}
            trigger="click"
            render={(attrs) => (
                <div className={cx('box')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('ten')}>
                        {searchlist.map((item, index) => (
                            <div key={index}>{item.name}</div>
                        ))}
                    </Wrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input placeholder="Tìm kiếm todo..." className={cx('search-input')} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
