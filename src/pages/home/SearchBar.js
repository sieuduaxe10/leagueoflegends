import React, { useState } from 'react';
import './Search.css';
import Top from '../../assets/img/Top.jpg';
import Rung from '../../assets/img/Rung.jpg';
import Mid from '../../assets/img/Mid.jpg';
import AD from '../../assets/img/Ad.jpg';
import Sp from '../../assets/img/Sp.jpg';
import Topp from '../../assets/img/aatrox.jpg';
import Rungg from '../../assets/img/akali.jpg';
import Midd from '../../assets/img/aurelionsol.jpg';
import ADd from '../../assets/img/heimerdinger.jpg';
import Spp from '../../assets/img/belveth.jpg';
import a from '../../assets/img/briar_v2.jpg';
import b from '../../assets/img/corki.jpg';
import tc from '../../assets/img/kaisss.gif';
import x from '../../assets/img/gnar.jpg';
import { Link } from "react-router-dom";
import 'animate.css';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPosition, setSelectedPosition] = useState(''); // Trạng thái để lưu trữ vị trí được chọn
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang mới
    };
    // Danh sách sản phẩm
    const products = [
        { id: 1, name: 'AATROX', image: Topp, position: 'support' },
        { id: 2, name: 'AKALI', image: Rungg, position: 'mid' },
        { id: 3, name: 'AURELIONSOL', image: Midd, position: 'top' },
        { id: 4, name: 'HEIMERDINGER', image: ADd, position: 'adc' },
        { id: 5, name: 'BELVETH', image: Spp, position: 'jungle' },
        { id: 6, name: 'BRIAR', image: a, position: 'top' },
        { id: 7, name: 'CORKI', image: b, position: 'support' },
        { id: 8, name: 'GNAR', image: x, position: 'mid' },
    ];

    // Lọc các sản phẩm dựa trên truy vấn tìm kiếm và vị trí được chọn
    const filteredProducts = products.filter(product => {
        // Lọc theo tên sản phẩm
        const matchesSearchQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        // Lọc theo vị trí được chọn
        const matchesSelectedPosition = selectedPosition ? product.position === selectedPosition : true;
        // Kết hợp cả hai điều kiện
        return matchesSearchQuery && matchesSelectedPosition;
    });

    // Hàm để xử lý sự kiện thay đổi trong ô nhập
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Hàm để xử lý sự kiện nhấn nút vị trí
    const handlePositionClick = (position) => {
        setSelectedPosition(position);
    };

    return (
        <>
            <section className='container'>
                <div style={{ textAlign: 'center' }} className="style__Wrapper-sc-1h71ys8-0 llIKGT">
                    <h1 className="style__Heading-sc-1h71ys8-1 hnjwWN">
                        <span className="style__Intro-sc-1h71ys8-2 gOOvFJ">
                            <div class="logo animate__animated animate__slideInLeft" style={{ animationDuration: '2800ms', animationDelay: '300ms', animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)' }}>
                                <span data-testid="hero:subtitle">Chọn Ngay Một</span>
                            </div>
                        </span>
                        <strong className="style__Title-sc-1h71ys8-3 fUnKYe">
                            <div class="logo animate__animated animate__slideInRight" style={{ animationDuration: '2000ms', animationDelay: '200ms', animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)' }}>
                                <span data-testid="hero:title">Tướng</span>
                            </div>
                        </strong>
                    </h1>
                    <p id='text' data-testid="hero:description" className="style__Introduction-sc-138hc9a-1 cCgRut">
                        Với hơn 140 tướng, bạn chắc chắn sẽ tìm thấy một lựa chọn phù hợp với lối chơi của mình. Chọn một tướng tủ hoặc sử dụng điêu luyện tất cả.
                    </p>
                </div>
                <div id='khung' className="row" style={{ marginTop: '50px', border: '0.5px solid black', padding: '10px', height: 'auto' }}>
                    {/* Cột 1 với khung tìm kiếm */}
                    <div className="col-md-3" style={{ borderRight: '1px solid black' }}>
                        <div className="input-container">
                            <input type="text"
                                name="text"
                                className="input"
                                placeholder="Tìm Kiếm"
                                value={searchQuery}
                                onChange={handleSearchChange}
                               
                                />
                                
                            <span className="icon">
                                <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </span>
                        </div>
                    </div>

                    {/* Cột 2 với nội dung */}
                    <div className="col-md-9">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                            {/* Danh sách không có đánh dấu */}
                            <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
                                {/* Mục 1 - Đường Trên */}
                                <li style={{ marginRight: '10px' }}>
                                    <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }} onClick={() => handlePositionClick('')}>
                                        <div className="dropdown-item-content">
                                            <img src={tc} alt="Tất cả" style={{ width: '30px', height: '30px' }} />
                                            <span style={{ marginRight: '10px' }} className="span">Tất cả San Pham</span>
                                        </div>
                                    </button>
                                </li>
                                <li style={{ marginRight: '10px' }}>
                                    <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }} onClick={() => handlePositionClick('top')}>
                                        <div className="dropdown-item-content">
                                            <img src={Top} alt="Hình ảnh 1" style={{ width: '30px', height: '30px' }} />
                                            <span style={{ marginRight: '30px' }} className="span">Đường Trên</span>
                                        </div>
                                    </button>
                                </li>

                                {/* Mục 2 - Rừng */}
                                <li style={{ marginRight: '10px' }}>
                                    <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }} onClick={() => handlePositionClick('jungle')}>
                                        <div className="dropdown-item-content">
                                            <img src={Rung} alt="Hình ảnh 2" style={{ width: '30px', height: '30px' }} />
                                            <span style={{ marginRight: '30px' }} className="span">Rừng</span>
                                        </div>
                                    </button>
                                </li>

                                {/* Mục 3 - Đường Giữa */}
                                <li style={{ marginRight: '10px' }}>
                                    <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }} onClick={() => handlePositionClick('mid')}>
                                        <div className="dropdown-item-content">
                                            <img src={Mid} alt="Hình ảnh 3" style={{ width: '30px', height: '30px' }} />
                                            <span style={{ marginRight: '30px' }} className="span">Đường Giữa</span>
                                        </div>
                                    </button>
                                </li>

                                {/* Mục 4 - Đường Dưới */}
                                <li style={{ marginRight: '10px' }}>
                                    <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }} onClick={() => handlePositionClick('adc')}>
                                        <div className="dropdown-item-content">
                                            <img src={AD} alt="Hình ảnh 4" style={{ width: '30px', height: '30px' }} />
                                            <span style={{ marginRight: '30px' }} className="span">Đường Dưới</span>
                                        </div>
                                    </button>
                                </li>

                                {/* Mục 5 - Hỗ trợ */}
                                <li style={{ marginRight: '10px' }}>
                                    <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }} onClick={() => handlePositionClick('support')}>
                                        <div className="dropdown-item-content">
                                            <img src={Sp} alt="Hình ảnh 5" style={{ width: '30px', height: '30px' }} />
                                            <span style={{ marginRight: '30px' }} className="span">Hỗ trợ</span>
                                        </div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Hiển thị danh sách sản phẩm được lọc */}
                <div style={{ marginTop: '10px' }} className="row">
                    {filteredProducts.map((product, index) => (
                        <div key={product.id} className="col-md-6 col-lg-3" style={{ marginTop: '20px' }}>
                            <div className="rounded position-relative fruite-item">
                                <div className="fruite-img">
                                    <Link onClick={scrollToTop}to="/Detail">
                                        <img style={{ height: '300px' }} src={product.image} className="img-fluid w-100 rounded-top" alt={product.name} />
                                    </Link>
                                </div>
                                <div style={{ height: '70px' }} className="product-info p-4 border border-secondary border-top-0 rounded-bottom">
                                    <h3 className="product-name ">{product.name}</h3>
                                </div>



                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default SearchBar;
