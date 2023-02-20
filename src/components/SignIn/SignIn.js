import { useState} from 'react';
import { Auth } from '../../services/Auth';
import { Link, useNavigate} from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner'
import { useContext, useEffect } from "react";
import UserContext from "../../utils/contexts/UserContext";
import AuthLayout from '../AuthLayout/AuthLayout';

export default function Login(){
    //const{setToken,setFoto,token,foto}=useContext(UserContext)
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("Entrar")
    const [disabled, setDisabled] = useState("")

     useEffect(() => {
         const isLogged = (JSON.parse(localStorage.getItem("trackit")))?.token;
      
       if (isLogged) {
            navigate("/hoje");
         };
   });

    function Login (event){
        event.preventDefault()
    
        const body = {
            email,
            password,
        }

        const promise = Auth.signIn(body);

        promise
            .then(res => {
                localStorage.setItem(
                    "trackit",
                    JSON.stringify({ token: res.data.token, userImage: res.data.image })
                );
             navigate("/hoje")
        })
            .catch(err => {
                console.log(err)
                alert("Dados Incorretos")
                setDisabled("")
                setLoading("Entrar")
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