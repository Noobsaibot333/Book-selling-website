import classNames from "classnames/bind";
import styles from "./Product.module.scss"
import Button from "../Button"
import Slideshow from "../Slideshow"
import { useState } from "react";
const cx = classNames.bind(styles)
function Detail({images=[], infor={}}) {
    //Hàm xử lí số lượng thêm vào giỏ hàng
    const [count,setCount] = useState(0);
    const handleDecrement = () => {
        setCount((prevCount) => Math.max(prevCount - 1, 0));
      };
    
      const handleIncrement = () => {
        setCount(count + 1);
      };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('contain')}>
                <div className={cx('product-illustration')}>
                    <div className={cx('product-image')}>
                        <Slideshow images={images} />
                    </div> 
                    <div className="status"><p>Còn hàng</p></div>
                </div>
                <div className={cx('product-content')}>
                    <div className={cx('product-title')}>{infor.title}</div>
                    <div className={cx('product-code')}>{infor.code}</div>
                    <div className={cx('product-prince')}>
                        <span className={cx('prince-current')}>{infor.princeCurren}</span> 
                        <span className={cx('prince-old')}>{infor.princeOld}</span> 
                    </div>
                    <div className={cx('product-describe')}>
                        <div className={cx('product-infor')}>
                            <strong>Tác giả</strong>
                            <span>{infor.author}</span>
                        </div>
                        <div className={cx('product-infor')}>
                            <strong>Năm xuất bản</strong>
                            <span>{infor.public}</span>
                        </div>
                        <div className={cx('product-infor')}>
                            <strong>Kích thước</strong>
                            <span>{infor.size}</span>
                        </div>
                        <div className={cx('product-infor')}>
                            <strong>Nhà xuất bản</strong>
                            <span>{infor.placeCompany}</span>
                        </div>
                        <div className={cx('product-infor')}>
                            <strong>Hình thức</strong>
                            <span>{infor.format}</span>
                        </div>
                    </div>

                    <div className={cx('product-brief')}>
                        <strong>Nội dung:</strong>
                        {infor.briefs.map((brief, index)=>
                            <p key={index}>
                                {brief}
                                <br/><br/>
                            </p>
                        )}
                    </div>
                    <div className={cx('product-voucher')}>
                        <h3>Mã giảm giá</h3>
                        <div className={cx('voucher-btn')}>
                            <Button outline small>Giảm đơn 20k</Button>
                            <Button outline small>Giảm đơn 20k</Button>
                            <Button outline small>Giảm đơn 80k</Button>
                        </div>
                    </div>           
                    <div className={cx('product-selector')}>
                        <span>Phiên bản</span>
                        <select className={cx("product-version")}>
                            <option value="standard">Bản thường</option>
                            <option value="special">Bản đặc biệt</option>
                        </select>
                    </div>
                    <div className={cx('product-action')}>
                        <div className={cx('product-quanlity')}>
                            <Button onClick={handleDecrement} primary small>-</Button>
                            <Button>{count}</Button>
                            <Button onClick={handleIncrement} primary small>+</Button>
                            <Button primary small className={cx('product-cart')}>Thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;