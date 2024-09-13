import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMusic } from './MusicProvider';
import Logo from '../assets/img/Lo.png';
import img from '../assets/img/Lljk.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';
import './style.css';

function Header(props) {
  const { isPlaying, toggleMusic } = useMusic();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State để kiểm tra trạng thái đăng nhập
  const [userData, setUserData] = useState(null); // State để lưu thông tin người dùng

  useEffect(() => {
    // Kiểm tra trạng thái đăng nhập từ localStorage khi component mount
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      setIsLoggedIn(true);
      setUserData(currentUser);
    }
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); // Xóa thông tin người dùng khi đăng xuất
    setIsLoggedIn(false); // Cập nhật trạng thái đăng nhập về false
    setUserData(null); // Xóa thông tin người dùng trong state
    // Thực hiện các xử lý khác (nếu cần) khi đăng xuất
  };

  return (
    <header className="section-header">
      <div id="back" className="container-fluid">
        <div className="container px-0">
          <nav className="navbar navbar-light navbar-expand-md">
            <Link to="/" className="navbar-brand" onClick={scrollToTop}>
              <div className="pyramid-loader">
                <img style={{ height: '70px', width: '80px', backgroundImage: 'none' }} src={Logo} alt="Logo" />
              </div>
            </Link>
            <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarCollapse" aria-expanded={isOpen} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/SearchBar" className="nav-link" onClick={scrollToTop}>Tướng</Link>
                </li>
                <li className="nav-item">
                  <span className="divider">|</span>
                </li>
                <li className="nav-item">
                  <Link to="/Chitiet" className="nav-link" onClick={scrollToTop}>CHI TIẾT CẬP NHẬT</Link>
                </li>
               
              </ul>
              <div style={{marginLeft:'10px'}} className="music-control">
                <Link to='/' onClick={scrollToTop}>
                  <img style={{ height: '50px' }} src={img} alt="Music" />
                </Link>
                <button onClick={toggleMusic} className="btn btn-link">
                  <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
                </button>
              </div>

              <div  className="login-logout">
                {isLoggedIn ? (
                  <>
                    <div style={{color:'white'}} className="user-info">
                    
                      <p style={{color:'white'}} className="user-email">{userData.name}</p>
                    </div>
                    <button className="btn btn-link" onClick={handleLogout}>Đăng xuất</button>
                  </>
                ) : (
                  <Link to="/login" className="btn btn-link">Đăng nhập</Link>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
