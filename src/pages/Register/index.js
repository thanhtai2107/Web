import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '~/pages/Register/Register.module.scss';


const Register = () => {
  // const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Xử lý logic đăng ký
    // ...

    // Sau khi đăng ký thành công, chuyển hướng đến trang đăng nhập
    // history.push('/login');
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerContainer}>
        <h2 className={styles.registerTitle}>Đăng ký tài khoản</h2>
        <form className={styles.registerForm} onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Tài khoản:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="phone">Số điện thoại:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
         
          <div className={styles.formGroup}>
            <label htmlFor="address">Địa chỉ:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <button type="submit" className={styles.registerButton}>
              Đăng ký
            </button>
          </div>
        </form>
        <div className={styles.loginLink}>
          <Link to="/login">Đăng nhập</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;