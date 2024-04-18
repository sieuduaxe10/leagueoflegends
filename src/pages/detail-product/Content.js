import React, { useState } from "react";
import fizzImage from '../../assets/img/Atrox.png';
import './css.css'

import ReactImageMagnify from 'react-image-magnify';

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

	return (
		<section className="section-name padding-y"  >

			<div className="row">
				<aside className="col-md-6">
					<div className="card">
						<article className="gallery-wrap">
							<div className="img-big-wrap">
								<div id="zoom" className="image-container" >
									<ReactImageMagnify {...{
										smallImage: {
											alt: 'Wristwatch by Ted Baker London',
											isFluidWidth: true,
											src: fizzImage
										},
										largeImage: {
											src: fizzImage,
											width: 1200,
											height: 1800
										}
									}} />

								</div>
							</div>
							<div className="thumbs-wrap">


								<a href="#" className="item-thumb" ><img src={fizzImage} alt="Image 1" /></a>
								<a href="#" className="item-thumb"><img src={fizzImage} alt="Image 1" /></a>
								<a href="#" className="item-thumb"><img src={fizzImage} alt="Image 1" /></a>
								<a href="#" className="item-thumb"><img src={fizzImage} alt="Image 1" /></a>
							</div>
						</article>
					</div>
				</aside>

				<aside className="col-md-5">


					<article className="product-info-aside">
						<h2 className="title mt-3">Mô hình Aatrox Huyết Nguyệt – Blood Moon Aatrox Figure </h2>
						<div className="rating-wrap my-3">

							<input type="radio" id="star5" name="rate" value="5" />
							<label htmlFor="star5" title="text"></label>
							<input type="radio" id="star4" name="rate" value="4" />
							<label htmlFor="star4" title="text"></label>
							<input type="radio" id="star3" name="rate" value="3" />
							<label htmlFor="star3" title="text"></label>
							<input type="radio" id="star2" name="rate" value="2" />
							<label htmlFor="star2" title="text"></label>
							<input checked="" type="radio" id="star1" name="rate" value="1" />
							<label htmlFor="star1" title="text"></label>

						</div>
						<div className="mb-3">
							<var className="price h4">1,000,000 VND</var>

						</div>
						<p>
							Từng là những người bảo hộ cao quý của Shurima để chống lại Hư Không,
							Aatrox cùng đồng bọn cuối cùng lại trở thành một mối hiểm họa còn lớn hơn đối với cả Runeterra,
							và chỉ bị đánh bại bằng món phép thuật khôn ngoan của nhân loại. Nhưng sau nhiều thế kỉ bị giam cầm,
							Aatrox là kẻ đầu tiên một lần nữa tìm về với tự do, bằng cách vấy bẩn và biến đổi những kẻ ngu ngốc
							dám cầm thử thứ vũ khí ma thuật chứa đựng linh hồn hắn. Giờ đây, với da thịt chiếm đoạt được, hắn quay trở lại Runeterra trong một hình hài khủng khiếp tương tự trước đây, tìm kiếm sự tàn sát và trả món hận thù năm xưa.

						</p>

						<div className="form-row mt-4">
							<div className="form-group col-md d-flex align-items-center">
								<div className="input-group mb-3 input-spinner">
									<div className="input-group-append">
										<button style={{ marginBottom: '15px', marginRight: '10px' }} onClick={handleDecreaseQuantity}>-</button>
									</div>

									<input
										style={{
											marginRight: '10px',
											width: '50px' /* Thay đổi giá trị này để điều chỉnh độ rộng */
										}}
										type="number"
										className="form-group"
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
									/>
									<div className="input-group-prepend">
										<button style={{ marginBottom: '15px' }} onClick={handleIncreaseQuantity}>+</button>
									</div>
								</div>
							</div>

							<div className="form-group col-md">
								<i className="fa fa-cart"></i>

								<button id="huy" class="btn"
									style={{ marginLeft: '20px' }}>
									Thêm vào giỏ hàng
								</button>

							</div>
						</div>
					</article>

				</aside>

			</div>

		</section>
	);
};

export default Content;
