    import React, { useState } from 'react';
    import AatroxQ from '../../assets/img/cd1.jpg';
    import AatroxW from '../../assets/img/cd2.jpg';
    import Aatrox_Passive from '../../assets/img/cd3.jpg';
    import AatroxR from '../../assets/img/cd4.jpg';
    import P from '../../assets/img/tr.gif';
    import Q from '../../assets/img/nuun.gif';
    import W from '../../assets/img/Summoner.gif';
    import R from '../../assets/img/dtcl.gif';

    import t1 from '../../assets/img/vodai.jpg';
    import t2 from '../../assets/img/aram.jpg';
    import t3 from '../../assets/img/lol.jpg';
    import t4 from '../../assets/img/tftt.jpg';
    import Slider from 'react-slick';
    import 'slick-carousel/slick/slick.css';
    import 'slick-carousel/slick/slick-theme.css';
    import 'animate.css'; // Import animate.css
    import './play.css';
    import { Link } from 'react-router-dom';

    const Section = () => {
        const [selectedImage, setSelectedImage] = useState('image1');
        const [backgroundImage, setBackgroundImage] = useState(t1);
        const [animate, setAnimate] = useState(''); // State để quản lý hiệu ứng chuyển động
        const scrollToTop = () => {
            window.scrollTo(0, 0); // Cuộn lên đầu trang mới
        };
        const handleImageClick = (image) => {
            setSelectedImage(image);
            setAnimate('animate__animated animate__slideInLeft'); // Thêm lớp animate
            setTimeout(() => {
                setAnimate(''); // Xóa hiệu ứng animate sau khi kết thúc
            }, 1000);
            switch (image) {
                case 'image1':
                    setBackgroundImage(t1);
                    break;
                case 'image2':
                    setBackgroundImage(t2);
                    break;
                case 'image3':
                    setBackgroundImage(t3);
                    break;
                case 'image4':  
                    setBackgroundImage(t4);
                    break;
                default:
                    setBackgroundImage(t1); // Mặc định là hình ảnh P
                    break;
            }
        };  

        const imageContent = {
            image1: {
                src: P,
                alt: 'Image 1',
                content: (
                    <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active no-bullets" data-testid="abilities:ability-0">
                        <h5 style={{ color: 'white' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">HỠI CÁC CẶP BÀI TRÙNG</h5>
                        <p style={{ color: 'white' }} data-testid="abilities:description-0" className="style__AbilityInfoItemDesc-sc-1bu2ash-11 iYGfbx">Hãy vượt qua hàng loạt bản đồ, phối hợp các nâng cấp và trang bị tuyệt hảo để cùng người anh em chí cốt của bạn leo hạng trong giải đấu 2v2v2v2v2v2v2v2 này nhé.</p>
                    </li>
                ),
            },
            image2: {
                src: Q,
                alt: 'Image 2',
                content: (
                    <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active no-bullets" data-testid="abilities:ability-0">
                        <h5 style={{ color: 'white' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">TẤT CẢ NGẪU NHIÊN, CHỈ ĐI ĐƯỜNG GIỮA</h5>
                        <p style={{ color: 'white' }} data-testid="abilities:description-0" className="style__AbilityInfoItemDesc-sc-1bu2ash-11 iYGfbx">Chiến đấu trên một cây cầu băng giá với những vị tướng ngẫu nhiên để xông thẳng tới Nhà Chính của địch trong chế độ 5v5 vui nhộn và hỗn loạn</p>
                    </li>
                ),
            },
            image3: {
                src: W,
                alt: 'Image 3',
                content: (
                    <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active no-bullets" data-testid="abilities:ability-0">
                        <h5 style={{ color: 'white' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">CHẾ ĐỘ CHƠI PHỔ BIẾN NHẤT</h5>
                        <p style={{ color: 'white' }} data-testid="abilities:description-0" className="style__AbilityInfoItemDesc-sc-1bu2ash-11 iYGfbx">Dọn đường, tham gia giao tranh tổng, phá hủy Nhà Chính của địch trước khi Nhà Chính của bạn bị phá hủy.</p>

                    </li>
                ),
            },
            image4: {
                src: R,
                alt: 'Image 4',
                content: (
                    <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active no-bullets" data-testid="abilities:ability-0">
                        <h5 style={{ color: 'white' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">MỘT TRẬN HỖN CHIẾN ĐỂ GIÀNH NGÔI VỊ BÁ CHỦ</h5>
                        <p style={{ color: 'white' }} data-testid="abilities:description-0" className="style__AbilityInfoItemDesc-sc-1bu2ash-11 iYGfbx">Tập hợp những vị tướng để chiến đấu cho bạn. Vượt qua 7 đối thủ khác để trở thành người sống sót cuối cùng.</p>
                    </li>
                ),
            },
        };

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true, // Thiết lập slider để cuộn dọc
            verticalSwiping: false, // Tắt cuộn ngang
            arrows: false // Tắt các nút điều hướng
        };

        return (
            <section 
            id="play" 
            className={`container-fluid section-name padding-y image-transition`} 
            style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            minHeight: '100vh',
            width: '100%'
            }}
        > <div className="row">
                    <div className="col-md-1" style={{ fontFamily: 'Georgia', marginTop: '200px', transform: 'rotate(0deg)' }}>
                        <p style={{  color: 'white', fontSize:'larger', writingMode: 'vertical-lr' ,fontWeight: 'bold'}}>
                            CHẾ ĐỘ CHƠI
                        </p>    
                    </div>
                    <div style={{ marginTop: '400px' }} className="col-md-3">
                        <h1 className="style__Heading-sc-1h71ys8-1 hnjwWN">
                            <span className="style__Intro-sc-1h71ys8-2 gOOvFJ">
                                <div style={{ textAlign: 'center', color: '#F0F8FF' }} className="style__RevealWrapper-sc-14kr0ky-0 jyUXlJ inline show-nw">
                                    <span data-testid="gamemodes:subtitle">Rất nhiều cách</span>
                                </div>
                            </span>
                            <strong className="style__Title-sc-1h71ys8-3 fUnKYe">
                                <div style={{ textAlign: 'center', color: '#F0F8FF' }} className="style__RevealWrapper-sc-14kr0ky-0 jyUXlJ inline show-se">
                                    <span data-testid="gamemodes:title">Chơi</span>
                                </div>
                            </strong>
                        </h1>

                        <Link onClick={scrollToTop}to="/register" style={{ width: '200px', textAlign: 'center', color: '#f8fafc' }} className="codepen-button">
                            <span>Đăng Kí</span>
                        </Link>
                    </div>
                    <div className="col-md-5">
                        <div>
                            {selectedImage && (
                                <div id='img' className={`image-container ${animate}`} >
                                    <img src={imageContent[selectedImage].src} alt={imageContent[selectedImage].alt} />
                                </div>
                            )}
                            <div className={`${animate}`} style={{ marginTop: '35px', textAlign: 'center' }}>
                                {selectedImage && (
                                    <p>{imageContent[selectedImage].content}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '450px' }} className="col-md-3">
                        <Slider {...settings}>
                            <div onClick={() => handleImageClick('image1')} className="slider-image">
                                <span className="image-caption">VÕ ĐÀI</span>
                                <img className="image-captionn" style={{ width: '100px', height: '100px' }} src={AatroxQ} alt="Image 1
    " />
                            </div>
                            <div onClick={() => handleImageClick('image2')} className="slider-image">
                                <span className="image-caption">ARAM</span>
                                <img className="image-captionn" style={{
                                    width: '100px', height: '100px'
                                }} src={Aatrox_Passive} alt="Image 2" />
                            </div>
                            <div onClick={() => handleImageClick('image3')} className="slider-image">
                                <span className="image-caption">Summoner's Rift</span>
                                <img className="image-captionn" style={{ width: '100px', height: '100px' }} src={AatroxW} alt="Image 3" />
                            </div>
                            <div onClick={() => handleImageClick('image4')} className="slider-image">
                                <span className="image-caption">Đấu Trường Chân Lý</span>
                                <img className="image-captionn" style={{ width: '100px', height: '100px' }} src={AatroxR} alt="Image 4" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    };

    export default Section;
