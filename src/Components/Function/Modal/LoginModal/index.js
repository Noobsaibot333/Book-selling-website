import { useState } from "react";
import Modal from "react-modal";
import style from "./LoginModal.module.scss";
import classNames from "classnames/bind";
import { IoMdClose } from "react-icons/io";
import Button from "../../Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
const LoginModal = ({ isOpen, onClose, toggleModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
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
          maxWidth: "580px",
          maxHeight: "440px",
          height: "650px",
          borderRadius: "10px",
          padding: "40px",
        },
      }}
    >
      <div className={cx("login-content")}>
        <IoMdClose className={cx("close-icon")} onClick={onClose} />
        <h1 className={cx("title")}>Xin chào</h1>
        <p className={cx("notify")}>
          Bạn chưa có tài khoản ?{" "}
          <Link onClick={() => toggleModal("register")}>Đăng kí tại đây</Link>
        </p>
        <form className={cx("login-form")} onSubmit={handleSubmit}>
          <label htmlFor="username"></label>
          <input
            type="text"
            className={cx("username")}
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            className={cx("password")}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button primary className={cx("submit")}>Đăng nhập</Button>
        </form>

        <div className={cx("login-social")}>
          <Button primary className={cx("social-button", "google-link")}>
            <p>Đăng nhập với Google</p>
          </Button>
          <Button primary className={cx("social-button", "facebook-link")}>
            <p>Đăng nhập với Facebook</p>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
