import axios from 'axios';
import dotenv from "dotenv";
import createHeaders from '../utils/hooks/createHeaders';
dotenv.config();

const { REACT_APP_API_BASE_URL } = process.env;

function CreateHabits (body) {
    const config = createHeaders()
    const promise = axios.post(`${REACT_APP_API_BASE_URL}/habits`, body, config)

    return promise
}

 function ListHabits(body) {
    const config = createHeaders()
    const promise = axios.get(`${REACT_APP_API_BASE_URL}/habits`, body, config)

    return promise
 }

 function DeleteHabits({body, id}) {
    const config = createHeaders()
    const promise = axios.delete(`${REACT_APP_API_BASE_URL}/habits/${id}`, body, config)
    return promise
}

export const Habits = {
    CreateHabits,
    ListHabits,
    DeleteHabits
}