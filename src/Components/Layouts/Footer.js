import { memo, useState } from "react";
import "../CSS/Page.scss";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaShieldHalved } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ImportImage from  "../Images/ImportImage";
import ContactModal from "../Function/Modal/ContactModal";
import { FaFacebookMessenger } from "react-icons/fa";
import classNames from "classnames/bind";
import styles from '../CSS/Pages.module.scss';
const cx = classNames.bind(styles)
function Footer() {
  const [isShowing, setIsShowing] = useState(false);
  function toggleModal() {
    setIsShowing(!isShowing);
  }
  return (
    <footer>
      <div className="row-3">
        <div className="col-6">
          <div className="col-6-1">
          <ul>
            <li><img src={ImportImage.img1} alt="CN21CLCA" id="LogoFooter"/></li>
            <li><MdLocationPin id="icon" />Số 2, Đường Võ Oanh, P.25, Q. Bình Thạnh, Thành Phố Hồ Chí Minh</li>
            <li><FaPhoneAlt id="icon" /> Hotline: 028 3512 8986</li>
            <li><FiMail id="icon" /> Email: ut-hcmc@ut.edu.vn</li>
            <li><FaShieldHalved id="icon" /> Giấy phép DKKD số 0101507251, cấp lần thứ 6 năm 2019</li>
          </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="col-6-2">
            <ul>
              <h3>HỖ TRỢ KHÁCH HÀNG</h3>
              <li><a href="#">Câu hỏi thường gặp</a></li>
              <li><a href="#">Điều khoản dịch vụ</a></li>
            </ul>
          </div>
          <div className="col-6-3">
          <h3>ĐĂNG KÝ NHẬN TIN</h3>
          <p>Hãy nhập email của bạn vào ô dưới đây để có thể nhận được tất cả tin tức mới nhất từ Kim Đồng</p>
          <form action="" className="checkmail">
            <input type="text" placeholder="Nhập email của bạn..." name="email" size={30} />
            <button type="submit"><span>Đăng ký</span></button>
          </form>
        </div>
        </div>
        <div className="col-6">
          <h3>CHÍNH SÁCH</h3>
          <ul>
            <li><a href="">Chính sách bảo mật</a></li>
            <li><a href="">Chính sách thanh toán</a></li>
            <li><a href="">Chính sách vận chuyển</a></li>
            <li><a href="">Chính sách đổi trả</a></li>
            <li><a href="http://online.gov.vn/Home/WebDetails/45834"><img src={ImportImage.img2} /></a></li>
          </ul>
        </div>
        <div className="col-6">
          <h3>CÁC KÊNH KHÁC</h3>
          <div className="icon-footer">
            <a href=""><i id="icon1"><FaSquareFacebook size={40}/></i></a>
            <a href=""><i><FaInstagramSquare size={40} /></i></a>
            <a href=""><i><FaTwitter size={40} /></i></a>
          </div>
        </div>
      </div>
      <div className={cx('messenger-icon')}>
            <FaFacebookMessenger size={40} onClick={toggleModal}/>
            <ContactModal isShowing={isShowing} hide={toggleModal} />
            </div>
    </footer>

  );
}
export default memo(Footer);