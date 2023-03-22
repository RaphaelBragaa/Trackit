import styled from 'styled-components';
import { useState} from 'react';

export default function WeekSelector({disabled, week,setDays,days,index}){
    const [selected,setSelected]=useState(false)
    
    function Check(day) {
      if(!selected){
        setSelected(true)
        setDays([...days,day])
      }else{
        setSelected(false)
        const array = [...days]
        const index = array.indexOf(day);
        if (index > -1) {
          array.splice(index, 1);
          setDays(array);
        }
      }
    }
      
    return(
        <>
        <Botao key={index} onClick={()=>Check(index, week)} disabled={disabled} cor={selected}>{week}</Botao>
        </>
    )
}

const Botao=styled.button`
        display:flex;
        justify-content:center;
        align-items:center;
        margin-left:10px;
        width:30px;
        height:30px;
        border-radius:5px;
        border:1px solid #D4D4D4;
        font-family:'Lexend Deca';
        color:${props=>props.cor ? '#FFFFFF':'#CFCFCF'};
        background-color:${props=>props.cor ? '#CFCFCF':'#FFFFFF'}; 
        font-weight:600;


`
