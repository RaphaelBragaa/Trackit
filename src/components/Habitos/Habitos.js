import Header from "../shared/Header"
import Menu from '../shared/Menu';
import styled from 'styled-components';
import { useState} from 'react';
import axios from 'axios';
import CriarHabitos from "./CriarHabitos";

export default function Habitos({token}){
    const[selecionado,setSelecionado]=useState(false)
    const [dias,setDias]=useState([])

    console.log(selecionado)
    function Chama(){
        setSelecionado(0)
        alert('CHAMA')
    }

    function Salvar(event){
        //event.preventDefault()
        console.log(dias)
    }

    
    console.log(token)
    return(
        <>
        <Header/>
        <MeusHabitos>
            <h1>Meus hábitos</h1> 
             <div onClick={()=>setSelecionado(true)}>+</div>
        </MeusHabitos>
        <CriarHabitos selecionado={selecionado} />
        <Dia> 
         <h2>Você não tem nenhum hábito cadastrado ainda. 
             Adicione um hábito para começar a trackear!</h2> 
        </Dia> 
        
        <Menu/>
        </>
    )
}

const MeusHabitos = styled.div`
@media (max-width: 767px){
    display:flex;
    justify-content:space-between;
    width:100%;
    margin:auto;
    font-family:'Lexend Deca', sans-serif;
    font-size:30px;
    color:#126BA5;
    margin-bottom:25px;
    padding:0px 80px 0px 80px;
    h1{
         font-weight:500;
         margin-top:5px;
    }
    div{
        display:flex;
        align-items:center;
        justify-content:center;
        width:40px;
        height:35px;
        background-color:#52B6FF;
        border-radius:6.4px;

        color: #FFFFFF;  }

}
`
const Dia = styled.div`
@media (max-width: 767px){
    width:100%;
    height:100%;
    padding:0px 80px 0px 80px;
    font-weight:400;
    font-family:'Lexend Deca', sans-serif;

    margin-top:20px;
    

    h2{
        color: #CFCFCF;
        font-size:20px;
;
    }
}
`



