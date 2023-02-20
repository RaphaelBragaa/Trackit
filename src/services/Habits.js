import axios from 'axios';
import dotenv from "dotenv";
import createHeaders from '../utils/hooks/createHeaders';
dotenv.config();

const { API_URL } = process.env;

function CreateHabits (body) {
    const config = createHeaders()
    const promise = axios.post(`${API_URL}/habits`, body, config)

    return promise
}

 function ListHabits(body) {
    const config = createHeaders()
    const promise = axios.get(`${API_URL}/habits`, body, config)

    return promise
 }

 function DeleteHabits({body, id}) {
    const config = createHeaders()
    const promise = axios.delete(`${API_URL}/habits/${id}`, body, config)
    return promise
}

export const Habits = {
    CreateHabits,
    ListHabits,
    DeleteHabits
}