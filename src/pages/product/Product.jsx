import './product.css';
import { userRequest } from '../../utils';
import { updateProduct } from '../../apiCall';
import Chart from '../../components/chart/Chart';
import Publish from '@material-ui/icons/Publish';
import { Link, useLocation } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Product = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const productId = location.pathname.split('/')[2];
    const [productStat, setProductStat] = useState([]);
    const product = useSelector(state => state.product.products.find(product => product._id === productId))
    const MONTHS = useMemo(() => ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],[]);

    const [inputs, setInputs] = useState(product);

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]:e.target.value}
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProduct(productId, inputs, dispatch);
    }
    
    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('orders/income?pid=' + productId);
                const list = res.data.sort((a,b) => {
                    return a._id - b._id
                })
                list.map((item) =>
                    setProductStat((prev) => [
                        ...prev,
                        {name: MONTHS[item._id - 1], Sales: item.total},
                    ])
                )
            } catch {}
        };
        getStats();
    }, [productId, MONTHS])

    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <div className="proButtons">
                    <Link to='/products'>
                        <button className="productAddButton">Back</button>
                    </Link>
                    <Link to='/newProduct'>
                        <button className="productAddButton">Create</button>
                    </Link>
                </div>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productStat} dataKey='Sales' title='Sales Performance' />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product.img} alt="" className="productInfoImg" />
                        <span className="productName">{product.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id: </span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">4123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">{product.inStock}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input 
                            type='text' 
                            // placeholder={product.title} 
                            name="title" 
                            value={inputs.title} 
                            onChange={handleChange} 
                        />

                        <label>Product Description</label>
                        <input 
                            type='text' 
                            // placeholder={product.desc} 
                            name="desc" 
                            value={inputs.desc} 
                            onChange={handleChange}
                        />

                        <label>Product Price</label>
                        <input 
                            type='text' 
                            // placeholder={product.price} 
                            name="price" 
                            value={inputs.price} 
                            onChange={handleChange}
                        />

                        <label>In Stock</label>
                        <select name='inStock' id='idStock'>
                            <option value='true'>Yes</option>
                            <option value='false'>No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={product.img} alt="" className="productUploadImg" />
                            <label for='file'><Publish/></label>
                            <input type='file' id='file' style={{display:'none'}} />
                        </div>
                        <button className="productButton" onClick={handleSubmit}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Product;
