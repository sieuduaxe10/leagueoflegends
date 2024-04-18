import React, { useState } from 'react';
import AatroxQ from '../../assets/img/AatroxQ.png';
import AatroxW from '../../assets/img/AatroxW.png';
import Aatrox_Passive from '../../assets/img/Aatrox_Passive.png';
import AatroxR from '../../assets/img/AatroxR.png';
import P from '../../assets/img/P.gif';
import Q from '../../assets/img/Q.gif';
import W from '../../assets/img/W.gif';
import R from '../../assets/img/R.gif';

import './css.css';

const Section = () => {
  const [selectedImage, setSelectedImage] = useState('image1');

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const imageContent = {
    image1: {
      src: P,
      alt: 'Image 1',
      content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
        <h6  style={{ color: 'rgb(163 163 163)' }} data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">Nội Tại</h6>
        <h5 style={{ color: 'white' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">Đường Kiếm Tuyệt Diệt</h5>
        <p style={{ color: 'white' }} data-testid="abilities:description-0" className="style__AbilityInfoItemDesc-sc-1bu2ash-11 iYGfbx">Theo chu kỳ, đòn đánh kế tiếp của Aatrox gây thêm sát thương vật lý và hồi máu, dựa theo máu tối đa của mục tiêu.</p>
      </li>
      ,
    },
    image2: {
      src: Q,
      alt: 'Image 2',
      content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
        <h6  style={{ color: 'rgb(163 163 163)' }} data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">Q</h6>
        <h5 style={{ color: 'white' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">QUỶ KIẾM DARKIN</h5>
        <p style={{ color: 'white' }} data-testid="abilities:description-0" className="style__AbilityInfoItemDesc-sc-1bu2ash-11 iYGfbx">Aatrox đập kiếm xuống đất, gây sát thương vật lý. Có thể chém ba lần, mỗi lần có một diện tác dụng khác nhau.</p>
      </li>
    },
    image3: {
      src: W,
      alt: 'Image 3',
      content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
        <h6 style={{ color: 'rgb(163 163 163)' }}data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">W</h6>
        <h5 style={{ color: 'white' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">XIỀNG XÍCH ĐỊA NGỤC</h5>
        <p  style={{ color: 'white' }} data-testid="abilities:description-0" className="style__AbilityInfoItemDesc-sc-1bu2ash-11 iYGfbx">Aatrox đập kiếm xuống đất, gây sát thương lên kẻ địch đầu tiên trúng phải. Tướng và quái to phải nhanh rời vùng tác động nếu không muốn bị kéo về tâm và chịu sát thương lần nữa.</p>
      </li>
    },
    image4: {
      src: R,
      alt: 'Image 4',
      content: <li className="style__AbilityInfoItem-sc-1bu2ash-8 lGkNU is-active" data-testid="abilities:ability-0">
        <h6  style={{ color: 'rgb(163 163 163)' }} data-testid="abilities:ability:position-0" className="style__AbilityInfoItemType-sc-1bu2ash-9 hvCZWu">E</h6>
        <h5 style={{ color: 'white' }} data-testid="abilities:name-0" className="style__AbilityInfoItemName-sc-1bu2ash-10 ipQQAp">BỘ PHÁP HẮC ÁM</h5>
        <p style={{ color: 'white' }} data-testid="abilities:description-0" className="style__AbilityInfoItemDesc-sc-1bu2ash-11 iYGfbx">Nội tại giúp Aatrox hồi máu khi gây sát thương lên tướng. Kích hoạt giúp Aatrox lướt theo hướng chỉ định.</p>
      </li>
    },
  };

  return (
    <section className="section-name padding-y ">
      <div className="row">
        <div className="col-md-7">
        <h1 className='effect-text' style={{ textTransform: 'uppercase',color: 'white' }}>KỸ NĂNG</h1>
          <div style={{ marginTop: '20px' }}>
            <div className="button-container">
              <button onClick={() => handleImageClick('image1')}>
                <img style={{ width: '100px', height: '100px' }} src={Aatrox_Passive} alt="Image 1" />
              </button>
              <button onClick={() => handleImageClick('image2')}>
                <img style={{ width: '100px', height: '100px' }} src={AatroxQ} alt="Image 2" />
              </button>
              <button onClick={() => handleImageClick('image3')}>
                <img style={{ width: '100px', height: '100px' }} src={AatroxW} alt="Image 3" />
              </button>
              <button onClick={() => handleImageClick('image4')}>
                <img style={{ width: '100px', height: '100px' }} src={AatroxR} alt="Image 4" />
              </button>
            </div>
            <div style={{ marginTop: '50px', marginLeft: '50px' }}>
              {selectedImage && (
                <p>{imageContent[selectedImage].content}</p>
              )}
            </div>
          </div>
        </div>
        <aside className="col-md-5">
          <div>
            {selectedImage && (
              <div>
                <img src={imageContent[selectedImage].src} alt={imageContent[selectedImage].alt} style={{ width: '500px', height: '500px' }} />

              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Section;
