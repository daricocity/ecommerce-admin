import './productList.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../apiCall';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

const ProductList = () => {
    document.title = 'Wolmart | Product List';
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    const productList = products !==null && products !== undefined && products.length > 0 && products

    // GET PRODUCTS
    useEffect(() => {
        getProducts(dispatch);
    },[dispatch])

    // DELETE PRODUCT
    const handleDelete = (id) => {
        deleteProduct(id, dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'product', headerName: 'Product', width: 240, renderCell: (params) => {
            return (
                <>
                    <div classmane='productListItem'>
                        <img className='productListImg' src={params.row.img} alt='' />
                    </div>
                    {params.row.title}
                </>
            )
        } },
        { field: 'inStock', headerName: 'Stock', width: 120 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={'/product/'+params.row._id}>
                        <button className='productListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline 
                        className='productListDelete' 
                        onClick={() => handleDelete(params.row._id)} 
                    />
                </>
            )
        }},
    ];

    return (
        <div className='productList'>
            {productList.length > 0 ? (
                <DataGrid  
                    rows={productList} 
                    columns={columns} 
                    getRowId={row => row._id}
                    pageSize={10} 
                    checkboxSelection
                    disableSelectionOnClick
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

export default ProductList;
