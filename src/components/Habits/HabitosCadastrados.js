import styled from 'styled-components';
import { useState} from 'react';
import Semanas from './Semanas';
import ServiceHabits from '../../services/Habits';
import { BsTrash3Fill } from 'react-icons/bs';

export default function HabitosCadastrados({name, days, id}){

    function deleteHabit(id){
        const req = ServiceHabits.DeleteHabits(id);
        req
            .then(res => console.log(res.status))
            .catch(err => console.log(err));
    }
    
    const week = ['D','S','T','Q','Q','S','S'];
    return(
        <>
            <Habito>
                <h1 key={name}>{name}</h1>  
                <Days>
                {week.map((weeq, index)=>{return(<Semanas days={days} week={weeq} index={index}/>)})}
                </Days>
                <DeleteIcon onClick={()=> deleteHabit(id)}/>
            </Habito> 
            
      </>
    )
}



const Habito=styled.div`
   @media (max-width: 767px){
    display:'flex';
    flex-direction:column;
    justify-content:center;
    position: relative;
    margin:auto;
    width:90%;
    min-height:11vh;
    background-color:#FFFFFF;
    border-radius:5px;
    padding-bottom:14px;
    padding-top:10px;
    margin-bottom:15px;
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
} 
`

const DeleteIcon = styled(BsTrash3Fill)`
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;
`

