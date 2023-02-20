import { useState} from 'react';
import axios from 'axios';
import logo from '../../assets/images/logo.png'
import styled from 'styled-components';
import { Link, useNavigate} from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'
import { useContext } from "react";
import UserContext from "../../utils/contexts/UserContext";
import AuthLayout from '../AuthLayout/AuthLayout';

export default function Login(){
    const{setToken,setFoto,token,foto}=useContext(UserContext)
    
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("Entrar")
    const [disabled, setDisabled] = useState("")

    function Login (event){
        event.preventDefault()
    
        const body = {
            email,
            password,
        }
    console.log(body)
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',body)

        promise
            .then(res => {
           
             setFoto(res.data.image)
             localStorage.setItem('foto',res.data.image)
             setToken(res.data.token)
              localStorage.setItem('token',res.data.token)
             navigate("/hoje")
        })
            .catch(err => {
                console.log(err)
                alert("Dados Incorretos")
            })
    if(loading === "Entrar"){
         setLoading(<ThreeDots color="#FFFFFF" height={80} width={80} />)
         setDisabled("disabled")
    }

  }

    return(
        <>
        <AuthLayout
        Auth={Login}
        inputs={
            <>
            <input type="email"  placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled}/>
            <input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled}/>
            </>
        }
        loading={loading}
        link={'/cadastro'}
        message={'Não tem uma conta? Cadastre-se!'}
        /> 
        </>
    )
};