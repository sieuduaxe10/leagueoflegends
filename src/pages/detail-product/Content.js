import React, { useState } from "react";
import './css.css'
import huy1 from '../../assets/img/h1.jpg';
import huy22 from '../../assets/img/aa.jpg';
import ReactImageMagnify from 'react-image-magnify';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Link } from "react-router-dom";
const scrollToTop = () => {
	window.scrollTo(0, 0); // Cuộn lên đầu trang mới
};
const Content = () => {
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
	const [quantity, setQuantity] = useState(1);


	function reg() {
		Swal.fire({
			title: "Thêm Giỏ Hàng Thành Công!",
			text: "Hãy nhấn 'OK' để tiếp tục mua hàng.",
			imageUrl: huy1,
			imageWidth: 400,
			imageHeight: 300,
			imageAlt: "Custom image"
		});
	}
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<section className="section-name padding-y"  >
			<div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
				<Link onClick={scrollToTop} to="/SearchBar" style={{ textDecoration: 'none' }}>
					<button id="jj" className="button">
						<span>Danh Sách Tướng</span>
					</button>
				</Link>
			</div>

			<div style={{ display: 'flex' }} className="row">
				<div class="col-md-1" style={{ fontFamily: 'Georgia', marginTop: '200px', transform: 'rotate(0deg)' }}>
					<p style={{ opacity: 0.5, color: 'white', fontSize: '18px', writingMode: 'vertical-lr' }}>
						TỔNG QUAN
					</p>
				</div>
				<aside className="col-md-10">

					<div style={{ display: 'flex', justifyContent: 'space-between' }} className="card">
						<article className="gallery-wrap">
							<div className="img-big-wrap">
								<img style={{ width: '100%', height: '600px' }} src={huy22} alt="Product" />
							</div>
						</article>


					</div>
				</aside>





			</div>


			<aside className="">


				<article className="product-info-aside">
					<div style={{ fontFamily: 'Arial', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'larger', textAlign: 'center', color: 'white' }}>
						<h2 className="title mt-3">Quỷ Kiếm Darkin</h2>
						<h2 className="title mt-3">AATROX</h2>

					</div>
					<div class="form-container">
						<form>
							<div class="form-column">
								<div class="left-column">

									<div class="rating-wrap my-3" style={{ display: 'flex', alignItems: 'center' }}>
										<h3 class="title" style={{ marginRight: '10px', color: 'white', }}>ĐỘ KHÓ :</h3>
										<div class="rating-wrap my-3" style={{ display: ' inline-block' }}>
											<input type="radio" id="star5" name="rate" value="5" />
											<label htmlFor="star5" title="text"></label>
											<input type="radio" id="star4" name="rate" value="4" />
											<label htmlFor="star4" title="text"></label>
											<input type="radio" id="star3" name="rate" value="3" />
											<label htmlFor="star3" title="text"></label>
											<input type="radio" id="star2" name="rate" value="2" />
											<label htmlFor="star2" title="text"></label>
											<input checked type="radio" id="star1" name="rate" value="1" />
											<label htmlFor="star1" title="text"></label>
										</div>
									</div>
									<div>
										<h6 className="huy">SÁT THƯƠNG VẬT LÝ</h6>

									</div>
									<div style={powerBarStyle} className="power-bar">
										<div style={powerFillStylee} className="power-filll"></div>
										<div className="power-text">{powerr}%</div>
									</div>
									<div>
										<h6 className="huy">SỨC MẠNH PHÉP THUẬT</h6>

									</div>
									<div style={powerBarStyle} className="power-bar">
										<div style={powerFillStyle} className="power-fill"></div>
										<div className="power-text">{power}%</div>
									</div>

								</div>

								<div id="nd" className="right-column">
									<p style={{ color: 'white' }} className={isExpanded ? "expanded-text" : ""}>
										Từng là những người bảo hộ cao quý của Shurima để chống lại Hư Không,
										Aatrox cùng đồng bọn cuối cùng lại trở thành một mối hiểm họa còn lớn hơn đối với cả Runeterra,
										và chỉ bị đánh bại bằng món phép thuật khôn ngoan của nhân loại. Nhưng sau nhiều thế kỉ bị giam cầm,
										Aatrox là kẻ đầu tiên một lần nữa tìm về với tự do, bằng cách vấy bẩn và biến đổi những kẻ ngu ngốc
										dám cầm thử thứ vũ khí ma thuật chứa đựng linh hồn hắn. Giờ đây, với da thịt chiếm đoạt được, hắn quay trở lại Runeterra trong một hình hài khủng khiếp tương tự trước đây, tìm kiếm sự tàn sát và trả món hận thù năm xưa.
									</p>
									{!isExpanded && (
										<button className="expand-button" onClick={toggleExpand}>
											Xem thêm
										</button>
									)}
								</div>
							</div>
						</form>
					</div>




				</article>

			</aside>



		</section>
	);
};

export default Content;
