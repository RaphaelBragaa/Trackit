import Menu from '../MenuBottom/MenuBottom';
import styled from 'styled-components';
import { useState, useEffect} from 'react';
import axios from 'axios';
import CreateHabit from "./CreateHabit";
import ServiceHabits from '../../services/Habits';
import HabitosCadastrados from "./HabitosCadastrados";

export default function Habits(){
    const [view, setView] = useState(false);
    const[selected,setSelected] = useState(false);
    const [days,setDays] = useState([]);
    const [nameHabit, setNameHabit] = useState("");
    const [habitList ,setHabitList ] = useState([]);

     useEffect(() => {
	 	const req = ServiceHabits.ListHabits();

	 	req.then(resposta => {
	 		setHabitList (resposta.data);
	 	});
	 }, []);

    return(
        <>
        <Body>
        <MeusHabitos>
            <h1>Meus hábitos</h1> 
             <div onClick={()=>setSelected(true)}>+</div>
        </MeusHabitos>
         <CreateHabit 
            setNameHabit={setNameHabit} 
            setDays={setDays} 
            days={days} 
            selected={selected} 
            nameHabit={nameHabit}
          /> 
        <Dia> 
            { view ? 
             ( <h2>Você não tem nenhum hábito cadastrado ainda. 
             Adicione um hábito para começar a trackear !</h2> )
             :
             habitList.map((habit)=> {return(<HabitosCadastrados name={habit.name} days={habit.days}/>)})
            }
          
           
        </Dia> 
        </Body>
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
const Body=styled.body`
background-color: #E5E5E5;
height:1000px;
`



