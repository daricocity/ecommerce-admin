import { publicRequest, userRequest } from './utils';
import {
    loginStart, 
    loginSuccess, 
    loginFailure, 
    logoutSuccess, 
    getUserStart, 
    getUserSuccess, 
    getUserFailure, 
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
} from './redux/userRedux';

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
    addProductFailure,
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

// LOGOUT
export const logout = (dispatch) => {
    dispatch(logoutSuccess());
    window.location.href = "/login"
}

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
        await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

// UPDATE PRODUCT
export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try{
        await userRequest.put(`/products/${id}`, product);
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

// DELETE PRODUCT
export const deleteUser = async (id, dispatch) => {
    dispatch(deleteUserStart());
    try{
        await userRequest.delete(`/users/${id}`);
        dispatch(deleteUserSuccess(id));
    } catch (err) {
        dispatch(deleteUserFailure());
    }
};

// GET USERS
export const getUsers = async (dispatch) => {
    dispatch(getUserStart());
    try{
        const res = await userRequest.get("/users");
        dispatch(getUserSuccess(res.data));
    } catch (err) {
        dispatch(getUserFailure());
    }
};

// UPDATE USER
export const updateUser = async (id, data, dispatch) => {
    dispatch(updateUserStart());
    try{
        await userRequest.put(`/users/${id}`, data);
        dispatch(updateUserSuccess({id, data}));
    } catch (err) {
        dispatch(updateUserFailure());
    }
};