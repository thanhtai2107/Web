import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import classNames from 'classnames/bind';
import styles from '~/pages/Admin/components/datatable/DataTable.module.scss';
const cx = classNames.bind(styles);

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'address',
        headerName: 'Address',
        width: 90,
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) => {
            return (
                <>
                    <span>{params.row.lastName}</span>
                    <p>{params.row.firstName}</p>
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

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', address: 'Linh Trung', phone: '01232132' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
function ProductTable() {
    return (
        <div className={cx('datatable')}>
            <DataGrid
                rows={rows}
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