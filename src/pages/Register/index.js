import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '~/pages/Register/Register.module.scss';

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault();

        const requestBody = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            password: password,
            address: address,
            phone: phone,
            email: email,
        };

        try {
            const result = await axios.post('http://localhost:8080/api/v1/register', JSON.stringify(requestBody), {
                headers: { 'Content-Type': 'application/json' },
            });
            console.log(result.data);
            navigate('/login');
        } catch (e) {
            console.error('error register', e);
        }
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
                        <label htmlFor="firstname">Tên:</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>

                        <label htmlFor="lastname">Họ:</label>
                        <input
                            type="text"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className={styles.formGroup}>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Số điện thoại:</label>
                        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="address">Địa chỉ:</label>
                        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
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
