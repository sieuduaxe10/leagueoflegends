import React from 'react';
import './CardAnimation.css'; // Đảm bảo tệp CSS nằm trong cùng thư mục
import bg1 from '../../assets/img/bg4.jpg';
import bg2 from '../../assets/img/bg2.jpg';
import bg3 from '../../assets/img/bg3.jpg';
import bg4 from '../../assets/img/bg1.jpg';
import nhanvat1 from '../../assets/img/nv4.png';
import nhanvat2 from '../../assets/img/nv3.png';
import nhanvat3 from '../../assets/img/nv1.png';
import nhanvat4 from '../../assets/img/nv2.png';

const CardAnimation = () => {
  return (
    <div id="gf" className="container-fluid">
      <div className="bladeheader sc-20966c77-0 bflcIZ" data-testid="bladeheader">
        <div className="sc-f995a07a-0 dstnll" data-testid="supertitle">
          <p style={{ fontSize: '14px', fontWeight: 'bold' }} data-testid="text">RẤT NHIỀU ĐIỀU ĐỂ</p>
        </div>
        <div className="sc-d4b4173b-0 jHxzVw" data-testid="title">
          <h1>KHÁM PHÁ</h1>
        </div>
      </div>

      <div className="sec-container">
        <div className="sec bg1">
          <img src={bg1} alt="Background 1" className="bg" />
          <div className="character-container">
            <img src={nhanvat1} alt="Character 1" className="character" />
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} className="title">Zac</h1>
          </div>
        </div>
        <div className="sec bg2">
          <img src={bg2} alt="Background 2" className="bg" />
          <div className="character-container">
            <img src={nhanvat2} alt="Character 2" className="character" />
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} className="title">Alistar</h1>
          </div>
        </div>
        <div className="sec bg3">
          <img src={bg3} alt="Background 3" className="bg" />
          <div className="character-container">
            <img src={nhanvat3} alt="Character 3" className="character" />
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} className="title">SERAPHINE</h1>
          </div>
        </div>
        <div className="sec bg4">
          <img src={bg4} alt="Background 4" className="bg" />
          <div className="character-container">
            <img src={nhanvat4} alt="Character 4" className="character" />
            <h1 style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }} className="title">Nasus</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnimation;
