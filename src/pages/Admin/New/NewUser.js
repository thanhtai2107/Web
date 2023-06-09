import classNames from 'classnames/bind';
import styles from '~/pages/Admin/New/New.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { getAuthConfig } from '~/service';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const cx = classNames.bind(styles);
function NewUser() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('password', password);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('role', role);
        setUsername('');
        setFirstname('');
        setLastname('');
        setPassword('');
        setEmail('');
        setPhone('');
        setAddress('');
        setRole('');
        try {
            const result = await axios.post('http://localhost:8080/api/v2/admin/user/add', formData, {
                ...getAuthConfig(),
                'Content-Type': 'multipart/form-data',
            });
            console.log(result.data);
            navigate('/admin/user');
        } catch (e) {
            console.error(' error create product ', e);
        }
    };
    return (
        <div className={cx('new')}>
            <SideBar />
            <div className={cx('newContainer')}>
                <Navbar />
                <div className={cx('top')}>
                    <h1>Add new user</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('right')}>
                        <form onSubmit={handleSubmit}>
                            <div className={cx('formInput')}>
                                <label>Username</label>
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                            </div>
                            <div className={cx('formInput')}>
                                <label>First name</label>
                                <input
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                    type="text"
                                    placeholder="First name"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Last name</label>
                                <input
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    type="text"
                                    placeholder="Last name"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Role</label>
                                <input
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    type="text"
                                    placeholder="Role"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Phone number</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="text"
                                    placeholder="+0343453"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <label>Address</label>
                                <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    placeholder="Address"
                                />
                            </div>
                            <div className={cx('formInput')}>
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewUser;
