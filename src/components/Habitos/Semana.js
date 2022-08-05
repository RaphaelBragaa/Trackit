import styled from 'styled-components';
import { useState} from 'react';

export default function Semana({week,setDias,dias,index}){
    const [selected,setSelected]=useState(false)
    const [selecionadoA,setSelecionadoA] = useState('#DBDBDB')
    const [selecionadoB,setSelecionadoB] = useState('#FFFFFF')
    
    //function Check(day){
     //   console.log(day)
     //   setSelected(true)
        // if(name==='S'){
        //     setDias([...dias,1])
        // }
        // if(name==='T'){
        //  setDias([...dias,2])
        // }
        // if(name==='Q'){

        // }
    //}

    return(
        <>
        <Botao onClick={()=>setSelected(true)}cor={selected}>{week}</Botao>
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
