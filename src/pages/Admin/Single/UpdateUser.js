import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from '~/pages/Admin/Single/Single.module.scss';
import SideBar from '../components/sidebar/SideBar';
import Navbar from '../components/navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { getAuthConfig } from '~/service';

const cx = classNames.bind(styles);
function UpdateUser() {
    const navigate = useNavigate();
    const { userId } = useParams();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('');

    const loadUser = async () => {
        try {
            const result = await axios.get(`http://localhost:8080/api/v2/admin/user/${userId}`, getAuthConfig());
            console.log(result.data);
            setFirstname(result.data.firstname);
            setLastname(result.data.lastname);
            setEmail(result.data.email);
            setPhone(result.data.phone);
            setAddress(result.data.address);
            setRole(result.data.role);
        } catch (e) {
            console.error('error', e);
        }
    };

    useEffect(() => {
        loadUser();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstname', firstname);
        formData.append('lastname', lastname);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('role', role);

        try {
            const result = await axios.put(`http://localhost:8080/api/v2/admin/user/update/${userId}`, formData, {
                ...getAuthConfig(),
                'Content-Type': 'multipart/form-data',
            });
            console.log(result);
            navigate('/admin/user');
        } catch (e) {
            console.error('error update', e);
        }
    };
    return (
        <div className={cx('update')}>
            <SideBar />
            <div className={cx('updateContainer')}>
                <Navbar />
                <div className={cx('top')}>
                    <h1>Update User</h1>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('left')}></div>
                    <div className={cx('right')}>
                        <form onSubmit={handleSubmit}>
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
                                <label>Phone</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="text"
                                    placeholder="Phone"
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
                                <label>Role</label>
                                <input
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    type="text"
                                    placeholder="Role"
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

export default UpdateUser;
