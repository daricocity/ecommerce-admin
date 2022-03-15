import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false,
        users: [],
    },
    reducers:{
        // LOGIN
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutSuccess: (state) => {
            state.currentUser = null;
        },

        // GET ALL USERS
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
        },
        getUserFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },

        // DELETE USER
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(state.users.findIndex(item => item._id === action.payload), 1)
        },
        deleteUserFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },

        // UPDATE USER
        updateUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        updateUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users[state.users.findIndex(item => item._id === action.payload.id)] = action.payload.user;
        },
        updateUserFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const {
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
} = userSlice.actions;

export default userSlice.reducer;