import { publicRequest, userRequest } from './utils';
import { loginStart, loginSuccess, loginFailure } from './redux/userRedux';
import { 
    getProductStart, 
    getProductSuccess, 
    getProductFailure, 
    deleteProductStart, 
    deleteProductSuccess,
    deleteProductFailure, 
    updateProductStart, 
    updateProductSuccess, 
    updateProductFailure ,
    addProductStart, 
    addProductSuccess, 
    addProductFailure 
} from './redux/productRedux';

// LOGIN
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

// GET PRODUCTS
export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data));
    } catch (err) {
        dispatch(getProductFailure());
    }
};

// DELETE PRODUCT
export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try{
        const res = await userRequest.delete(`/products/${id}`);
        console.log(res);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

// UPDATE PRODUCT
export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try{
        dispatch(updateProductSuccess({id, product}));
    } catch (err) {
        dispatch(updateProductFailure());
    }
};

// ADD PRODUCT
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try{
        const res = await userRequest.post('/products', product);
        dispatch(addProductSuccess(res.data));
    } catch (err) {
        dispatch(addProductFailure());
    }
};