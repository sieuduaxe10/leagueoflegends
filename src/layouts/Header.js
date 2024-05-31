import React from 'react';
import { Link } from 'react-router-dom';
import { useMusic } from './MusicProvider'; // Import hook
import Logo from '../assets/img/Lo.png';
import img from '../assets/img/Lljk.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';
import './style.css';

function Header(props) {
    const { isPlaying, toggleMusic } = useMusic(); // Get state and function from context

    return (
        <header className="section-header">
            <div id="back" className="container-fluid">
                <div className="container px-0">
                    <nav  className="navbar navbar-light navbar-expand-md">
                        <a href="/" className="navbar-brand">
                            <div className="pyramid-loader">
                                <img style={{ height: '70px', width: '80px', backgroundImage: 'none' }} src={Logo} alt="Logo" />
                            </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link to="/SearchBar" className="nav-link">Tướng</Link>
                                </li>
                                <li className="nav-item">
                                    <span className="divider">|</span>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Chitiet" className="nav-link">CHI TIẾT CẬP NHẬT</Link>
                                </li>
                                <li className="nav-item">
                                    <span className="divider">|</span>
                                </li>
                            </ul>
                            <div className="music-control">
                               <Link to='/'><img style={{ height: '50px' }} src={img} alt="Music" /></Link> 
                                <button onClick={toggleMusic} className="btn btn-link">
                                    <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
