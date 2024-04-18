import React from 'react';
import "./Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Footer() {
    return (

        <footer className="section-footer" style={{ backgroundColor: '#D8BFD8' }}>
            




            <div id='footer' className="container-fluid text-white-50 footer pt-5 ">
                <div className="container py-5">
                    <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <a href="#">
                                    <div id='huyt' class="pyramid-loader">
                                        <div class="wrapper">
                                            <span class="side side11"></span>
                                            <span class="side side21"></span>
                                            <span class="side side31"></span>
                                            <span class="side side41"></span>
                                            <span class="shadow"></span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mx-auto">
                                    <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="number" placeholder="Your Email" />
                                    <button
                                        type="submit"
                                        className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white button"
                                    >
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex justify-content-end pt-3">
                                    <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href="#"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="#"><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-outline-secondary btn-md-square rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Why People Like us!</h4>
                                <p className="mb-4">typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                                <a href="" id='huy' className="btn border-secondary py-2 px-4 rounded-pill ">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Shop Info</h4>
                                <a className="btn-link" href="">About Us</a>
                                <a className="btn-link" href="">Contact Us</a>
                                <a className="btn-link" href="">Privacy Policy</a>
                                <a className="btn-link" href="">Terms & Condition</a>
                                <a className="btn-link" href="">Return Policy</a>
                                <a className="btn-link" href="">FAQs & Help</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Account</h4>
                                <a className="btn-link" href="">My Account</a>
                                <a className="btn-link" href="">Shop details</a>
                                <a className="btn-link" href="">Shopping Cart</a>
                                <a className="btn-link" href="">Wishlist</a>
                                <a className="btn-link" href="">Order History</a>
                                <a className="btn-link" href="">International Orders</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Contact</h4>
                                <p>Address: 1429 Netus Rd, NY 48247</p>
                                <p>Email: Example@gmail.com</p>
                                <p>Phone: +0123 4567 8910</p>
                                <p>Payment Accepted</p>
                                <img src={require("../assets/img/payment.png")} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </footer>
    );
}

export default Footer;
