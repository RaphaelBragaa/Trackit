import styled from 'styled-components';
import { useState} from 'react';
import Semanas from './Semanas'
import lixo from '../../assets/images/lixo.png'

export default function HabitosCadastrados({name, days}){
    const [selected,setSelected]=useState(false);

    const week = ['D','S','T','Q','Q','S','S'];
    return(
        <>
       <Habito>
        <h1 key={name}>{name}</h1>  
        <Days>
        {week.map((weeq)=>{return(<Semanas week={weeq}/>)})}
        </Days>
        </Habito>
        </>
    )
}

const Habito=styled.div`
    @media (max-width: 767px){
        display:flex;
        flex-direction:column;
        justify-content:center;
        padding-left:20px;
        height: 110px;
        width:100%;
        margin:auto;
        margin-bottom:20px;
        background-color:#FFFFFF;
        border-radius:4px;
        font-family:'Lexend Deca';
        h1{
            padding-left:15px;
            font-size:19.98px;
            font-weight:400;
            color:#666666;
            margin-left:-6px;
        }
       
    } 
`

const Days=styled.div`
@media (max-width: 767px){ 
    display:flex;
    justify-content:baseline;
    margin-top:5px;

    font-family: 'Lexend Deca';


 img{
    width:13px;
    height:15px;
    margin-left:300px;
    margin-bottom:30px;
    z-index:1;
    
}
    
    
}`

