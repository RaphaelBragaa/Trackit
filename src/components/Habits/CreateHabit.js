import styled from 'styled-components';
import Semana from './Semana';
import ServiceHabits from '../../services/Habits';


export default function CreateHabit({selected,days,setDays, setNameHabit, nameHabit}){
    const weekDays = ['D','S','T','Q','Q','S','S']
    const body ={
        name:nameHabit,
        days,
    }

    function InsertHabit(){
        const req = ServiceHabits.CreateHabits(body);
        req
            .then(res => console.log(res.status))
            .catch(err => console.log(err));

    }


    return(
    <>
        <Bod selecionado={selected}>
            <input type='text' placeholder='nome do hábito' onChange={(e) => setNameHabit(e.target.value)}/>
            <Days>
                 {weekDays.map((week,index)=>{return(
                    <Semana  
                        index={index} 
                        setDays={setDays} 
                        days={days} 
                        week={week}/>
                        )})}
            </Days>
            <Save>
                <h1>Cancelar</h1>
                <button onClick={InsertHabit}>Salvar</button>
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