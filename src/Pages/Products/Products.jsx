import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'
import { useState } from 'react'
import { ProductData } from '../../datachart'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Products() {

    const [products, setproducts] = useState(ProductData)


    const deleteproducts = (productId) => {
        setproducts(products.filter(products => products.id != productId))
    }

    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 130
        },
        {
            field: "product",
            headerName: "Product Name",
            width: 190,
            renderCell: (params) => {
                return (
                    <Link to={`/product/${params.row.id}`} className='link'>

                        <div className="products_list">
                            <img src={params.row.img} className="products_list-img" />
                            {params.row.title}

                        </div>
                    </Link>

                )
            }
        },

        {
            field: "price",
            headerName: "Price",
            width: 200
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.row.id}`} className='links'>
                            <button className='products_edit'>Detail</button>
                        </Link>
                        <DeleteOutlineIcon className='products__delete' onClick={() => deleteproducts(params.row.id)} />


                    </>




                )
            }
        }
    ]
    return (
        <div className='products'>
            <DataGrid
                className='products__grid'
                rows={products}
                columns={columns}
                disableRowSelectionOnClick
                checkboxSelection

            />
        </div>
    )
}
