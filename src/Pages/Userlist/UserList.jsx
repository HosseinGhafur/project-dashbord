import React from 'react'
import './UserList.css'
import rowsdata from '../../datachart'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function UserList() {

    const [UsersData, setUsersDta] = useState(rowsdata)
    const deleteuser = (userId) => {
        setUsersDta(UsersData.filter(users => users.id != userId))
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 110,
        },
        {
            field: "User",
            headerName: "User",
            width: 230,
            renderCell: (params) => {
                return (
                    <Link to='/' className='link'>
                        <div className="userUserList">
                            <img src={params.row.img} className="img-userList" />
                            {params.row.name}
                        </div>

                    </Link>
                )
            }
        },
        {
            field: "email",
            headerName: 'Email',
            width: 280,

        },
        {
            field: "Date",
            headerName: "Date",
            width: 180
        },
        {
            field: "Action",
            headerName: "Action",
            width: 160,
            renderCell: (params) => {
                return (
                    <div>
                        <button className='user__edit'>Edit</button>
                        <DeleteOutlineIcon className='delete-user'
                            onClick={() => deleteuser(params.row.id)}
                        />
                    </div>
                )
            }
        }
    ]

    return (
        <div className='userList'>
            <DataGrid
                className='List-grid'
                rows={UsersData}
                columns={columns}
                disableRowSelectionOnClick
                checkboxSelection
                pageSize={3}
            />
        </div>
    )
}
