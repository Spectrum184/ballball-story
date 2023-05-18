import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Category from '~/components/Category';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDAndD } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SideBar.css';
import ListItem from '~/components/ListItem';
import StoryProfile from '~/components/StoryProfile';

const cx = classNames.bind(styles);
const storyinfo = [
    {
        code: 1,
        href: '',
        genre: 'Huyền Huyễn',
        img: 'https://yymedia.codeprime.net/media/novels/202304/thumb_mat-the-vo-han-thon-phe-dich-cbbebdba9a_60x90.jpgg',
        storyname: 'Cực phẩm vú em 1',
        author: 'Hiệp',
        chapternumber: '1000',
        readednumber: '100',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
    {
        code: 2,
        href: '',
        genre: 'Huyền Huyễn',
        img: '~/assets/images/1.png',
        storyname: 'Cực phẩm vú em 2',
        author: 'Hiệp',
        chapternumber: '10012',
        readednumber: '32213',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
    {
        code: 3,
        href: '',
        genre: 'Huyền Huyễn',
        img: '~/assets/images/1.png',
        storyname: 'Cực phẩm vú em 3',
        author: 'Hiệp',
        chapternumber: '3213',
        readednumber: '100',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
    {
        code: 4,
        href: '',
        genre: 'Huyền Huyễn',
        img: '~/assets/images/1.png',
        storyname: 'Cực phẩm vú em 4',
        author: 'Hiệp',
        chapternumber: '3214',
        readednumber: '100',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
    {
        code: 5,
        href: '',
        genre: 'Huyền Huyễn',
        img: 'https://yymedia.codeprime.net/media/novels/202304/thumb_mat-the-vo-han-thon-phe-dich-cbbebdba9a_60x90.jpgg',
        storyname: 'Cực phẩm vú em 5',
        author: 'Hiệp',
        chapternumber: '3123',
        readednumber: '3123',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
    {
        code: 6,
        href: '',
        genre: 'Huyền Huyễn',
        img: '~/assets/images/1.png',
        storyname: 'Cực phẩm vú em 6',
        author: 'Hiệp',
        chapternumber: '10012',
        readednumber: '32213',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
    {
        code: 7,
        href: '',
        genre: 'Huyền Huyễn',
        img: '~/assets/images/1.png',
        storyname: 'Cực phẩm vú em 7',
        author: 'Hiệp',
        chapternumber: '3213',
        readednumber: '100',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
    {
        code: 8,
        href: '',
        genre: 'Huyền Huyễn',
        img: '~/assets/images/1.png',
        storyname: 'Cực phẩm vú em 8Cực phẩm vú em 8',
        author: 'Hiệp',
        chapternumber: '3214',
        readednumber: '100',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
    {
        code: 9,
        href: '',
        genre: 'Huyền Huyễn',
        img: '~/assets/images/1.png',
        storyname: 'Cực phẩm vú em 9',
        author: 'Hiệp',
        chapternumber: '3213',
        readednumber: '100',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
    {
        code: 10,
        href: '',
        genre: 'Huyền Huyễn',
        img: '~/assets/images/1.png',
        storyname: 'Cực phẩm vú em 10',
        author: 'Hiệp',
        chapternumber: '3214',
        readednumber: '100',
        intro: 'Truyện Cực Phẩm Vú Em thuộc thể loại huyền huyễn khá hấp dẫn, nhân vật chính tên là Cao Lôi Hoa trong lúc làm nhiệm vụ đặc biệt bị xuyên không đến dị giới, hắn suýt nữa là ngã gục tại nơi đây vì ai cho hắn ăn\nThế rồi một cô gái kỳ lạ đã thuê hắn làm vú em. Cô ấy xinh đẹp nhưng không bao giờ nói, chưa kết hôn nhưng có 3 - 4 đứa con, mà đứa nào cũng thuộc dạng “khác người”… \nTác giả xây dựng một nhân vật mang tính cách nổi bật: đối với người thân, hắn như mùa xuân ấm áp, đối với kẻ thù, hắn hiện thân của mùa đông lạnh lẽo. Hắn bảo hộ người yêu quý của hắn một cách cực đoan, kẻ nào động đến hắn một, hắn bắt kẻ đó trả giá gấp trăm nghìn lần. Để bảo hộ người thân, hắn càng cố gắng để mạnh hơn, mạnh hơn nữa…',
    },
];

const category = [
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 1,
        name: 'Huyền Huyễn',
        quantity: '5.5k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 2,
        name: 'Lịch Sử',
        quantity: '2k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 3,
        name: 'Tiên Hiệp',
        quantity: '1k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 4,
        name: 'Đô Thị',
        quantity: '3k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 5,
        name: 'Hệ Thống',
        quantity: '6k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 6,
        name: 'Quân Sự',
        quantity: '12',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 7,
        name: 'Trinh Thám',
        quantity: '5.5k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 8,
        name: 'Kiếm Hiệp',
        quantity: '5.9k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 9,
        name: 'Ngôn Lù',
        quantity: '2k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 10,
        name: 'Dị Giới',
        quantity: '1k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 11,
        name: 'Huyền Ảo',
        quantity: '3k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 12,
        name: 'Cổ Đại',
        quantity: '6k',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 13,
        name: 'Khoa Huyễn',
        quantity: '12',
    },
    {
        icon: <FontAwesomeIcon icon={faDAndD} />,
        code: 14,
        name: 'Võng Du',
        quantity: '5.5k',
    },
];

function SideBar() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: cx('slick-dots dotsbanner'),
        arrows: false,
        className: 'slickbaner',
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('side1')}>
                    <div className={cx('category')}>
                        <Category category={category}></Category>
                    </div>
                    <div className={cx('banner')}>
                        <Slider {...settings}>
                            <div>
                                <img
                                    className={cx('slider-baner')}
                                    alt="anh loi"
                                    src="https://yymedia.codeprime.net/media/featured_novels/ban-tang-desktop-truyenyy.png"
                                />
                            </div>
                            <div>
                                <img
                                    className={cx('slider-baner')}
                                    alt="anh loi"
                                    src="https://yymedia.codeprime.net/media/featured_novels/ban-tang-desktop-truyenyy.png"
                                />
                            </div>
                            <div>
                                <img
                                    className={cx('slider-baner')}
                                    alt="anh loi"
                                    src="https://yymedia.codeprime.net/media/featured_novels/ban-tang-desktop-truyenyy.png"
                                />
                            </div>
                            <div>
                                <img
                                    className={cx('slider-baner')}
                                    alt="anh loi"
                                    src="https://yymedia.codeprime.net/media/featured_novels/ban-tang-desktop-truyenyy.png"
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className={cx('side2')}>
                    <div className={cx('listItem-wrapper')}>
                        <ListItem info={storyinfo} header={'Thịnh hành tuần'}></ListItem>
                    </div>
                    <div className={cx('listItem-wrapper')}>
                        <ListItem info={storyinfo} header={'Đọc nhiều tuần'}></ListItem>
                    </div>
                    <div className={cx('listItem-wrapper')}>
                        <ListItem info={storyinfo} header={'Đề cử tuần'}></ListItem>
                    </div>
                </div>
                <div className={cx('side3')}>
                    <div className={cx('listItem-wrapper')}>
                        <ListItem info={storyinfo} header={'Đánh giá cao'}></ListItem>
                    </div>
                    <div className={cx('listItem-wrapper')}>
                        <ListItem info={storyinfo} header={'Truyện mới đăng'}></ListItem>
                    </div>
                    <div className={cx('listItem-wrapper')}>
                        <ListItem info={storyinfo} header={'Truyện mới hoàn thành'}></ListItem>
                    </div>
                </div>
                <div className={cx('side4')}>
                    <div className={cx('listItem-wrapper')}>
                        <ListItem info={storyinfo} header={'Truyện đọc nhiều nhất'}></ListItem>
                    </div>
                    <div className={cx('profile-wrapper')}>
                        <StoryProfile info={storyinfo} header={'Lựa chọn của Biên Tập Viên'}></StoryProfile>
                    </div>
                </div>
            </div>
            <div className="container"></div>
        </div>
    );
}

export default SideBar;
