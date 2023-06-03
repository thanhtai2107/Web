import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import classNames from 'classnames/bind';
import styles from '~/pages/Admin/components/datatable/DataTable.module.scss';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const cx = classNames.bind(styles);

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
        renderCell: () => {
            return (
                <>
                    <div className={cx('cellAction')}>
                        <div className={cx('viewButton')}>Update</div>
                        <div className={cx('deleteButton')}>Delete</div>
                    </div>
                </>
            );
        },
    },
];

function ProductTable() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        products();
    }, []);
    const products = async () => {
        const result = await axios.get('http://localhost:8080/product/list');
        console.log(result);
        setProduct(result.data);
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
