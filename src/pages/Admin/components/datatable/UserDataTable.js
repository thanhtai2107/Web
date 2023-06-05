import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import classNames from 'classnames/bind';
import styles from '~/pages/Admin/components/datatable/DataTable.module.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { getAuthConfig } from '~/service';
const cx = classNames.bind(styles);

function UserTable() {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 130 },
        { field: 'firstname', headerName: 'First name', width: 130 },
        { field: 'lastname', headerName: 'Last name', width: 130 },
        {
            field: 'address',
            headerName: 'Address',
            width: 160,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 90,
        },
        {
            field: 'role',
            headerName: 'Role',
            width: 120,
        },
        {
            field: 'action',
            headerName: 'Action',
            description: 'Action',
            sortable: false,
            width: 190,
            renderCell: (params) => {
                return (
                    <>
                        <div className={cx('cellAction')}>
                            <Button
                                color="success"
                                size="small"
                                variant="contained"
                                onClick={(e) => handleUpdate(params.row.id)}
                            >
                                Update
                            </Button>

                            <Button
                                color="error"
                                variant="contained"
                                size="small"
                                onClick={(e) => handleDelete(params.row.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </>
                );
            },
        },
    ];

    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    useEffect(() => {
        users();
    }, []);
    const users = async () => {
        const result = await axios.get('http://localhost:8080/api/v2/admin/user/list', getAuthConfig());
        console.log(result);
        setUser(result.data);
    };
    const handleDelete = async (id) => {
        const result = await axios.delete(`http://localhost:8080/api/v2/admin/user/delete/${id}`, getAuthConfig());
        console.log(result);
        users();
    };
    const handleUpdate = (id) => {
        navigate(`/admin/user/update/${id}`);
    };
    return (
        <div className={cx('datatable')}>
            <DataGrid
                rows={user}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}

export default UserTable;
