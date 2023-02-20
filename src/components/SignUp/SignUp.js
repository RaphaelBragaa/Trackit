import { useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { ThreeDots } from  'react-loader-spinner';
import AuthLayout from '../AuthLayout/AuthLayout';
import { Auth } from '../../services/Auth';


export default function Cadastro(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState("Cadastrar")
    const [disabled, setDisabled] = useState("")

    const navigate = useNavigate()

    function Registration(event){
        event.preventDefault()
        const body ={
            email,
            name,
            image,
            password,
        }
        const promise = Auth.signUp(body)
        promise
            .then(res => {
            console.log(res.data)
            navigate("/")
        })
            .catch(err => {
                console.log(err + ' ESSE ERRO')
                alert("Dados Incorretos")
                setDisabled("")
                setLoading("Cadastrar")
            })
        
            if(loading === "Cadastrar"){
                setLoading(<ThreeDots color="#FFFFFF" height={80} width={80} />)
                setDisabled("disabled")
           }
        
    }

    return(
        <>  
       <AuthLayout
       Auth={Registration}
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


