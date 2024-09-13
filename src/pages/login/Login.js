import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css.css';

import { jwtDecode } from 'jwt-decode';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Logo from '../../assets/icon/riot.png';
import 'animate.css';
import Swal from 'sweetalert2';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasInput, setHasInput] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang mới
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Gọi API đăng nhập với username và password
  };

  const reg = () => {
    Swal.fire({
      title: "Thành Công!",
      text: "Hãy trải nghiệm cùng chúng tôi",
      imageUrl: '../../assets/img/h1.jpg',
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: "Custom image"
    }).then(() => {
      window.location.reload(); // Reload trang sau khi người dùng nhấn nút OK
    });
  };
  const handleInputChange = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      setHasInput(true);
    } else {
      setHasInput(false);
    }
  };

  const handleLoginGoogle = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const userData = {
        id: decoded.sub,
        loginType: 'google',
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture
      };
      localStorage.setItem('currentUser', JSON.stringify(userData));
      reg(); // Gọi hàm reg khi đăng nhập thành công để hiển thị Swal
      navigate("/"); // Chuyển hướng tới trang chủ sau khi đăng nhập thành công
    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  };

  return (
    <div id='login' className="container-fluid py-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="login-form">
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <Link onClick={scrollToTop} to="/" className="brand-wrap">
                <img style={{ width: '200px', height: '300px' }} className="logo animate__animated animate__backInDown" src={Logo} alt="Logo" />
              </Link>
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
                <GoogleOAuthProvider clientId='384926425541-e3hus1k14fstgav6hj12n56bsjij6oh4.apps.googleusercontent.com'>
                  <GoogleLogin
                    onSuccess={handleLoginGoogle}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className='btn-google-login'
                        style={{
                          background: 'red',
                          color: 'white',
                          border: 'none',
                          padding: '10px',
                          borderRadius: '5px',
                          cursor: 'pointer'
                        }}
                      >
                        Đăng nhập với Google
                      </button>
                    )}
                  />
                </GoogleOAuthProvider>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <Link onClick={reg} to={"/"} type="submit" className={`btn btn-primary ${hasInput ? 'active' : ''}`} style={{ textAlign: 'center', width: '50%' }}>
                  <FaSignInAlt style={{ verticalAlign: 'middle' }} />
                </Link>
              </div>
            </form>
            <div className="additional-links" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <Link onClick={scrollToTop} to="#" style={{ fontWeight: 'bold', color: 'black', marginRight: '10px' }}>Quên mật khẩu?</Link>
              <span className="separator">|</span>
              <Link onClick={scrollToTop} to="/register" style={{ fontWeight: 'bold', color: 'black', marginLeft: '10px' }}>Tạo tài khoản</Link>
            </div>
            <div className="text-container" style={{ textAlign: 'center' }}>
              <p className="text">
                ỨNG DỤNG NÀY ĐƯỢC BẢO MẬT BỞI HCAPTCHA VÀ TUÂN THỦ THEO CHÍNH SÁCH QUYỀN RIÊNG TƯ VÀ ĐIỀU KHOẢN DỊCH VỤ CỦA HCAPTCHA.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;
