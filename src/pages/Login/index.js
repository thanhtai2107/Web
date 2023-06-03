import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '~/pages/Login/Login.module.scss';
import { getRole } from '~/service';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Xử lý logic đăng nhập

        // Sau khi đăng nhập thành công, chuyển hướng đến trang đăng ký
        // history.push('/register');

        const requestBody = {
            username: username,
            password: password,
        };
        fetch('http://localhost:8080/api/v1/authenticate', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(requestBody),
        })
            .then((response) => Promise.all([response.json()]))
            .then(([body]) => {
                console.log(body.token);
                console.log(body.user);

                localStorage.setItem('token', body.token);
            })
            .catch((message) => {
                alert(message);
            });

        const role = getRole();
        console.log(role);
        if (role === 'USER') {
            console.log(role);
            console.log('User page');
            navigate('/');
        } else if (role === 'ADMIN') {
            navigate('/admin');
        }
    };

    return (
        <div className={styles.login}>
            <div className={styles.loginContainer}>
                <h2 className={styles.loginTitle}>Đăng nhập</h2>
                <form className={styles.loginForm} onSubmit={handleLogin}>
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
                        <button type="submit" className={styles.loginButton}>
                            Đăng nhập
                        </button>
                    </div>
                </form>
                <div className={styles.loginOptions}>
                    <Link to="/forgot-password" className={styles.forgotPasswordLink}>
                        Quên mật khẩu?
                    </Link>
                    <Link to="/register" className={styles.registerLink}>
                        Đăng kí tài khoản mới
                    </Link>
                    <div className={styles.socialLogin}>
                        <span>Đăng nhập bằng:</span>
                        <div className={styles.socialButtons}>
                            <button className={styles.googleButton}>
                                {/* <img src="C:\Users\Admin\Downloads\Web-Wev\Web-Wev\src\image>" alt="Google" /> */}
                                <FontAwesomeIcon icon={faGoogle} />
                            </button>
                            <button className={styles.facebookButton}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </button>
                            <button className={styles.gmailButton}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
