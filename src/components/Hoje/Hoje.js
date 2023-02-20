import { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dayjs from 'dayjs'
import { Link, useNavigate} from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../../utils/contexts/UserContext";
import GlobalStyle from "../../assets/css/globalStyles";

export default function Hoje(){
    const{token,foto}=useContext(UserContext)
    console.log(token)

    
     let diaSemana = dayjs().day()
     console.log(diaSemana)

     const [dia,setDia] = useState('')
     const [data,setData] = useState(dayjs().format('DD/MM/YYYY'))

     useEffect(() => {
     if(diaSemana === 0){
         setDia("Domingo")
     }
     if(diaSemana === 1){
         setDia("Segunda")
     }
     if(diaSemana === 2){
         setDia("Terça")
     }
     if(diaSemana === 3){
         setDia("Quarta")
     }
     if(diaSemana === 4){
         setDia("Quinta")
     }
     if(diaSemana === 5){
        setDia('Sexta')
     }
     if(diaSemana === 6){
         setDia("Sábado")
     }
    },[])

    

    

useEffect(() => {
     const config = {
         headers:{
            Authorization: `Bearer ${token}`}
        }
         console.log(config)
     const promise=axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);

     promise
             .then(res => {
             console.log(res.data)
         })
             .catch(err => {
                 console.log(err)
             })
 },[])


    return(
        <>
        <GlobalStyle/>
        <Dia>
         <h1>{dia}, {data}</h1>  
         <h2>Você não tem nenhum hábito cadastrado ainda. 
             Adicione um hábito para começar a trackear!</h2> 
        </Dia>   
        </>
    )
}


const Dia = styled.div`
 font-family: 'Lexend Deca', sans-serif;
    h1 {
        color: #126BA5;
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    
    h2 {
        color: #CFCFCF;
        font-size: 28px;
    }
@media (max-width: 767px){
    width:100%;
    height:100%;
    padding-left:17px;
    padding-right:17px;
    
    font-family:'Lexend Deca', sans-serif;
    
    h1{
    color:#126BA5;
    font-size:28px;
    font-weight:500;
    margin-bottom:12px;
}
    h2{
        color: #CFCFCF;
        font-size:20px;

    }
}
`

  
  
  
 