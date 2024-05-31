import React from 'react';
import akali1 from "../../assets/img/up1.jpg";
import DEmo from "../../assets/img/DEMO.png";
import Lol from "../../assets/img/Lolll.jpg";
import AatroxQ from '../../assets/img/AatroxQ.png';
import AatroxW from '../../assets/img/AatroxW.png';
import Aatrox_Passive from '../../assets/img/Aatrox_Passive.png';
import AatroxR from '../../assets/img/AatroxR.png';
import { Link } from 'react-router-dom';

import 'animate.css';
import './update.css'

const Skin = () => {
    return (
        <section style={{ background: '#525252' }}>
            <div id='update' >
                <div className='container'>
                    <img style={{ width: '100%', height: '600px', textAlign: 'center', marginTop: '50px', border: '2px solid #fde68a', borderBottom: 0 }} src={akali1} alt="Akali 1" />
                    <div style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', width: '100%', textAlign: 'center', zIndex: '1' }}>
                        <h1 style={{ color: 'white', marginTop: '100px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'xx-large' }}>THÔNG TIN BẢN CẬP NHẬT 14.10</h1>
                    </div>
                </div>
            </div>
            <div className='container' >
                <h2 style={{ color: 'white', marginTop: '10px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'medium', textAlign: 'center' }}>Sẵn sàng đón MSI, Võ Đài và bản cập nhật 14.9 nào!</h2>
                <div >
                    <header style={{ color: 'white', marginTop: '50px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'xx-large' }}>TIÊU ĐIỂM CẬP NHẬT</header>
                    <div style={{ textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
                        <span className="content-border">
                            <Link to="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt323cd456fdf5d3a2/6631e2d2cb2cbb32d9d6d07f/LOL_14.9_Patch-Highlights_TW_1920x1080_VN.jpg" target="_blank" className="skins cboxElement">
                                <img style={{ display: 'block', margin: '0 auto', width: '70%', height: '500px' }} src={Lol} alt="Akali 1" />
                            </Link>
                        </span>
                        <p style={{ color: 'white', marginTop: '10px' }}  >Akali Bóng Ma Hỏa Ảnh, Brand Bóng Ma Hỏa Ảnh, Kayle Bóng Ma Hỏa Ảnh, Malzahar Bóng Ma Hỏa Ảnh, Nocturne Bóng Ma Hỏa Ảnh, Varus Bóng Ma Hỏa Ảnh và Kayle Bóng Ma Hỏa Ảnh - Hàng Hiệu sẽ ra mắt vào lúc 02:00 ngày 02/05/2024 (giờ Việt Nam).</p>
                    </div>
                </div>
                <div >
                    <header style={{ color: 'white', marginTop: '50px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'xx-large' }}>CẬP NHẬT THÔNG THẠO TƯỚNG</header>
                    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
                        <blockquote style={{ color: 'white' }} className="blockquote context">
                            Hệ thống Thông Thạo mới và được nâng cấp sẽ ra mắt trong LMHT ở phiên bản này! Những vị tướng chính là "linh hồn" của LMHT, mọi người chơi đều có một tướng "tủ" của riêng mình và Thông Thạo Tướng giúp phản ánh niềm đam mê đó trong trò chơi. Đây còn là phương thức giúp nhiều người chơi thể hiện sự tiến bộ về kỹ năng, nhất là đối với những ai không mấy "mặn mà" với chế độ Đấu Xếp Hạng.<br /><br /> Chúng tôi sẽ cập nhật Thông Thạo Tướng để cải thiện hệ thống này cho người chơi theo một cách tương xứng với những gì đã hứa hẹn. Ví dụ, bạn sẽ không thực sự ngừng tăng thông thạo tướng sau khi đã đạt cấp 7, và một trong những mục tiêu của cập nhật này là để phản ánh điều đó. Nhưng sẽ không chỉ có vậy! Với cập nhật này, chúng tôi cũng đã bổ sung những tính năng sau:
                        </blockquote><ul style={{ color: 'white' }}>
                            <li>Cấp Thông Thạo Tướng không giới hạn</li>
                            <li>Tiến trình & phần thưởng Thông Thạo cho mỗi Kỳ</li>
                            <li>Bộ Thông Thạo Tướng & phần thưởng cho mỗi Kỳ</li>
                            <li>Danh Hiệu Tướng có thể được mở khóa ở Thông Thạo Cấp 10</li>
                        </ul>
                        <span className="content-border">
                            <Link to="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte27e4694105acee0/663c156670ebba24bfab966a/CMU_DEMO.png?disposition=inline" target="_blank" className="skins cboxElement">
                                <img style={{ display: 'block', margin: '0 auto', width: '50%', height: '500px' }} src={DEmo} alt="Akali 1" />
                            </Link>
                        </span>
                    </div>
                </div>
                <div>
                    <header style={{ color: 'white', marginTop: '50px', textTransform: 'uppercase', fontWeight: 'bold', fontSize: 'xx-large' }}>TƯỚNG</header>
                    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', color: 'white' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}> <Link to="/Detail" class="reference-link">
                            <img src="https://cdn.mobalytics.gg/assets/tft/images/champions/icons/set9-5/aatrox.png?v=5" />
                        </Link>
                            <h3 style={{ marginLeft: '20px' }} id="patch-corki" class="change-title">
                                <Link style={{ marginLeft: '20px', textDecoration: 'none', color: '#fcd34d' }} to="/Detail">AATROX</Link>
                            </h3></div>


                        <h4 style={{ marginTop: '20px' }} class="change-detail-title">Chỉ Số Cơ Bản</h4>
                        <ul>
                            <li><strong>Máu Cơ Bản</strong>: 610 ⇒ 640</li>
                            <li><strong>Máu Theo Cấp</strong>: 103 ⇒ 100</li>
                            <li><strong>Giáp Cơ Bản</strong>: 28 ⇒ 30</li>
                            <li><strong>Giáp Theo Cấp</strong>: 4,7 ⇒ 4,5</li>
                            <li><strong>Sức Mạnh Công Kích Cơ Bản</strong>: 61 ⇒ 55</li>
                            <li><strong>Tốc Độ Đánh</strong>: 0,638 ⇒ 0,644</li>
                            <li><strong>Hồi Năng Lượng Tăng Mỗi Cấp</strong>:        0,55 ⇒ 0,7</li>
                            <li><strong>Khoảng Cách Phát Hiện Mục Tiêu</strong>: 500 ⇒ 550 Đây là khoảng cách Corki phát hiện mục tiêu khi tấn công-di chuyển ngang qua chúng.</li>
                            <li>Điều chỉnh lại thời gian thi triển đòn đánh thường của Corki để ra đòn ở một khung hình thích hợp hơn trong hoạt ảnh tấn công. Đòn đánh thường được thi triển chậm hơn một chút.</li>
                        </ul>
                        <hr class="divider" />
                        <h4 className="change-detail-title ability-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src="https://am-a.akamaihd.net/image?f=http://ddragon.leagueoflegends.com/cdn/14.9.1/img/passive/Corki_RapidReload.png" />
                            <span style={{ marginLeft: '10px' }}>Nội Tại - Đạn Hextech</span>
                        </h4>
                        <ul>
                            <li><strong>Sát Thương</strong>: 20% Sát Thương Vật Lý và 80% Sát Thương Phép ⇒ 100% Sát Thương Vật Lý và 15% Sát Thương Chuẩn</li>
                            <li><strong>Hàng Tiếp Tế</strong>: Bị loại bỏ</li>
                        </ul>
                        <hr class="divider" />
                        <h4 className="change-detail-title ability-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={AatroxQ} />
                            <span style={{ marginLeft: '10px' }}>Q - Bom Phốt-pho</span>
                        </h4>
                        <ul>
                            <li><strong>Sát Thương</strong>: 75/120/165/210/255 (+70% SMCK cộng thêm) (+50% SMPT) ⇒ 70/110/150/290/230 (+120% SMCK cộng thêm) (+70% SMPT)</li>
                            <li><strong>Hồi Chiêu</strong>: 8 ⇒ 9/8,5/8/7,5/7</li>
                            <li><strong>Năng Lượng</strong>: 60/70/80/90/100 ⇒ 60/65/70/75/80</li>
                            <li><strong>Tốc Độ Đường Đạn</strong>: 1.000 ⇒ 1.100</li>
                            <li>Điều chỉnh lại hoạt ảnh để ra đòn ở một thời điểm thích hợp hơn trong hoạt ảnh. Thời gian thi triển 0,25 giây không đổi.</li>
                        </ul>
                        <hr class="divider" />
                        <h4 className="change-detail-title ability-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={AatroxW} />
                            <span style={{ marginLeft: '10px' }}>W - Thảm Lửa</span>
                        </h4>
                        <ul>
                            <li><strong>Năng Lượng</strong>: 80 ⇒ 80/85/90/95/100</li>
                            <li>Giờ sẽ gây ra tất cả các đợt sát thương một cách nhất quán hơn. Thường gây thêm 10% sát thương nếu mục tiêu đứng trong vùng ảnh hưởng suốt toàn bộ thời gian hiệu lực.</li>
                            <li>Sát thương theo thời gian giờ sẽ vẫn tồn tại trong 1 giây sau khi rời khỏi vùng ảnh hưởng.</li>
                            <li>Không còn có thể gây ra nhiều hơn sát thương tối đa nếu mục tiêu chạy dọc theo vùng gây sát thương của Thảm Lửa</li>
                            <li>Hiệu ứng hạt đã được gia tăng tỉ lệ để phù hợp với phạm vi gây sát thương</li>
                            <li>Hiệu ứng hạt gây sát thương đã được điều chỉnh để bớt rối mắt</li>
                        </ul>
                        <hr class="divider" />
                        <h4 className="change-detail-title ability-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={AatroxR} />
                            <span style={{ marginLeft: '10px' }}>E - Súng Máy</span>
                        </h4>
                        <ul>
                            <li><strong>Loại Sát Thương</strong>: 50% sát thương phép và 50% sát thương vật lý ⇒ 100% sát thươngvật lý</li>
                            <li><strong>Sát Thương</strong>: 120/170/230/280/320 (+250% SMCK cộng thêm) ⇒ 100/150/200/250/300 (+200% SMCK cộng thêm)</li>
                            <li><strong>Hồi Chiêu</strong>: 16 ⇒ 12</li>
                            <li><strong>Cào Xé Giáp/Kháng Phép</strong>: 8/11/14/17/20 ⇒ 12/15/18/21/24</li>
                            <li><strong>Thời gian đạt mức cào xé tối đa</strong>: 8 lần đánh trúng (2 giây) ⇒ 4 lần đánh trúng (1 giây)</li>
                            <li><strong>Năng Lượng</strong>: 50 ⇒ 50/55/60/65/70</li>
                        </ul>
                        <hr class="divider" />
                        <h4 className="change-detail-title ability-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={Aatrox_Passive} />
                            <span>R - Tên Lửa Định Hướng</span>
                        </h4>
                        <ul>
                            <li><strong>Sát Thương</strong>: 80/115/150 (+25/50/75% SMCK) (+12% SMPT) ⇒ 80/180/280 (+70% SMCK) (loại bỏ tỉ lệ SMPT)</li>
                            <li><strong>Năng Lượng</strong>: 20 ⇒ 35</li>
                            <li><strong>Số Lượng Tên Lửa Tối Đa</strong>: 7 ⇒ 4</li>
                            <li><strong>Thời Gian Hồi Tích Trữ</strong>: 12/11/10 ⇒ 20</li>
                            <li>Mới - Đòn đánh thường trúng tướng địch sẽ làm giảm thời gian hồi tích trữ của Tên Lửa Định Hướng đi 2 - 4 giây dựa theo tỉ lệ chí mạng</li>
                            <li>Mới - Lần đầu tiên nâng cấp kỹ năng này sẽ cho 2 tên lửa</li>
                        </ul>
                    </div>



                </div>

            </div>
        </section>
    );
}

export default Skin;
