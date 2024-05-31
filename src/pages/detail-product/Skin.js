import React, { useState } from 'react';
import Aatrox_a from '../../assets/img/aa.jpg';
import Aatrox_1 from '../../assets/img/Aatrox_1.jpg';
import Aatrox_11 from '../../assets/img/Aatrox_2.jpg';
import Aatrox_2 from '../../assets/img/Aatrox_11.jpg';
import Aatrox_20 from '../../assets/img/Aatrox_20.jpg';
import Aatrox_21 from '../../assets/img/Aatrox_21.jpg';
import Aatrox_3 from '../../assets/img/Aatrox_3.jpg';
import Aatrox_30 from '../../assets/img/Aatrox_30.jpg';
import Aatrox_31 from '../../assets/img/Aatrox_31.jpg';
import Aatrox_7 from '../../assets/img/Aatrox_7.jpg';
import Aatrox_8 from '../../assets/img/Aatrox_8.jpg';
import Aatrox_9 from '../../assets/img/Aatrox_9.jpg';

import './Skin.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'animate.css';

const Skin = () => {
    const images = [
        { src: Aatrox_a, alt: 'Aatrox 1', description: 'Aatrox' },
        { src: Aatrox_1, alt: 'Aatrox 1', description: 'Aatrox Công Lý' },
        { src: Aatrox_2, alt: 'Aatrox 2', description: 'Aatrox Máy Móc' },
        { src: Aatrox_3, alt: 'Aatrox 3', description: 'Aatrox Thợ Săn Đại Dương' },
        { src: Aatrox_7, alt: 'Aatrox 7', description: 'Aatrox Huyết Nguyệt' },
        { src: Aatrox_8, alt: 'Aatrox 8', description: 'Aatrox Huyết Nguyệt - Hàng Hiệu' },
        { src: Aatrox_9, alt: 'Aatrox 9', description: 'Aatrox Vinh Quang' },
        { src: Aatrox_11, alt: 'Aatrox 11', description: 'Aatrox Ác Ma Không Gian' },
        { src: Aatrox_21, alt: 'Aatrox 21', description: 'Aatrox Nguyệt Thực' },
        { src: Aatrox_30, alt: 'Aatrox 30', description: 'DRX Aatrox' },
        { src: Aatrox_31, alt: 'Aatrox 31', description: 'DRX Aatrox - Hàng Hiệu' }
    ];

    const [hoveredDescription, setHoveredDescription] = useState(images[0].description);

    return (
        <section className="section-name padding-y">
            <h1 style={{ marginBottom: '50px', textAlign: 'center', color: 'white',fontWeight: 'bold' }}>Trang Phục Hiện Có</h1>
            <section style={{ width: '100%' }} id='pl'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        onMouseEnter={() => setHoveredDescription(image.description)}
                        onMouseLeave={() => setHoveredDescription(images[0].description)}
                        style={{ margin: '10px' }}
                    />
                ))}
            </section>
            {hoveredDescription && (
                <section style={{ width: '100%', height: '50px', display: 'flex', justifyContent: 'center', color: 'white', marginTop: '20px' }}>
                <div style={{ fontFamily: 'Arial',textTransform: 'uppercase', fontWeight: 'bold' ,fontSize:'larger'}}>{hoveredDescription}</div>
            </section>
            )}
        </section>
    );
};

export default Skin;
