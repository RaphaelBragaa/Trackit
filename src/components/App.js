import { useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import Habitos from "./Habitos/Habitos";
import Hoje from "./Hoje/Hoje";
import Cadastro from "./SignUp/SignUp";
import UserContext from "../utils/contexts/UserContext";
import GlobalStyle from '../assets/css/globalStyles';
import Historico from './Historico/Historico';
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
                                            <Hoje token={token}/>
                                            </PrivatePage>
                                            }/>
                <Route path="/habitos" element={<PrivatePage>
                                                <Habitos token={token}/>
                                                </PrivatePage>}/>
                <Route path='/historico' element={<PrivatePage>
                                                  <Historico/>
                                                  </PrivatePage>}/>
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}