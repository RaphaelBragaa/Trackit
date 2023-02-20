import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

const { REACT_APP_API_BASE_URL } = process.env;

function signIn(body) {
    const promise = axios.post(`${REACT_APP_API_BASE_URL}/auth/login`,body)

    return promise
}

function signUp(body) {
    const promise = axios.post(`${REACT_APP_API_BASE_URL}/auth/sign-up`, body)
    console.log(process.env);
    return promise
}

export const Auth = {
    signIn,
    signUp
}
