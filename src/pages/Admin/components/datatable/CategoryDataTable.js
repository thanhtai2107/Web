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

function CategoryTable() {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Category', width: 130 },
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
    const [category, setCategory] = useState([]);
    useEffect(() => {
        categorys();
    }, []);
    const categorys = async () => {
        const result = await axios.get('http://localhost:8080/category/list', getAuthConfig());
        console.log(result);
        setCategory(result.data);
    };
    const handleDelete = async (id) => {
        const result = await axios.delete(`http://localhost:8080/api/v2/admin/category/delete/${id}`, getAuthConfig());
        console.log(result);
        categorys();
    };
    const handleUpdate = (id) => {
        navigate(`/admin/category/update/${id}`);
    };
    return (
        <div className={cx('datatable')}>
            <DataGrid
                rows={category}
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

export default CategoryTable;
