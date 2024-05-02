import React from "react";
import "./style.css";
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from '../assets/img/Top.jpg';
import Rung from '../assets/img/Rung.jpg';
import Mid from '../assets/img/Mid.jpg';
import AD from '../assets/img/Ad.jpg';
import Sp from '../assets/img/Sp.jpg';
import 'animate.css';
function Header(props) {
// "https://translate.google.com/translate?hl=en&sl=vi&tl=en&u="
function chuyendoi() {
    // URL cơ bản của Google Translate với tham số ngôn ngữ và URL của trang web hiện tại
    var googleTranslateURL = 'https://translate.google.com/translate?hl=en&sl=vi&tl=en&u=' + window.location.href;
    
    // Mở URL Google Translate trong tab mới
    window.open(googleTranslateURL, '_blank');
}

    
    
    return (

        <header class="section-header  ">
            <section className="header-main">
                <div id="back" className="container-fluid">
                    <div className="container topbar d-none d-lg-block">
                        <div className="d-flex justify-content-between">
                            <div className="top-info ps-2">
                                <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#" className="text-white">123 Street, New York</a></small>
                                <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><a href="#" className="text-white">Email@Example.com</a></small>
                            </div>

                        </div>
                    </div>
                    <div className="container px-0">
                        <nav className="navbar navbar-light  navbar-expand-xl">
                            <a href="/" className="navbar-brand"><div class="pyramid-loader">
                                <div class="wrapper">
                                    <span class="side side1"></span>
                                    <span class="side side2"></span>
                                    <span class="side side3"></span>
                                    <span class="side side4"></span>
                                    <span class="shadow"></span>
                                </div>
                            </div>
                            </a>

                            <div className="collapse navbar-collapse " id="navbarCollapse">
                                <div className="navbar-nav mx-auto">
                                    <a href="/" className="nav-item nav-link active">Home</a>

                                    <a onClick={chuyendoi}  className="nav-item nav-link">Shop Detail</a>
                                    <div className="nav-item dropdown">
                                        {['SHOP '].map(
                                            (variant) => (
                                                <SplitButton
                                                    key={variant}
                                                    id={`dropdown-split-variants-${variant}`}
                                                    variant={variant.toLowerCase()}
                                                    title={variant}
                                                >
                                                    <Dropdown.Item eventKey="1">
                                                        <div className="dropdown-item-content">
                                                            <img src={Top} alt="Hình ảnh 1" />
                                                            <span className="span">Đường Trên</span>
                                                        </div>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">
                                                        <div className="dropdown-item-content">
                                                            <img src={Rung} alt="Hình ảnh 2" />
                                                            <span className="span">Rừng</span>
                                                        </div>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="3" active>
                                                        <div className="dropdown-item-content">
                                                            <img src={Mid} alt="Hình ảnh 3" />
                                                            <span className="span">Đường Giữa</span>
                                                        </div>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="4">
                                                        <div className="dropdown-item-content">
                                                            <img src={AD} alt="Hình ảnh 4" />
                                                            <span className="span">Đường Dưới </span>
                                                        </div>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item eventKey="5">
                                                        <div className="dropdown-item-content">
                                                            <img src={Sp} alt="Hình ảnh 4" />
                                                            <span className="span">Hổ trợ</span>
                                                        </div>
                                                    </Dropdown.Item>


                                                </SplitButton>
                                            ),
                                        )}
                                    </div>
                                    <a href="/login" className="nav-item nav-link">Contact</a>
                                </div>

                                <div className="widget-header mr-3">
                                    <Link href="#" className="position-relative me-4 my-auto">
                                        <div className="icon-area">
                                            <i className="fa fa-shopping-bag fa-2x text-dark"></i>
                                            <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}>3</span>
                                        </div>
                                        <small className="text"> Orders </small>
                                    </Link>
                                </div>
                                <div className="widget-header mr-3">

                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                            English
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                        <Dropdown.Item >Russian</Dropdown.Item>
                                            <Dropdown.Item href="#">French</Dropdown.Item>
                                            <Dropdown.Item href="#">Spanish</Dropdown.Item>
                                            <Dropdown.Item href="#">Chinese</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>


                            </div>

                        </nav>
                    </div>
                </div>






            </section>

        </header>

    );

}
export default Header