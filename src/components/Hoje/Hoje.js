import { useState, useEffect} from 'react';
import { useContext } from 'react';
import UserContext from '../../utils/contexts/UserContext';
import CardToday from '../CardToday/CardToday';
import  ServiceToday from '../../services/Today';
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

dayjs.locale('pt-br');

export default function Hoje(){
    const { percent, setPercent } = useContext(UserContext);
    const [ habitsToday, setHabitsToday ] = useState([]);
    const hoje = dayjs().format('dddd');
    const data = dayjs().format('DD/MM/YYYY');

    
     

useEffect( () => {
     const req = ServiceToday.ListToday();

     req
        .then(res => {
             setHabitsToday(res.data)
             console.log(res.data)
         })
        .catch(err => {
                 console.log(err)
        })
 },[habitsToday])

 
    function countTrueValues() {
        let count = 0
        for (let i = 0; i < habitsToday.length; i++) {
          if (habitsToday[i].done === true) {
            count++ 
          }
        }
        setPercent((count / habitsToday.length) * 100);
        setPercent(percent.toFixed(0))
        return count;
      }

      useEffect(() => {
        countTrueValues();
      }, [habitsToday])


    return(
        <>
        <Dia percent={percent}>
         <h1>{hoje}, {data}</h1>  
         { habitsToday.length ?
            (percent ? (<h2 className='t20'> {percent}% dos hábitos concluídos</h2>) : (<h2> Nenhum hábito concluído ainda</h2>))
            :
             (<h2>Você não tem nenhum hábito cadastrado ainda. 
             Adicione um hábito para começar a trackear!</h2>)
             
            }
         {habitsToday.map((today) => {return (<CardToday today={today}/>)})}
       
        </Dia>   
        </>
    )
}


const Dia = styled.div`
 font-family: 'Lexend Deca', sans-serif;
    h1 {
        color: #126BA5;
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    
     h2 {
        color:#CFCFCF;
        font-size: 28px;
        margin-bottom: 15px;
    }
    .t20{
        color:${props => props.percent ?  '#8FC549': '#CFCFCF' };
    }
@media (max-width: 767px){
    width:100%;
    height:100%;
    padding-left:17px;
    padding-right:17px;
    
    font-family:'Lexend Deca', sans-serif;
    
    h1{
    color:#126BA5;
    font-size:28px;
    font-weight:500;
    margin-bottom:12px;
}
    h2{
        color: #CFCFCF;
        font-size:20px;
    }
}
`

  
  
  
 