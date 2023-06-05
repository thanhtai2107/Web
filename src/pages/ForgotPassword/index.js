import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from '~/pages/ForgotPassword/ForgotPassword.module.scss';

const ForgotPassword = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [resetSuccess, setResetSuccess] = useState(false); // Thêm biến state resetSuccess

    // const history = useHistory();

    const handleResetPassword = (e) => {
        e.preventDefault();
        // Xử lý logic đặt lại mật khẩu

        // Simulate reset password success
        setResetSuccess(true);
    };

    return (
        <div className={styles.forgotPassword}>
            <div className={styles.forgotPasswordContainer}>
                <h2 className={styles.forgotPasswordTitle}>Quên mật khẩu.</h2>
                {resetSuccess ? ( // Kiểm tra trạng thái resetSuccess
                    <p className={styles.resetSuccessMessage}> Đặt lại mật khẩu thành công. Vui lòng đăng nhập lại!.</p>
                ) : (
                    <form className={styles.forgotPasswordForm} onSubmit={handleResetPassword}>
                        <div className={styles.formGroup}>
                            <label htmlFor="emailOrPhone">Email hoặc số điện thoại:</label>
                            <input
                                type="text"
                                id="emailOrPhone"
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="newPassword">Mật khẩu mới:</label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <button type="submit" className={styles.resetPasswordButton}>
                                Đặt lại mật khẩu
                            </button>
                        </div>
                    </form>
                )}
                <div className={styles.loginLink}>
                    <Link to="/login">Đăng nhập </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
