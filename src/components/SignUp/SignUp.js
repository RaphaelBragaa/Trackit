import { useState, useEffect, Link } from 'react';
import axios from 'axios';
import logo from '../../assets/images/logo.png'
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner';
import AuthLayout from '../AuthLayout/AuthLayout';


export default function Cadastro(){
    const {cadastro} = useParams()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState("Cadastrar")
    const [disabled, setDisabled] = useState("")

    const navigate = useNavigate()

    function Cadastro(event){
        event.preventDefault()
        const body ={
            email,
            name,
            image,
            password,
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',body)
        
        promise
            .then(res => {
            console.log(res.data)
            navigate("/")
        })
            .catch(err => {
                console.log(err)
                alert("Dados Incorretos")
            })
        
            if(loading === "Cadastrar"){
                setLoading(<ThreeDots color="#FFFFFF" height={80} width={80} />)
                setDisabled("disabled")
           }
        
    }
    function Retorno(){
        navigate("/")
    }

    return(
        <>  
       <AuthLayout
       Auth={Cadastro}
       inputs={
           <>
            <input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled}/>
            <input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled}/>
            <input type="text" placeholder="nome" required value={name} onChange={(e) => setName(e.target.value)} disabled={disabled}/>
            <input type="url" placeholder="foto" required value={image} onChange={(e) => setImage(e.target.value)} disabled={disabled}/>
           </>
       }
       loading={loading}
       link={'/'}
       message={'Já tem uma conta? Faça login!'}
       />
        </>
    )
};


