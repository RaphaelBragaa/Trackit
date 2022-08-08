import styled from 'styled-components';
import { useState} from 'react';

export default function Semana({week,setDias,dias,index}){
    const [selected,setSelected]=useState(false)
    const [selecionadoA,setSelecionadoA] = useState('#DBDBDB')
    const [selecionadoB,setSelecionadoB] = useState('#FFFFFF')
    
    function Check(day){
   console.log(day)
       setSelected(true)
         if(day===1){
             setDias([...dias,1])
        }if(day===2){
            setDias([...dias,2])
        } if(day===3){
                setDias([...dias,3])
        } if(day===4){
            setDias([...dias,4])
       } if(day===5){
        setDias([...dias,5])
       }  if(day===6){
        setDias([...dias,6])
   }    if(day===7){
    setDias([...dias,7])
}      
    }

    return(
        <>
        <Botao key={index} onClick={()=>Check(index)}cor={selected}>{week}</Botao>
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
