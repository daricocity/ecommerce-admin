import './userList.css';
import { useState } from 'react';
import { userRows } from '../../data';
import {Link} from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

const UserList = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 150, renderCell: (params) => {
            return (
                <>
                <div classmane='userListuser'>
                    <img className='userListImg' src={params.row.avatar} alt='' />
                </div>
                {params.row.username}
                </>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction', width: 200 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={'/user/'+params.row.id}>
                        <button className='userListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
                </>
            )
        } },
    ];

    return (
        <div className='userList'>
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
};

export default UserList;
