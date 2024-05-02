import React, { useState, useEffect } from 'react';
import './skin.css'; // Nhập tệp CSS
import akali1 from "../../assets/img/akali.png";
import akali2 from "../../assets/img/akali1.png";
import akali3 from "../../assets/img/akali2.png";
import akali4 from "../../assets/img/akali3.png";

const Skin = () => {
    // Mảng chứa các đường dẫn hình ảnh
    const images = [akali1, akali2, akali3, akali4];

    // Trạng thái để theo dõi chỉ số hình ảnh hiện tại
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Sử dụng useEffect để thiết lập bộ hẹn giờ thay đổi hình ảnh mỗi 2 giây
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Thay đổi hình ảnh mỗi 2 giây

        // Xóa bộ hẹn giờ khi component unmount
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div id='hinh' className="container py-5">
            <div className="row">
                <div class="col-md-1" style={{ fontFamily: 'Georgia', marginTop: '200px',transform: 'rotate(0deg)' }}>
                    <p style={{ opacity: 0.5 ,color: 'white', fontSize: '18px' , writingMode: 'vertical-lr'}}>
                        Trang Phục Tướng 
                    </p>
                </div>



                <div className="col-md-7">
                <div style={{marginTop:'10px'}} className="image-wrapper">
                    <img style={{ width: '75%' }} src={images[currentImageIndex]} className="image" alt="Slider Image" />
                </div>
                </div>
                <div className="col-md-4" style={{ color: 'white', textAlign: 'center' }}>
                    <div style={{ marginTop: '200px' }} class="style__Wrapper-sc-1h71ys8-0 llIKGT style__Title-sc-vkf2l4-5-GiantTitle linpox">
                        <h1 class="style__Heading-sc-1h71ys8-1 hnjwWN">
                            <span class="style__Intro-sc-1h71ys8-2 gOOvFJ">
                                <div class="style__RevealWrapper-sc-14kr0ky-0 jyUXlJ inline show-nw"
                                >
                                    <span data-testid="championstyle:subtitle">Hạ Gục Kẻ Địch</span>
                                </div>
                            </span>
                            <strong class="style__Title-sc-1h71ys8-3 fUnKYe">
                                <div class="style__RevealWrapper-sc-14kr0ky-0 jyUXlJ inline show-se"
                                >
                                    <span style={{ fontSize: '50px' }} data-testid="championstyle:title">Một Cách Sang Chảnh</span>
                                </div>
                            </strong>
                        </h1>
                        <p style={{ color: 'white' }} data-testid="championstyle:description" class="style__Description-sc-1h71ys8-4 hkyZqv">
                            Thay đổi diện mạo các vị tướng yêu thích với trang phục để tạo nên điểm nhấn của riêng bạn.
                        </p>

                    </div>


                </div>
            </div>
        </div>

    );
}

export default Skin;
