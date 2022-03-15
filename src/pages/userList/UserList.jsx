import './userList.css';
// import { userRows } from '../../data';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { CircularProgress } from '@material-ui/core';
import { getUsers, deleteUser } from '../../apiCall';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

const UserList = () => {
    document.title = 'Wolmatz | User List'
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.user)
    const data = users !==null && users !== undefined && users.length > 0 && users

    // GET USERS
    useEffect(() => {
        getUsers(dispatch);
    },[dispatch])

    // DELETE USER
    const handleDelete = (id) => {
        deleteUser(id, dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 150, renderCell: (params) => {
            return (
                <>
                    <div classmane='userListuser'>
                        <img className='userListImg' src='img/person.jpg' alt='' />
                    </div>
                    {params.row.username}
                </>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'isAdmin', headerName: 'Admin Status', width: 120 },
        { field: 'createdAt', headerName: 'Date Register', width: 200 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={'/user/'+params.row._id}>
                        <button className='userListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row._id)} />
                </>
            )
        }},
    ];

    return (
        <div className='userList'>
            {data.length > 0 ? (
                <DataGrid 
                    disableSelectionOnClick
                    rows={data}
                    columns={columns}
                    pageSize={10}
                    checkboxSelection 
                    getRowId={row => row._id !== null && row._id !== undefined && row._id } 
                />
            ) : (
                <div style={{
                    width: "100%",
                    height: "20vh",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent'
                }}>
                    <CircularProgress />
                </div>
            )}
        </div>
    )
};

export default UserList;
