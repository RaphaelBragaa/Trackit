import styled from 'styled-components';
import { useState, useEffect} from 'react';

export default function Week({days, week,index}){
    const [selected,setSelected]=useState(false)

    useEffect(() => {
    function getElementByIndex(arr, num) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === num) {
            return setSelected(true)
          }
        }
        return setSelected(false)
      }
    getElementByIndex(days, index)
      }, []);

    return(
        <>
        <Botao key={index} cor={selected}>{week}</Botao>
        </>
    )
}

const Botao=styled.button`
        display:flex;
        justify-content:center;
        align-items:center;
        margin-left:10px;
        width:35px;
        height:35px;
        border-radius:5px;
        border:1px solid #D4D4D4;
        font-family:'Lexend Deca';
        color:${props=>props.cor ? '#FFFFFF':'#CFCFCF'};
        background-color:${props=>props.cor ? '#CFCFCF':'#FFFFFF'}; 
        font-weight:600;


`