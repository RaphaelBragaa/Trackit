import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

const { API_URL } = process.env;

function signIn(body) {
    const promise = axios.post(`${API_URL}/auth/login`,body)

    return promise
}

function signUp(body) {
    const promise = axios.post(`${API_URL}/auth/sign-up`, body)

    return promise
}

export const Auth = {
    signIn,
    signUp
}
