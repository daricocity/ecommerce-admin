import axios from 'axios';

const BASE_URL = 'https://ecomma-api.herokuapp.com/api';

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || "";

const TOKEN = () => {
    if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken){
        return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
    } else {
        return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTY5ZmI0NWQ1OWU4YzlmMGYyNzE2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTY1Mjk3MSwiZXhwIjoxNjQ1OTEyMTcxfQ.CPgu3SO1yQk5DSzmkV6L5xdHxqzva1p78p-PsKc9Fsc'
    }
}

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
});