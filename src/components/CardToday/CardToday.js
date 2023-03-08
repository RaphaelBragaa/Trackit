import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';


export default function CardToday({today}) {
   return(
    <Card>
        <Container>
            <h1 className='t1'>{today.name}</h1>
            <h2 className='t2'>Sequência atual: <strong>{today.currentSequence} dias</strong></h2>
            <h2 className='t2'>Seu recorde: <strong>{today.highestSequence} dias</strong></h2>
        </Container>
        <Button><AiOutlineCheck/></Button>   
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
    height: 80%;
    border-radius:5px;
    background-color: green;
`