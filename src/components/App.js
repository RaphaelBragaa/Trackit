import { useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Habitos from "./Habitos/Habitos";
import Hoje from "./Hoje/Hoje";
import Cadastro from "./Cadastro/Cadastro";
import UserContext from "../contexts/UserContext";
import GlobalStyle from '../assets/css/globalStyles';
import Historico from './Historico/Historico';

export default function App(){
    const [token, setToken]= useState('')
    const [foto, setFoto]=useState('')
    return(
        <UserContext.Provider value={{token, setToken,foto,setFoto}}>
             <GlobalStyle/>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/hoje" element={<Hoje token={token}/>}/>
        <Route path="/habitos" element={<Habitos token={token}/>}/>
        <Route path='/historico' element={<Historico/>}/>
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}