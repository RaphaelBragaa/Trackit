import { useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Habits from "./Habits/Habits";
import TodayHabitsTracker from "./TodayHabitsTracker/TodayHabitsTracker";
import Cadastro from "./SignUp/SignUp";
import UserContext from "../utils/contexts/UserContext";
import GlobalStyle from '../assets/css/globalStyles';
import HistoryCalendar from './HistoryCalendar/HistoryCalendar';
import PrivatePage from './PrivatePage/PrivatePage';

export default function App(){
    const [token, setToken]= useState('')
    const [foto, setFoto]=useState('')
    return(
        <UserContext.Provider value={{token, setToken,foto,setFoto}}>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/hoje" element={<PrivatePage>
                                            <TodayHabitsTracker/>
                                            </PrivatePage>
                                            }/>
                <Route path="/habitos" element={<PrivatePage>
                                                <Habits/>
                                                </PrivatePage>}/>
                <Route path='/historico' element={<PrivatePage>
                                                  <HistoryCalendar/>
                                                  </PrivatePage>}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}