import classNames from 'classnames/bind';
import Styles from './Button.module.scss';

const cx = classNames.bind(Styles);
function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    small = false,
    large = false,
    className,
    onClick,
    lefticon,
    righticon,
    ...passprops
}) {
    let Comp = 'button';
    const props = { onClick, ...passprops };
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });
    if (to) {
        props.to = to;
        Comp = 'link';
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props} onClick={onClick}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}
        </Comp>
    );
}

export default Button;
