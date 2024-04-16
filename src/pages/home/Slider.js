import React from "react";
import Threejs from "../home/3d"; // Import component for 3D rendering
import "./Slider.css"; // Import your CSS file
import Hinh from "../../assets/img/hq.png";
const Slider = () => {
  const power = 50; // Giá trị sức mạnh (đây chỉ là ví dụ, bạn có thể lấy giá trị này từ trạng thái của thành phần)
  const powerr = 75;
  const powerBarStyle = {
    width: '200px', // Độ rộng của thanh đo sức mạnh
    height: '20px', // Chiều cao của thanh đo sức mạnh
    border: '1px solid black', // Viền của thanh đo sức mạnh
    backgroundColor: 'lightgray', // Màu nền của thanh đo sức mạnh
    position: 'relative' // Đặt vị trí là tương đối để sử dụng position:absolute cho power-fill
  };
  const powerFillStylee = {
    height: '100%', // Chiều cao của power-fill sẽ thay đổi theo giá trị của sức mạnh
    backgroundColor: 'green', // Màu sắc của power-fill
    width: `${powerr}%`
    // Độ rộng của power-fill sẽ thay đổi dựa trên giá trị của sức mạnh
  };
  const powerFillStyle = {
    height: '100%', // Chiều cao của power-fill sẽ thay đổi theo giá trị của sức mạnh
    backgroundColor: 'green', // Màu sắc của power-fill
    width: `${power}%`
    // Độ rộng của power-fill sẽ thay đổi dựa trên giá trị của sức mạnh
  };

  return (
    <section className="section-main">
      <main className="card">
        <div className="container-fluid py-5 hero-header">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              {/* Phần 1 */}
              <div className="col-md-3">

              
                  <img src={Hinh} alt="Logo" className="logo-image" />
              

                <div>
                  <div class="button-container">
                    <a  href="/register">
                    <button class="button">
                      <div class="button__int">
                        <span class="button__span">Đăng Kí</span>
                      </div>
                    </button>
                    </a>
                    <a href="/login">
                    <button  class="button">
                      <div class="button__int">
                        <span class="button__span">Đăng Nhập</span>
                      </div>
                    </button>
                    </a>
                  </div>


                </div>
              </div>
              {/* Phần 2 */}
              <div className="col-md-6">
                <div className="d-flex justify-content-center">
                  {/* Nội dung của phần 2 */}
                  <Threejs />
                </div>
              </div>
              {/* Phần 3 */}
              <div className="col-md-3 position-absolute bottom-0 end-0">
                <form>
                  <div>
                    <h4 className="huy">KINDREDR</h4>
                    <h6 className="huy">THỢ SĂN VĨNH HẰNG</h6>
                  </div>
                  <br />
                  {/* Thanh đo sức mạnh */}
                  <div>
                    <h6 className="huy">SỨC MẠNH PHÉP THUẬT</h6>

                  </div>
                  <div style={powerBarStyle} className="power-bar">
                    <div style={powerFillStyle} className="power-fill"></div>
                    <div className="power-text">{power}%</div>
                  </div>
                  <div>
                    <h6 className="huy">SÁT THƯƠNG VẬT LÝ</h6>

                  </div>
                  <div style={powerBarStyle} className="power-bar">
                    <div style={powerFillStylee} className="power-filll"></div>
                    <div className="power-text">{powerr}%</div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Slider;
