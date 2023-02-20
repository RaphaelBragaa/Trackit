import { useState, useEffect, Link } from 'react';
import axios from 'axios';
import logo from '../../assets/images/logo.png'
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'


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
        <form onSubmit={Cadastro}>
        <Logo>
        <img src={logo}/>
        <input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled}/>
        <input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled}/>
        <input type="text" placeholder="nome" required value={name} onChange={(e) => setName(e.target.value)} disabled={disabled}/>
        <input type="url" placeholder="foto" required value={image} onChange={(e) => setImage(e.target.value)} disabled={disabled}/>
        <Entrar type="submit">{loading}</Entrar>
        <Cadastrar onClick={Retorno}>Já tem uma conta? Faça login!</Cadastrar>
        </Logo>
        </form>
        </>
    )
}

const Logo = styled.div`
@media (max-width: 767px){
    margin-top:80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    font-family: 'Lexend Deca', sans-serif;

img{
    width:55%;
    margin-bottom:40px;
}
input{
    width:75%;
    height:43px;
    border: 1px solid #D4D4D4;
    border-radius:3px;
    padding-left:10px;
    margin-bottom:10px;
}

input::placeholder{
    margin-left:105px;
    font-size:18px;
    color:#DBDBDB;
}
}
`
const Entrar = styled.button`
@media (max-width: 767px){
display: flex;
width:75%;
height:43px;
justify-content: center;
align-items: center;
background-color: #52B6FF;
border-radius:3px;
font-size:18px;
color:#FFFFFF;
margin-bottom:25px;
border:none;

:active{
    background-color:#126BA5;
}
}
`
const Cadastrar = styled.div`
@media (max-width: 767px){
    text-align: center;
    color:#52B6FF;
    font-size:14.50px;
    text-decoration: underline; 
}
`


