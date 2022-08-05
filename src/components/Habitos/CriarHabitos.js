import styled from 'styled-components';
import { useState} from 'react';
import Semana from './Semana';


export default function CriarHabitos({selecionado,}){
    const [dias,setDias]=useState([])
    const [nomeHabito, setnomeHabito] = useState("");
    const week = ['D','S','T','Q','Q','S','S']

    function Salvar(){
        console.log('ignore')
    }

   
    return(
    <>
     <form onSubmit={Salvar}>
        <CriarHabito selecionado={selecionado}>
        <input type='text' placeholder='nome do hábito' onChange={(e) => setnomeHabito(e.target.value)}/>
        <Days>
            {week.map((weeq)=>{return(<Semana  setDias={setDias} dias={dias}week={weeq}/>)})}
        </Days>
        <Save>
        <h1>Cancelar</h1>
        <button type="submit">Salvar</button>
        </Save>
        </CriarHabito>
        </form>
    </>)

}

const CriarHabito = styled.div`
@media (max-width: 767px){
    display:${props=>(props.selecionado) ? 'flex' : 'none'};
    flex-direction:column;
    justify-content:center;
    padding:0px 80px 0px 80px;
    margin:auto;
    width:100%;
    height:180px;
    background-color:#FFFFFF;
    border-radius:5px;
    input{
        margin:auto;
        margin-top:0px;
        margin-bottom:0px;
        width:100%;
        height:45px;
        border-radius:5px;
        border:1px solid #D4D4D4;
        font-family: 'Lexend Deca';
        padding-left:15px;
       
    }
    input::placeholder{
        color:#DBDBDB;
        font-size:20px;
    }

}
`

const Save=styled.div`
@media (max-width: 767px){
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-left:170px;
    text-align:center;
    width:48%;
    height:35px;
    font-family: 'Lexend Deca';

    h1{
        text-align:center;
        color:#52B6FF;
        font-size:16px;
    }

    button{
        height:37px;
        width:80px;
        background-color:#52B6FF;
        border:none;
        color: #FFFFFF;
        border-radius:4px;
        font-size:16px;

    }
}
`
const Days=styled.div`
@media (max-width: 767px){ 
    display:flex;
    justify-content:baseline;
    margin-top:5px;
    height:50px;
    font-family: 'Lexend Deca';


    
    
}
`