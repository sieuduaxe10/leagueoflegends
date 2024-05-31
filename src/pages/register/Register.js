import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import huy from '../../assets/img/camile.gif';


import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa'; // Import the icon component

import Logo from '../../assets/icon/riot.png';
import 'animate.css';
const Login = () => {
  const [forgotPasswordChecked, setForgotPasswordChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hasInput, setHasInput] = useState(false); // State để theo dõi xem đã có nhập liệu hay chưa
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Gọi API đăng nhập với username và password
    if (password !== confirmPassword) {
      alert("Mật khẩu nhập lại không khớp!");
      return;
    }
  };

  const handleInputChange = () => {
    // Kiểm tra xem các trường dữ liệu đã được điền đầy đủ hay không
    if (username.trim() !== '' && password.trim() !== '' && confirmPassword.trim() !== '') {
      setHasInput(true);
    } else {
      setHasInput(false);
    }
  };
  

  return (
    <div className="row g-5 align-items-center">
      <div className="col-md-3">
        <div id="login" className="login-form">
          <div style={{ marginBottom: '50px', textAlign: 'center', }} className="">
            <Link to="/" className="brand-wrap">
              <img style={{ width: '200px', height: '300px' }} className="logo animate__animated animate__backInDown" src={Logo} alt="Logo" />
            </Link>
          </div>
          <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }}>Đăng Kí</h1>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  handleInputChange(); // Gọi hàm khi có thay đổi trong input
                }}
                className="form-control"
                placeholder="Nhập tên người dùng"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  handleInputChange(); // Gọi hàm khi có thay đổi trong input
                }}
                className="form-control"
                placeholder="Nhập lại mật khẩu"
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
                  handleInputChange(); // Gọi hàm khi có thay đổi trong input
                }}
                className="form-control"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <div className="additional-links" style={{ marginTop: '30px', marginLeft: '20px' }}>
              <label style={{ fontWeight: '500 ', color: 'black' }}>
                <input

                  type="checkbox"
                  checked={forgotPasswordChecked}
                  onChange={() => setForgotPasswordChecked(!forgotPasswordChecked)}

                />
                <span style={{ marginLeft: '10px' }}>Đồng ý Đăng Kí</span>
              </label>
            </div>


            <div>
              <Link  to={"/login"} type="submit" className={`btn btn-primary ${hasInput ? 'active' : ''}`} style={{ textAlign: 'center', width: '50%', marginLeft: '60px', marginTop: '30px' }}>
                <FaSignInAlt style={{ verticalAlign: 'middle' }} />
              </Link>
            </div>
          </form>
          <br />




        </div>
      </div>

      <div className="col-md-9" >
        <div className="image-container">
        <img style={{ width: '110%', height: '100%' }} src={huy} alt="Hình ảnh" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Login;
