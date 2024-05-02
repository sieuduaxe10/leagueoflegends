import React, { useState } from "react";
import fizzImage from '../../assets/img/Atrox.png';
import './css.css'
import huy1 from '../../assets/img/h1.jpg';
import huy22 from '../../assets/img/aa.jpg';
import ReactImageMagnify from 'react-image-magnify';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const Content = () => {
	const [quantity, setQuantity] = useState(1);

	const handleIncreaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const handleDecreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
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

	return (
		<section className="section-name padding-y"  >

<div className="row">
<div class="col-md-1" style={{ fontFamily: 'Georgia', marginTop: '200px',transform: 'rotate(0deg)' }}>
                    <p style={{ opacity: 0.5 ,color: 'white', fontSize: '18px' , writingMode: 'vertical-lr'}}>
					TỔNG QUAN
                    </p>
                </div>
				<aside className="col-md-10">
					<div className="card">
						<article className="gallery-wrap">
							<div className="img-big-wrap">
								
									<img style={{ width: '100%',height:'100%' }}  src={huy22} alt="Product" />

								
							</div>

						</article>
					</div>
				</aside>
				</div>


				<aside className="">


					<article className="product-info-aside">
						<div style={{ textAlign: 'center', fontFamily: 'Tahoma',color: 'white' }}>
							<h2 className="title mt-3">Quỷ Kiếm Darkin</h2>
							<h2 className="title mt-3">AATROX</h2>

						</div>
						<div class="form-container">
							<form>
								<div class="form-column">
									<div class="left-column">

										<div class="rating-wrap my-3" style={{ display: 'flex', alignItems: 'center' }}>
											<h3 class="title" style={{ marginRight: '10px',color: 'white', }}>Đánh giá :</h3>
											<div  class="rating-wrap my-3"  style={{ display: ' inline-block'}}>
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
										<div style={{ display: 'flex', alignItems: 'center' }}>
											<h3 className="title" style={{ marginRight: '10px',color: 'white', }}>Giá:</h3>
											<var  style={{color: 'white', }} className="price h4">1,000,000 VND</var>
										</div>
									</div>

									<div class="right-column">
										<p style={{color: 'white',}}>
											Từng là những người bảo hộ cao quý của Shurima để chống lại Hư Không,
											Aatrox cùng đồng bọn cuối cùng lại trở thành một mối hiểm họa còn lớn hơn đối với cả Runeterra,
											và chỉ bị đánh bại bằng món phép thuật khôn ngoan của nhân loại. Nhưng sau nhiều thế kỉ bị giam cầm,
											Aatrox là kẻ đầu tiên một lần nữa tìm về với tự do, bằng cách vấy bẩn và biến đổi những kẻ ngu ngốc
											dám cầm thử thứ vũ khí ma thuật chứa đựng linh hồn hắn. Giờ đây, với da thịt chiếm đoạt được, hắn quay trở lại Runeterra trong một hình hài khủng khiếp tương tự trước đây, tìm kiếm sự tàn sát và trả món hận thù năm xưa.
										</p>
									</div>
								</div>
							</form>
						</div>



						<div className="form-row mt-5">
							<div className="form-group col-md d-flex align-items-center"style={{ display: 'flex', alignItems: 'center' }}>
								<h16>So luong</h16>
								<div style={{ marginLeft: '400px' }} className="input-group mb-3 input-spinner">

									<div className="input-group-append">
										<button style={{ marginBottom: '15px', marginRight: '10px' }} onClick={handleDecreaseQuantity}>-</button>
									</div>

									<input
										style={{
											marginRight: '10px',
											width: '50px', /* Thay đổi giá trị này để điều chỉnh độ rộng */
											textAlign:'center' 
										}}
										type="number"
										className="form-group"
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
									/>
									<div className="input-group-prepend">
										<button style={{ marginBottom: '15px'}} onClick={handleIncreaseQuantity}>+</button>
									</div>
								</div>
							</div>

							<div className="form-group col-md">
								<i className="fa fa-cart"></i>

								<button id="huy" class="btn" onClick={reg}
									style={{ marginLeft: '20px' }}>
									Thêm vào giỏ hàng
								</button>

							</div>
						</div>
					</article>

				</aside>

		

		</section>
	);
};

export default Content;
