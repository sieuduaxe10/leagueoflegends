import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import './new.css'; // Import custom CSS file
import { GET_PAGE } from '../../api/apiService'; // Đảm bảo đúng đường dẫn tới api.js

const News = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang mới
    };
    const [products, setProducts] = useState([]);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');

    useEffect(() => {
        // Lấy dữ liệu từ API
        GET_PAGE('products', 0, 10).then(response => {
            // Sắp xếp sản phẩm theo id giảm dần
            const sortedProducts = response.data.sort((a, b) => b.id - a.id);
            // Lấy 3 sản phẩm có id cao nhất
            setProducts(sortedProducts.slice(0, 3));
        }).catch(error => {
            console.error("Error fetching products:", error);
        });
    }, []);

    const handleVideoPlay = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
        setIsVideoPlaying(true);
        setIsFullscreen(true);
    };

    const handleCloseFullscreen = () => {
        setIsFullscreen(false);
        setIsVideoPlaying(false);
        setCurrentVideoUrl('');
    };

    return (
        <section className="container-fluid py-5">
            <div className='row'>
                <div className="col-md-1" style={{ fontFamily: 'Georgia', marginTop: '100px', transform: 'rotate(0deg)' }}>
                    <p style={{ opacity: 0.8, color: 'black', writingMode: 'vertical-lr', fontSize: 'larger', fontWeight: 'bold' }}>
                        TIN TỨC TIÊU BIỂU
                    </p>
                </div>
                
                <ol className="col-md-11" style={{ overflowX: 'hidden', padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'row' }}>
                    {products.map((product, index) => (
                        <li key={index} className="product-item" style={{ flex: '0 1 calc(33.333% - 20px)', margin: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {product.type === 'video' ? (
                                <div style={{ marginLeft: '40px' }} className="video-container">
                                    {isVideoPlaying && isFullscreen ? (
                                        <div className="fullscreen-video">
                                            <iframe
                                                src={currentVideoUrl}
                                                title="Embedded video"
                                                frameBorder="0"
                                                allowFullScreen
                                            />
                                            <div className="close-button" onClick={handleCloseFullscreen}>&times;</div>
                                        </div>
                                    ) : (
                                        <div className="video-thumbnail-container" >
                                            <img
                                                src={`./assets/img/${product.thumbnail}`}
                                                alt={product.alt}
                                                className="video-thumbnail"
                                                onClick={() => handleVideoPlay(product.videoUrl)}
                                            />
                                            <i className="fas fa-play-circle play-icon"></i>
                                        </div>
                                    )}
                                    <div className="product-info">
                                        <a style={{ color: '#f59e0b' }} id='r' href='#' className="product-description">{product.description}</a>
                                        <a id='u' href='#' className="product-description"><h4>{product.updateInfo}</h4></a>
                                        <a id='t' href='#' className="product-description"><h6>{product.timeInfo}</h6></a>
                                    </div>
                                </div>
                            ) : (
                                <Link onClick={scrollToTop}to='/Update' style={{ textDecoration: 'none', width: '100%' }}>
                                    <div className="image-container">
                                        <img src={`./assets/img/${product.src}`} alt={product.alt} className="product-image" style={{ width: '100%' }} />
                                        <div className="product-info">
                                            <a style={{ color: '#f59e0b' }} id='r' href='#' className="product-description">{product.description}</a>
                                            <a id='u' href='#' className="product-description"><h4>{product.updateInfo}</h4></a>
                                            <a id='t' href='#' className="product-description"><h6>{product.timeInfo}</h6></a>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default News;
