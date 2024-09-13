import React, { useState, useEffect } from 'react';
import { GET_PAGE } from '../../api/apiService';
import './detail.css';
import { Link } from 'react-router-dom';

const Skin = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Lấy dữ liệu từ API
        GET_PAGE('products', 0, 10).then(response => {
            // Sắp xếp sản phẩm theo id giảm dần
            const sortedProducts = response.data.sort((a, b) => b.id - a.id);
            // Lấy 6 sản phẩm đầu tiên
            setProducts(sortedProducts.slice(0, 6));
        }).catch(error => {
            console.error("Error fetching products:", error);
        });
    }, []);

    // Hàm này sẽ được gọi khi chuyển hướng qua trang mới
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang mới
    };

    return (
        <section className="container">
            <div style={{ margin: 50 }} className='row '>
                <div className="glitch-wrapper">
                    <div className="glitch" data-text="CHI TIẾT CẬP NHẬT">CHI TIẾT CẬP NHẬT</div>
                </div>

                <ol style={{ marginTop: '50px', padding: '0 20px', listStyle: 'none' }} className="row no-underline">
                    {products.map((product, index) => (
                        <li key={index} className="col-md-4" style={{ marginBottom: '20px' }}>
                            {/* Sử dụng Link để chuyển hướng */}
                            <Link to='/Update' onClick={scrollToTop} style={{ textDecoration: 'none' }}>
                                <div className="image-container">
                                    <img src={`./assets/img/${product.src}`} alt={product.alt} className="product-image" style={{ width: '100%' }} />
                                    <div className="product-info">
                                        <div>
                                            <p style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'x-small', color: '#22d3ee', display: 'inline-block' }}>{product.description}</p>
                                            {" | "}
                                            <p style={{ textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'x-small', display: 'inline-block', marginLeft: '5px' }}>{product.videoUrl}</p>
                                        </div>
                                        <h4 style={{ color: 'black' }}>{product.updateInfo}</h4>
                                        <h6 style={{ color: 'black' }}>{product.timeInfo}</h6>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Skin;
