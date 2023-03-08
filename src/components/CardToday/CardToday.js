import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import ServiceToday from '../../services/Today';


export default function CardToday({today}) {
  const [ isActive, setIsActive ] = useState(false);
  const [ ActiveButton, setActiveButton ] = useState(false);

  useEffect(() => {
    if(today.currentSequence >= today.highestSequence || ActiveButton === true) {
    setIsActive(true);
  }
  if(today.done === true){
    setActiveButton(true);
  }
},[]) 

  function CheckHabit(id) {
    if(ActiveButton === false) {
      setActiveButton(true)
      console.log(today.done)
      const req = ServiceToday.CheckHabitToday(id);
      console.log(today.currentSequence)
      req
          .then((res) => {
            console.log(res.status)
          })
          .catch((err) => {
            console.log(err)
          })
    } else {
      setActiveButton(false)
      console.log(today.done)
      const req = ServiceToday.UncheckHabitToday(id);
      req
          .then((res) => {
            console.log(res.status)
          })
          .catch((err) => {
            console.log(err.response.data.message)
          })
    }
  }
  

   return(
    <Card>
        <Container isActive={isActive}>
            <h1 className='t1'>{today.name}</h1>
            <h2 className='t2'>Sequência atual: <strong>{today.currentSequence} dias</strong></h2>
            <h2 className='t2'>Seu recorde: <strong>{today.highestSequence} dias</strong></h2>
        </Container>
        <Button ActiveButton={ActiveButton} onClick={()=> CheckHabit(today.id)}><AiOutlineCheck/></Button>   
    </Card>
   )
};

const Card = styled.div`
@media (max-width: 767px){
    display: flex;
    height: 18vh;
    width: 100%;
    border-radius:5px;
    background-color: #FFFFFF;
    margin: auto;
    margin-bottom: 15px;
}
`

const Container = styled.div`
@media (max-width: 767px){
  width:70%;
  height:100%;
  font-family:'Lexend Deca', Arial, Helvetica, sans-serif;
  padding:15px;
  .t1{
    font-size:20px;
    color: #666666;
  }
  .t2{
    font-size: 12px;
    color: #666666;
  }
  strong{
    color: ${props => props.isActive ? '#8FC549' : '#E7E7E7'};
  }
  }
`

const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 50px;
    color: #FFFFFF;
    margin:auto;
    width: 25%;
    height: 70%;
    border-radius:5px;
    background-color:${props => props.ActiveButton ? '#8FC549' : '#666666'};;
`