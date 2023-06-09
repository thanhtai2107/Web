import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import classNames from 'classnames/bind';
import styles from '~/pages/Admin/components/datatable/DataTable.module.scss';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAuthConfig } from '~/service';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function ProductTable() {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Product name', width: 160 },
        {
            field: 'discription',
            headerName: 'Discription',
            width: 160,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 120,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            width: 90,
        },
        {
            field: 'sold',
            headerName: 'Sold',
            width: 90,
        },
        {
            field: 'category',
            headerName: 'Category',
            description: 'This column has a value getter and is not sortable.',
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <span>{params.row.category.name}</span>
                    </>
                );
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            description: 'Action',
            sortable: false,
            width: 160,
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
    const [product, setProduct] = useState([]);
    useEffect(() => {
        products();
    }, []);
    const products = async () => {
        const result = await axios.get('http://localhost:8080/product/list');
        console.log(result);
        setProduct(result.data);
    };
    const handleDelete = async (id) => {
        const result = await axios.delete(`http://localhost:8080/api/v2/admin/product/delete/${id}`, getAuthConfig());
        console.log(result);
        products();
    };
    const handleUpdate = (id) => {
        navigate(`/admin/product/update/${id}`);
    };
    return (
        <div className={cx('datatable')}>
            <DataGrid
                rows={product}
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

export default ProductTable;
