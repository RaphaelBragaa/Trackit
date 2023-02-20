import axios from 'axios';
import dotenv from "dotenv";
import createHeaders from '../utils/hooks/createHeaders';
dotenv.config();

const { API_URL } = process.env;



function ListToday() {
    const config = createHeaders()
    const promise = axios.get(`${API_URL}/habits/today`, config);
    return promise
}

function CheckHabitToday (id) {
    const config = createHeaders()
    const promise = axios.post(`${API_URL}/habits/${id}/check`, config);
    return promise
}

function UncheckHabitToday (id) {
    const config = createHeaders()
    const promise = axios.post(`${API_URL}/habits/${id}/uncheck`, config);
    return promise
}

function HistoryHabitToday () {
    const config = createHeaders()
    const promise = axios.get(`${API_URL}/habits/history/daily`, config);
    return promise
}

export const Today = {
    ListToday,
    CheckHabitToday,
    UncheckHabitToday,
    HistoryHabitToday
}