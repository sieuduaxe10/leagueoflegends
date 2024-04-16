import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css.css';
import huy1 from '../../assets/img/h1.jpg';

import huy from '../../assets/img/lol1.gif';
import face from '../../assets/icon/face.png';
import gg from '../../assets/icon/gg.png';
import int from '../../assets/icon/int.png';
import Logo from '../../assets/icon/riot.png';
import 'animate.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasInput, setHasInput] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Gọi API đăng nhập với username và password
  };
  function reg(){
    Swal.fire({
      title: "Thành Công!",
      text: "Hãy trải nghiệm cùng chúng tôi",
      imageUrl: huy1,
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: "Custom image"
    });
  }
  const handleInputChange = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setHasInput(true);
    } else {
      setHasInput(false);
    }
  };

  return (
    <div id='login' className="row g-5 align-items-center">
      <div className="col-md-3">
        <div className="login-form">
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <a href="/" className="brand-wrap">
              <img style={{ width: '200px', height: '300px' }} className="logo animate__animated animate__backInDown" src={Logo} alt="Logo" />
            </a>
          </div>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>Đăng nhập</h1>
          <form onSubmit={handleLogin} style={{ marginBottom: '20px' }}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  handleInputChange();
                }}
                className="form-control"
                placeholder="Nhập tên người dùng"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleInputChange();
                }}
                className="form-control"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div className="bs-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
              <Link style={{ marginRight: '10px', background: '', padding: '10px', borderRadius: '5px' }}><img src={face} alt="Apple ID" style={{ maxWidth: '50%', maxHeight: '50%' }} /></Link>
              <Link style={{ marginRight: '10px', background: '', padding: '10px', borderRadius: '5px' }}><img src={gg} alt="Apple ID" style={{ maxWidth: '50%', maxHeight: '50%' }} /></Link>
              <Link style={{ background: '', padding: '10px', borderRadius: '5px' }}><img src={int} alt="Apple ID" style={{ maxWidth: '50%', maxHeight: '50%' }} /></Link>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
              <Link onClick={reg} to={"/"} type="submit" className={`btn btn-primary ${hasInput ? 'active' : ''}`} style={{ textAlign: 'center', width: '50%' }}>
                <FaSignInAlt style={{ verticalAlign: 'middle' }} />
              </Link>
            </div>
          </form>
          <div className="additional-links" style={{ textAlign: 'center', marginBottom: '20px' }}>
            <a href="#" style={{ fontWeight: 'bold', color: 'black', marginRight: '10px' }}>Quên mật khẩu?</a>
            <span className="separator">|</span>
            <a href="/register" style={{ fontWeight: 'bold', color: 'black', marginLeft: '10px' }}>Tạo tài khoản</a>
          </div>
          <div className="text-container" style={{ textAlign: 'center' }}>
            <p className="text">
              ỨNG DỤNG NÀY ĐƯỢC BẢO MẬT BỞI HCAPTCHA VÀ TUÂN THỦ THEO CHÍNH SÁCH QUYỀN RIÊNG TƯ VÀ ĐIỀU KHOẢN DỊCH VỤ CỦA HCAPTCHA.
            </p>
          </div>
        </div>

      </div>

      <div className="col-md-9" >
        <div className="image-container">
        <img rel="preload" style={{ width: '110%', height: '100%' }} src={huy} alt="Hình ảnh" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Login;
