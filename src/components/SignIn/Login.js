import { useState} from 'react';
import axios from 'axios';
import logo from '../../assets/images/logo.png'
import styled from 'styled-components';
import { Link, useNavigate} from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'
import { useContext } from "react";
import UserContext from "../../utils/contexts/UserContext";

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
        <form onSubmit={Login}>
        <Logo>
        <img src={logo}/>
        <input type="email"  placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={disabled}/>
        <input type="password" placeholder="senha" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={disabled}/>
        <Entrar type="submit">{loading}</Entrar>
        <Link to="/cadastro">
        <Cadastrar>Não tem uma conta? Cadastre-se!</Cadastrar>
        </Link>
        </Logo>
        </form>
        </>
    )
}

const Logo = styled.div`

    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%;
    font-family: 'Lexend Deca', sans-serif;
    

img{
    width:30%;
    margin-bottom:2rem;
    margin-top:3rem;
}
input{
    width:30%;
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
@media (max-width: 767px){
    width:80%;
    img{
        width:50%;
    }
    input{
        width:50%;
    }
}

`
const Entrar = styled.button`

display: flex;
width:30%;
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
@media (max-width: 767px){
    width:50%;
 }
`
const Cadastrar = styled.div`

    text-align: center;
    color:#52B6FF;
    font-size:14.50px;
    text-decoration: underline; 
    margin-bottom:50px;

 


`




// localStorage.setItem('trackit', JSON.stringify(res.data))
//             localStorage.getItem('trackit')
//             setFoto(res.data.image)
//             setToken(res.data.token)
//             navigate("/hoje")


// localStorage.getItem(res.data)
// setFoto(res.data.image)
// setToken(res.data.token)
// navigate("/hoje")

// localStorage.setItem('trackit-token', JSON.stringify(res.data.token))
// localStorage.setItem('trackit-img', JSON.stringify(res.data.image))
//  setFoto(JSON.parse(localStorage.getItem('trackit-img')))
//  setToken(JSON.parse(localStorage.getItem('trackit-token')))
// navigate("/hoje")

