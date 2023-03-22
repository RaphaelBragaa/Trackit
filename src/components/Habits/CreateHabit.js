import styled from 'styled-components';
import WeekSelector from './WeekSelector';
import ServiceHabits from '../../services/Habits';
import { useState } from 'react';
import { ThreeDots } from  'react-loader-spinner';

export default function CreateHabit({setSelected,selected,days,setDays, setNameHabit, nameHabit}){
    const [ disabled, setDisabled ] = useState('');
    const [ loading, setLoading ] = useState('Salvar');
    const weekDays = ['D','S','T','Q','Q','S','S']
    const body ={
        name:nameHabit,
        days,
    }

    function InsertHabit(){
        if(loading === "Salvar"){
            setLoading(<ThreeDots color="#FFFFFF" height={40} width={40} />)
            setDisabled("disabled")
       }
   
        const req = ServiceHabits.CreateHabits(body);
        req
            .then(res => {
                console.log(res.status)
                setDisabled('')
                setSelected(false)
                setLoading('Salvar')
                })
            .catch(err => {
                setDisabled('')
                setLoading('Salvar')
                alert('Preencha os campos corretamente !')
                console.log(err)
            });

    }


    return(
    <>
        <Bod selecionado={selected}>
             <input type='text' placeholder='nome do hábito' onChange={(e) => setNameHabit(e.target.value)}  disabled={disabled}/> 
            <Days>
                 {weekDays.map((week,index)=>{return(
                    <WeekSelector
                        disabled={disabled}  
                        index={index} 
                        setDays={setDays} 
                        days={days} 
                        week={week}/>
                        )})}
            </Days>
             <Save>
                <h1 onClick={()=>setSelected(false)}>Cancelar</h1>
                <button onClick={InsertHabit} disabled={disabled}>{loading}</button>
            </Save> 
        </Bod>
    </>
    )

}

const Bod = styled.div`
@media (max-width: 767px){
    display:${props=>(props.selecionado) ? 'flex' : 'none'};
    flex-direction:column;
    justify-content:center;
    margin:auto;
    width:90%;
    min-height:11vh;
    background-color:#FFFFFF;
    border-radius:5px;
    padding-bottom:14px;
    padding-top:10px;
    input{
        width:88%;
        margin:auto;
        margin-bottom:0;
        height:7vh;
        border-radius:5px;
        border:1px solid #D4D4D4;
        font-family: 'Lexend Deca';
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
        display: flex;
         justify-content: center;
         align-items: center;
        height:37px;
        width:80px;
        background-color:#52B6FF;
        border:none;
        color: #FFFFFF;
        border-radius:4px;
        font-size:16px;
        margin-right:5px;
    }
}
`
const Days=styled.div`
@media (max-width: 767px){ 
    display:flex;
    justify-content:baseline;
    width:88%;
    padding-top:10px;
    padding-right:13px;
    margin:auto;
    height:50px;
    font-family: 'Lexend Deca';
}
`