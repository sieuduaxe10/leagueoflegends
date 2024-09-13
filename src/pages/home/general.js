import React, { useState } from 'react';
import ST from '../../assets/img/s.png';
import DS from '../../assets/img/d.png';
import PS from '../../assets/img/p.png';
import XT from '../../assets/img/x.png';
import HT from '../../assets/img/ht.png';
import DT from '../../assets/img/dd.png';
import S from '../../assets/img/imgst.webp';
import D from '../../assets/img/imgds.webp';
import P from '../../assets/img/imgps.webp';
import X from '../../assets/img/imgxt.webp';
import H from '../../assets/img/imght.webp';
import DD from '../../assets/img/imgdd.jpg';
import './general.css'; // Import tệp CSS của bạn
import { Link } from 'react-router-dom';


const Section = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang mới
    };
    const [selectedImage, setSelectedImage] = useState('image1');

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const imageContent = {
        image1: {
            src: S,
            alt: 'Image 1',
            content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
                <h2 style={{ color: 'rgb(163 163 163)', fontSize: 'larger', fontWeight: 'bold' }} data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">AKALI</h2>
                <h4 style={{ color: '#fef2f2' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">Sát Thủ Đơn Độc</h4>
            </li>
            ,
        },
        image2: {
            src: D,
            alt: 'Image 2',
            content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
                <h2 style={{ color: 'rgb(163 163 163)', fontSize: 'larger', fontWeight: 'bold' }} data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">YASUO</h2>
                <h4 style={{ color: '#fef2f2' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">Kẻ Bất Dung Thứ</h4>
            </li>
        },
        image3: {
            src: P,
            alt: 'Image 3',
            content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
                <h2 style={{ color: 'rgb(163 163 163)', fontSize: 'larger', fontWeight: 'bold' }} data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">LUX</h2>
                <h4 style={{ color: '#fef2f2' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">Tiểu Thư Ánh Sáng</h4>
            </li>
        },
        image4: {
            src: X,
            alt: 'Image 4',
            content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
                <h2 style={{ color: 'rgb(163 163 163)', fontSize: 'larger', fontWeight: 'bold' }} data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">JINX</h2>
                <h4 style={{ color: '#fef2f2' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">Khẩu Pháo Nổi Loạn</h4>
            </li>
        },
        image5: {
            src: H,
            alt: 'Image 5',
            content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
                <h2 style={{ color: 'rgb(163 163 163)', fontSize: 'larger', fontWeight: 'bold' }} data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">THRESH</h2>
                <h4 style={{ color: '#fef2f2' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">Cai Ngục Xiềng Xích</h4>
            </li>
        },
        image6: {
            src: DD,
            alt: 'Image 6',
            content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
                <h2 style={{ color: 'rgb(163 163 163)', fontSize: 'larger', fontWeight: 'bold' }} data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">LEONA</h2>
                <h4 style={{ color: '#fef2f2' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">Bình Minh Rực Rỡ</h4>
            </li>
        },
    };

    return (
        <section id='hi' className="container-fluid  ">
            <div className="row">
                <div style={{ justifyContent: 'center' }} className="col-md-7">
                    <div style={{ textAlign: 'center' }} className="style__Wrapper-sc-1h71ys8-0 llIKGT">
                        <h1 className="style__Heading-sc-1h71ys8-1 hnjwWN">
                            <span className="style__Intro-sc-1h71ys8-2 gOOvFJ">
                                <div class="" style={{ animationDuration: '2800ms', animationDelay: '300ms', animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)' }}>
                                    <span style={{ color: '#fef2f2' }} data-testid="hero:subtitle">Chọn Ngay Một</span>
                                </div>
                            </span>
                            <strong className="style__Title-sc-1h71ys8-3 fUnKYe">
                                <div class="" style={{ animationDuration: '2000ms', animationDelay: '200ms', animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)' }}>
                                    <span style={{ color: '#fef2f2' }} data-testid="hero:title">Tướng</span>
                                </div>
                            </strong>
                        </h1>
                        <p style={{ color: '#fef2f2' }} id='text' data-testid="hero:description" className="style__Introduction-sc-138hc9a-1 cCgRut">
                            Với hơn 140 tướng, bạn chắc chắn sẽ tìm thấy một lựa chọn phù hợp với lối chơi của mình. Chọn một tướng tủ hoặc sử dụng điêu luyện tất cả.
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>

                        <Link onClick={scrollToTop}to="/SearchBar" ><button id='garena' style={{ marginRight: '50px', width: '220px' }}>Khám Phá Thêm Các Vị Tướng</button></Link>
                        <Link onClick={scrollToTop}to="/register"> <button id='garena'> <span style={{ display: 'block', textAlign: 'center' }} >Đăng Kí</span>
                        </button> </Link>
                    </div>

                    <div style={{ marginTop: '50px', textAlign: 'center' }}>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className="button-container">
                            <button onClick={() => handleImageClick('image1')} style={{ margin: '0 10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ width: '100%', height: '50px', objectFit: 'cover', marginBottom: '10px' }} src={ST} alt="Image 1" />
                                    <span className="span" style={{ display: 'block', textAlign: 'center',marginLeft:'5px' }}>Sát Thủ</span>
                                </div>
                            </button>
                            <button onClick={() => handleImageClick('image2')} style={{ margin: '0 10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ width: '100%', height: '50px', objectFit: 'cover', marginBottom: '10px' }} src={DS} alt="Image 2" />
                                    <span className="span" style={{ display: 'block', textAlign: 'center',marginLeft:'5px' }}>Đấu Sĩ</span>
                                </div>
                            </button>

                            <button onClick={() => handleImageClick('image3')} style={{ margin: '0 10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ width: '100%', height: '50px', objectFit: 'cover', marginBottom: '10px' }} src={PS} alt="Image 2" />
                                    <span className="span" style={{ display: 'block', textAlign: 'center' ,marginLeft:'5px'}}>Pháp Sư</span>
                                </div>
                            </button>

                            <button onClick={() => handleImageClick('image4')} style={{ margin: '0 10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ width: '100%', height: '50px', objectFit: 'cover', marginBottom: '10px' }} src={XT} alt="Image 3" />
                                    <span className="span" style={{ display: 'block', textAlign: 'center',marginLeft:'5px' }}>Xạ Thủ</span>
                                </div>
                            </button>

                            <button onClick={() => handleImageClick('image5')} style={{ margin: '0 10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ width: '100%', height: '50px', objectFit: 'cover', marginBottom: '10px' }} src={HT} alt="Image 4" />
                                    <span className="span" style={{ display: 'block', textAlign: 'center',marginLeft:'5px' }}>Hỗ Trợ</span>
                                </div>
                            </button>

                            <button onClick={() => handleImageClick('image6')} style={{ margin: '0 10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <img style={{ width: '100%', height: '50px', objectFit: 'cover', marginBottom: '10px' }} src={DT} alt="Image 5" />
                                    <span className="span" style={{ display: 'block', textAlign: 'center',marginLeft:'5px' }}>Đỡ Đòn</span>
                                </div>
                            </button>
                        </div>

                    </div>



                </div>
                <aside className="col-md-5" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        {selectedImage && (
                            <div>
                                <img src={imageContent[selectedImage].src} alt={imageContent[selectedImage].alt} style={{ width: '500px', height: '500px' }} />
                            </div>
                        )}
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            {selectedImage && (
                                <p>{imageContent[selectedImage].content}</p>
                            )}
                        </div>
                    </div>
                </aside>

            </div>
        </section>
    );
};

export default Section;
