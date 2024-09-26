import { memo, useState } from "react";
import "../CSS/Page.scss";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import ImportImage from "../Images/ImportImage";
import { TiHeartFullOutline } from "react-icons/ti";
import { ROUTERS } from "../Router/Router";
import { Link } from "react-router-dom";
import LoginModal from "../Function/Modal/LoginModal";
import RegisterModal from "../Function/Modal/RegisterModal";
function Header() {
  const [menu, setMenus] = useState([
    {
      name: "TRANG CHỦ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "SẢN PHẨM",
      path: ROUTERS.USER.PRODUCTS,
      isShowMenu: false,
      child:
      [
        {
          name: "Trinh Thám - Kinh Dị",
          path: ROUTERS.CATEGORRY.TOPIC1,
        },
        {
          name: "Văn Học Hiện Đại",
          path: ROUTERS.CATEGORRY.TOPIC2,
        },
        {
          name: "Văn Học Kinh Điển",
          path: ROUTERS.CATEGORRY.TOPIC3,
        },
        {
          name: "Combo Sách",
          path: ROUTERS.CATEGORRY.TOPIC8,
        },
        {
          name: "Light Novel",
          path: ROUTERS.CATEGORRY.TOPIC4,
        },
        {
          name: "Lịch Sử",
          path: ROUTERS.CATEGORRY.TOPIC9,
        },
        {
          name: "Sách Học Ngữ",
          path: ROUTERS.CATEGORRY.TOPIC5,
        },
        {
          name: "Manga-Comic",
          path: ROUTERS.CATEGORRY.TOPIC6,
        },
        {
          name: "Sách Thiếu Nhi",
          path: ROUTERS.CATEGORRY.TOPIC7,
        },
        {
          name: "Kinh Tế",
          path: ROUTERS.CATEGORRY.TOPIC10,
        },
        {
          name: "Tâm Lý Giáo Dục",
          path: ROUTERS.CATEGORRY.TOPIC11,
        },
      ]
    },
    {
      name: "TIN TỨC",
      path:"",
    },
    {
      name: "GIỚI THIỆU",
      path:"",
    },
    {
      name: "LIÊN HỆ",
      path:"",
    },
  ])
  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };
  const [modalType, setModalType] = useState(null);

  const toggleModal = (newModalType) => {
    setModalType(newModalType === modalType ? null : newModalType);
  };
  return (
    <header>
      <div className="row-1">
        <div className="col-1">
          <p id="Text">CÔNG TY CỔ PHẦN XUẤT BẢN VÀ TRUYỀN THÔNG CN21CLCA  </p>
        </div>
        <div className="col-2">
          <ul>
          <li onClick={() => openModal('login')}><a href="#">Đăng nhập</a></li>
          <li>|</li>
          <li onClick={() => openModal('register')}><a href="#">Đăng ký</a></li>
          </ul>
        </div>
      </div>
      <div className="row-2">
        <div className="col-3">
          <img src={ImportImage.img1} alt="CN21CLCA" />
        </div>
        <div className="col-4">
          <form action="" className="searchbox">
            <input type="text" placeholder="Tìm sách..." size={60}></input>
            <button type="submit"><FaSearch fontSize={25} /></button>
          </form>
        </div>
        <div className="col-5">
          <button id="btn1"><FiShoppingCart color="01a14b" fontSize={40} /></button>
          <div className="number-cart">0</div>
          <button id="btn2"><TiHeartFullOutline color="01a14b" fontSize={40} /></button>
          <div className="number-cart1">0</div>
        </div>
      </div>
      <div className="row-4">
        <div className="header-nav">
          <ul>
            {
              menu?.map((menu,menuKey) =>
              (
                <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                  <Link to={menu?.path}>{menu?.name}</Link>
                  {
                    menu.child &&
                    (
                      <ul className="menu-drop">
                        {
                          menu.child.map((childItem,childKey) =>(
                            <li key={'${menuKey}-${childKey}'}>
                          <Link to ={childItem.path}>{childItem.name}</Link>
                        </li>
                          ))}
                      </ul>
                    )
                  }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <LoginModal 
      isOpen={modalType === "login"}
      onClose={closeModal}
      toggleModal={toggleModal} />
      <RegisterModal 
      isOpen={modalType === "register"}
      onClose={closeModal}
      toggleModal={toggleModal}/>
    </header>
  );
}
export default memo(Header);