import { useState } from "react";
import Modal from "react-modal";
import style from "./RegisterModal.module.scss";
import classNames from "classnames/bind";
import Button from "../../Button";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

const RegisterModal = ({ isOpen, onClose, toggleModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng ký
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Registration Modal"
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
          maxHeight: "654",
          height: "654px",
          borderRadius: "10px",
          padding: "40px",
        },
      }}
    >
      <div className={cx("registration-content")}>
        <IoMdClose className={cx("close-icon")} onClick={onClose} />
        <h1 className={cx("title")}>Đăng ký</h1>
        <p className={cx("notify")}>
          Đã có tài khoản ?{" "}
          <Link onClick={() => toggleModal("login")}>Đăng nhập tại đây</Link>
        </p>

        <form className={cx("registration-form")} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={cx("email")}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            className={cx("password")}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirm-password">Xác nhận mật khẩu</label>
          <input
            type="password"
            className={cx("confirm-password")}
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="dob">Ngày sinh</label>
          <input
            type="date"
            className={cx("dob")}
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <label htmlFor="gender">Giới tính</label>
          <div className={cx("gender-selection")}>
            <label htmlFor="male">Nam</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Nữ</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <label className={cx("newsletter-label")} htmlFor="newsletter">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
            Nhận thông tin từ NXB Kim Đồng
          </label>
          <Button primary className={cx("submit")}>Đăng ký</Button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal