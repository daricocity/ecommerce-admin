import axios from 'axios';

const BASE_URL = 'https://ecomma-api.herokuapp.com/api';

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || "";

const TOKEN = () => {
    if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser){
        return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
    } else {
        return ''
    }
}

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN()}`}
});