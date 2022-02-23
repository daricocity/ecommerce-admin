import './productList.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../../apiCall';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products)

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
        { field: 'product', headerName: 'Product', width: 180, renderCell: (params) => {
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
        } },
    ];

    return (
        <div className='productList'>
            <DataGrid  
                rows={products} 
                columns={columns} 
                getRowId={row => row._id}
                pageSize={5} 
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
};

export default ProductList;
