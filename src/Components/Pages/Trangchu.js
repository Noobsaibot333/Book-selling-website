import { memo, useState } from "react";
import ImportImage from "../Images/ImportImage";
import { FaShippingFast } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa6";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsCart4 } from "react-icons/bs";
import { TiHeartFullOutline } from "react-icons/ti";

function Trangchu() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 4
    },
  };
  return (
    <div className="body">
      <div className="banner">
        <img src={ImportImage.img3}></img>
      </div>

      <div className="row-5-wrapper">
        <div className="row-5">
          <div className="block">
            <ul><li><FaShippingFast size={50} /></li>
              <li>ƯU ĐÃI VẬN CHUYỂN</li>
            </ul></div>
          <div className="block">
            <ul><li><IoIosGift size={50} /></li>
              <li>THỂ LOẠI SÁCH PHONG PHÚ</li>
            </ul></div>
          <div className="block">
            <ul><li><GiMoneyStack size={50} /></li>
              <li>KHUYẾN MÃI HẤP DẪN</li></ul></div>
          <div className="block">
            <ul><li><FaPhoneVolume size={40} /></li>
              <li>HOTLINE <br /> 03 2838 3979 <br /> 03 3319 3979</li></ul></div>
        </div>
        <div className="tab-box">
          <div className="box">
            <ul>
              <li><button className={toggleState === 1 ? "tab-active" : "tab-btn"} onClick={() => toggleTab(1)}>SÁCH MỚI</button></li>
              <li><button className={toggleState === 2 ? "tab-active" : "tab-btn"} onClick={() => toggleTab(2)}>SÁCH BÁN CHẠY</button></li>
              <li><button className={toggleState === 3 ? "tab-active" : "tab-btn"} onClick={() => toggleTab(3)}>HOT DEALS</button></li>
              <li><button className={toggleState === 4 ? "tab-active" : "tab-btn"} onClick={() => toggleTab(4)}>FLASH SALE</button></li>
            </ul>
          </div>
        </div>
        <div className={toggleState === 1 ? "product-list-active" : "product-list"} onClick={() => toggleTab(1)}>
          <div className="list">
            <div className="card" >
              <a href=""><img src={ImportImage.img4} alt="Chàng Băng Giá Và Nàng Lạnh Lùng -7(Bản Thường)" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Chàng Băng Giá Và Nàng Lạnh Lùng -7(Bản Thường)</a>
                  <br />46.750đ <span>55.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img7} alt="Gia Sư Hoàng Gia -7" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Gia Sư Hoàng Gia -7</a>
                  <br />49.300đ <span>58.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img12} alt="Horimiya Memorial Book Page.100" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Horimiya Memorial Book Page.100</a>
                  <br />97.750đ <span>115.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img8} alt="Hắc Quản Gia Tâp 11+12" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Hắc Quản Gia Tâp 11+12</a>
                  <br />98.600đ <span>116.000đ</span></p>
              </div>
            </div>

            <div className="card">
              <a href=""><img src={ImportImage.img13} alt="Biến Tấu Diogenes" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Biến Tấu Diogenes</a>
                  <br />123,200đ  <span>160.000đ</span></p>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="card" >
              <a href=""><img src={ImportImage.img11} alt="Xích Sao Băng" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Xích Sao Băng</a>
                  <br />120.000đ <span>150.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img9} alt="Hắc Quản Gia -12" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Hắc Quản Gia -12</a>
                  <br />
                  49.300đ <span>58.000đ</span></p>
              </div>
            </div>
            <div className="card" >
              <a href=""><img src={ImportImage.img6} alt="Neon Genesis Evangelion (Collector's Edition) - 4" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Neon Genesis Evangelion (Collector's Edition) - 4</a>
                  <br />
                  170.000đ <span>200.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img8} alt="Hắc Quản Gia - 11" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Hắc Quản Gia - 11</a>
                  <br />49.300đ <span>58.000đ</span></p>
              </div>
            </div>

            <div className="card">
              <a href=""><img src={ImportImage.img5} alt="Cô Gái Nơi Xứ Ngoài -10" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Cô Gái Nơi Xứ Ngoài -10</a>
                  <br />74.800đ  <span>88.000đ</span></p>
              </div>
            </div>



          </div>
        </div>

        <div className={toggleState === 2 ? "product-list-active" : "product-list"} onClick={() => toggleTab(2)}>
          <div className="list">
            <div className="card" >
              <a href=""><img src={ImportImage.img15} alt="86 - Eightysix - 8 (Bản Giới Hạn)" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">86 - Eightysix - 8 (Bản Giới Hạn)</a>
                  <br />247.000đ <span>260.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img15} alt="86 - Eightysix - 8" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">86 - Eightysix - 8</a>
                  <br />116.300đ <span>145.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img14} alt="86 - Eightysix - 7 (Bản Sưu Tầm)" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">86 - Eightysix - 7 (Bản Sưu Tầm)</a>
                  <br />275.500đ <span>290.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img14} alt="86 - Eightysix - 7" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">86 - Eightysix - 7</a>
                  <br />100.000đ <span>125.000đ</span></p>
              </div>
            </div>

            <div className="card">
              <a href=""><img src={ImportImage.img19} alt="Tokyo 卍 Revengers - 9 " /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Tokyo 卍 Revengers - 9</a>
                  <br />86.250đ  <span>115.000đ</span></p>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="card" >
              <a href=""><img src={ImportImage.img18} alt="Tokyo 卍 Revengers - 8" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Tokyo 卍 Revengers - 8</a>
                  <br />86.250đ <span>115.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img17} alt="Monster #8 - 7" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Monster #8 - 7</a>
                  <br />
                  49.300đ <span>58.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img17} alt="Monster #8 - 7 (Bright Ver. - Bản Đặc Biệt)" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Monster #8 - 7 (Bright Ver. - Bản Đặc Biệt)</a>
                  <br />
                  57.800đ <span>68.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img20} alt="Tokyo 卍 Revengers - 7" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Tokyo 卍 Revengers - 7</a>
                  <br />57.500đ <span>115.000đ</span></p>
              </div>
            </div>

            <div className="card">
              <a href=""><img src={ImportImage.img16} alt="Chào Mừng Đến Lớp Học Đề Cao Thực Lực - 4" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Chào Mừng Đến Lớp Học Đề Cao Thực Lực - 4</a>
                  <br />96.000đ  <span>120.000đ</span></p>
              </div>
            </div>



          </div>
        </div>

        <div className={toggleState === 3 ? "product-list-active" : "product-list"} onClick={() => toggleTab(3)}>
          <div className="list">
            <div className="card" >
              <a href=""><img src={ImportImage.img28} alt="Lắng Nghe Tiếng Nắng - Limit (Boxset 3 Tập)" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Lắng Nghe Tiếng Nắng - Limit (Boxset 3 Tập)</a>
                  <br />221.000đ <span>260.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img23} alt="Hình Cảnh Mất Trí" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Hình Cảnh Mất Trí</a>
                  <br />77.000đ <span>100.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img25} alt="Lũ Ngốc Bài Thi Và Linh Thú Triệu Hồi - 7" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Lũ Ngốc Bài Thi Và Linh Thú Triệu Hồi - 7</a>
                  <br />42.000đ <span>70.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img26} alt="Lũ Ngốc Bài Thi Và Linh Thú Triệu Hồi - 3.5" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Lũ Ngốc Bài Thi Và Linh Thú Triệu Hồi - 3.5</a>
                  <br />28.000đ <span>70.000đ</span></p>
              </div>
            </div>

            <div className="card">
              <a href=""><img src={ImportImage.img19} alt="Combo Nozaki & Truyện Tranh Thiếu Nữ - 1 Đến 12 " /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Combo Nozaki & Truyện Tranh Thiếu Nữ - 1 Đến 12</a>
                  <br />384,000đ  <span>480.000đ</span></p>
              </div>
            </div>
          </div>

          <div className="list">
            <div className="card" >
              <a href=""><img src={ImportImage.img22} alt="Combo Trọn Bộ Fate Zero" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Combo Trọn Bộ Fate Zero</a>
                  <br />240.750đ <span>535.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img24} alt="Combo Index Tập 1 - 4" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Combo Index Tập 1 - 4</a>
                  <br />
                  126.000đ <span>420.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img30} alt="Xa Lộ Chim Cánh Cụt" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Xa Lộ Chim Cánh Cụt</a>
                  <br />
                  60.000đ <span>120.000đ</span></p>
              </div>
            </div>

            <div className="card" >
              <a href=""><img src={ImportImage.img21} alt="Chuyến Đi Chơi Xa Của Nhà Rùa" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Chuyến Đi Chơi Xa Của Nhà Rùa</a>
                  <br />26.400đ <span>48.000đ</span></p>
              </div>
            </div>

            <div className="card">
              <a href=""><img src={ImportImage.img29} alt="Trạm Dừng Vô Định (Trọn Bộ 5 Tập)" /></a>
              <div className="hover-card">
                <button><BsCart4 size={28} /></button>
                <button><TiHeartFullOutline size={28}/></button></div>
              <div className="card-content">
                <p className="text-truncate"><a href="">Trạm Dừng Vô Định (Trọn Bộ 5 Tập)</a>
                  <br />122.500đ  <span>175.000đ</span></p>
              </div>
            </div>



          </div>
        </div>

      </div>

      <div className="row-6">
        <h3>BÀI VIẾT MỚI</h3>
        <Carousel responsive={responsive}>
          <div className="slider-box">
            <a href=""><img src={ImportImage.img31} alt="Nhà văn Nguyễn Nhật Ánh ghé thăm và chúc mừng sinh nhật lần thứ 43 của NXB Trẻ"></img></a>
            <p><a href="">NHÀ VĂN NGUYỄN NHẬT ÁNH GHÉ THĂM VÀ CHÚC MỪNG SINH NHẬT LẦN THỨ 43 CỦA NXB TRẺ</a>
              <br />
              <span>Cập nhật ngày: 26/03/2024</span>
              <br />
              Nhà văn Nguyễn Nhật Ánh ghé thăm và chúc mừng sinh nhật lần thứ 43 của NXB Trẻ (24.3.1981 - 24.3.2024)
            </p>
          </div>

          <div className="slider-box">
            <a href=""><img src={ImportImage.img32} alt="NHÂN NGÀY THÀNH LẬP ĐOÀN THANH NIÊN CỘNG SẢN HCM 26.3, ĐẠI DIỆN NXB TRẺ TẶNG HOA CHO ĐẠI DIỆN THÀNH ĐOÀN THÀNH PHỐ HỒ CHÍ MINH"></img></a>
            <p><a href="">NHÂN NGÀY THÀNH LẬP ĐOÀN THANH NIÊN CỘNG SẢN HCM 26.3, ĐẠI DIỆN NXB TRẺ TẶNG HOA CHO ĐẠI DIỆN THÀNH ĐOÀN THÀNH PHỐ HỒ CHÍ MINH</a>
              <br />
              <span>Cập nhật ngày: 26/03/2024</span>
              <br />
            </p>
          </div>

          <div className="slider-box">
            <a href=""><img src={ImportImage.img33} alt="SÁCH MỚI CỦA ROBERT GREENE LIỆU CÓ ĐÁNG ĐỂ BẠN CÂN NHẮC?"></img></a>
            <p><a href="">SÁCH MỚI CỦA ROBERT GREENE LIỆU CÓ ĐÁNG ĐỂ BẠN CÂN NHẮC?</a>
              <br />
              <span>Cập nhật ngày: 25/03/2024</span>
              <br />
              Nếu đã là “fan trung thành” của Robert Greene hay chí ít đã từng đọc qua một vài tác phẩm nổi tiếng của ông như Quy Luật Bản Chất Con Người (The Law of Human Nature)...
            </p>
          </div>

          <div className="slider-box">
            <a href=""><img src={ImportImage.img34} alt="REVIEW SÁCH “KINH TẾ HỌC THỜI KHÓ NHỌC” (GOOD ECONOMICS FOR BAD TIMES)"></img></a>
            <p><a href="">REVIEW SÁCH “KINH TẾ HỌC THỜI KHÓ NHỌC” (GOOD ECONOMICS FOR BAD TIMES)</a>
              <br />
              <span>Cập nhật ngày: 25/03/2024</span>
              <br />
              “Kinh tế học thời khó nhọc” (Good economics for Bad times) là cuốn sách được viết bởi Abhijit V. Banerjee và Esther Duflo, xem xét cách sử dụng kinh tế học để giải quyết một số thách...
            </p>
          </div>


          <div className="slider-box">
            <a href=""><img src={ImportImage.img35} alt="MƯỜI BÀI HỌC VỀ THÀNH CÔNG CỦA ÔNG CHỦ BURGER KING"></img></a>
            <p><a href="">MƯỜI BÀI HỌC VỀ THÀNH CÔNG CỦA ÔNG CHỦ BURGER KING</a>
              <br />
              <span>Cập nhật ngày: 25/03/2024</span>
              <br />
              Cuốn sách “Burger King - Câu chuyện “tuyệt ngon” về khởi nghiệp và nhượng quyền kinh doanh” của đồng sáng lập chuỗi đồ ăn nhanh huyền thoại nước Mỹ James W. McLamore là...
            </p>
          </div>

          <div className="slider-box">
            <a href=""><img src={ImportImage.img37} alt="NXB TRẺ NHẬN CHÚC MỪNG NGÀY THÀNH LẬP CỦA BAN THƯỜNG VỤ THÀNH ĐOÀN"></img></a>
            <p><a href="">NXB TRẺ NHẬN CHÚC MỪNG NGÀY THÀNH LẬP CỦA BAN THƯỜNG VỤ THÀNH ĐOÀN</a>
              <br />
              <span>Cập nhật ngày: 25/03/2024</span>
              <br />
              Nhân kỷ niệm 43 năm ngày thành lập Nhà xuất bản Trẻ, Ban thường vụ Thành Đoàn Tp.HCM đã tặng thư chúc mừng và hoa cho đại diện NXB Trẻ...
            </p>
          </div>

          <div className="slider-box">
            <a href=""><img src={ImportImage.img36} alt="GIEO TÌNH YÊU THIÊN NHIÊN CHO TRẺ"></img></a>
            <p><a href="">GIEO TÌNH YÊU THIÊN NHIÊN CHO TRẺ</a>
              <br />
              <span>Cập nhật ngày: 14/03/2024</span>
              <br />
              Ngày 13-3, tại Thảo Cầm Viên Sài Gòn, NXB Trẻ tổ chức chương trình ra mắt bộ sách "Thiên nhiên kỳ thú" và ấn phẩm Thảo Cầm Viên Sài Gòn - Kho báu trong lòng thành phố. Đây là những dự án...
            </p>
          </div>

          <div className="slider-box">
            <a href=""><img src={ImportImage.img38} alt="RA MẮT SÁCH VỀ THẢO CẦM VIÊN SÀI GÒN"></img></a>
            <p><a href="">RA MẮT SÁCH VỀ THẢO CẦM VIÊN SÀI GÒN</a>
              <br />
              <span>Cập nhật ngày: 14/03/2024</span>
              <br />
              NDO - Sáng 13/3, Nhà xuất bản Trẻ, Thảo Cầm Viên Sài Gòn phối hợp tổ chức Họp báo ra mắt hai bộ sách về Thảo Cầm Viên Sài Gòn nhân dịp kỷ niệm 160 năm thành lập Thảo Cầm Viên Sài Gòn...
            </p>
          </div>

        </Carousel>
      </div>


    </div>
  );
}
export default memo(Trangchu);