import React from "react";
import Modal from "react-modal";
import style from "./modal.module.scss";
import classNames from "classnames/bind";
import { IoHeartCircleSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Button from "../../Button";


const cx = classNames.bind(style);

const ContactModal = ({ isShowing, hide, showLoginModal, showRegisterModal }) => {
  const closeModal = () => {
    hide();
  };

  return (
    <Modal
      isOpen={isShowing}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          maxWidth: "500px",
          maxHeight: "500px",
          height: "650px",
          borderRadius: "10px",
          padding: "40px",
        },
      }}
    >
      <div className={cx("wrapper")}>
        <IoMdClose className={cx("close-icon")} onClick={closeModal} />

        <IoHeartCircleSharp className={cx("main-icon")} />
        <p className={cx("title")}>
          Chào bạn, cảm ơn bạn đã quan tâm đến nhà xuất bản kim đồng. Chúng tôi có thể hỗ trợ gì cho bạn
        </p>
        <Button className={cx("btn-contact")} outline large>
          Gọi hotline 1900571595
        </Button>
        <p className={cx("login-paragraph")}>Hãy đăng nhập ngay để xem những điều kiện đang có của bạn</p>
        <Button className={cx("btn-login")} large primary onClick={showLoginModal}>
          Nhà xuất bản Kim Đồng
        </Button>
        <p className={cx("notify")}>
          Hãy cùng trở thành hội viên để khám phá nhiều hơn
        </p>
        <p className={cx("messenger")}>Powered by Haravan</p>
      </div>
    </Modal>
  );
};

export default ContactModal;
