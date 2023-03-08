import  {  CircularProgressbar, buildStyles  }  from  'react-circular-progressbar' ; 
import { useContext } from 'react';
import UserContext from '../../utils/contexts/UserContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Menu(){
  const { percent } = useContext(UserContext);

    return(
        <>
         <Footer>
            <Link to="/habitos"><h1>Hábitos</h1></Link>
            <Link to="/hoje">
                <Bola label="Background">
                    <CircularProgressbar
                        value={percent}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                        })}
                    />
                </Bola>
            </Link>
        <Link to="/historico"><h1>Histórico</h1></Link>
        
        </Footer>
        </>
    )
}

const Footer = styled.footer`
    height:5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: visible;
    margin: auto;
    width: 100%;
    bottom: 0;
    position: fixed;
    background-color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    h1 {
      color: #52B6FF;
      font-size: 17.98px;
    }
  

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: auto;
    background-color: #F2F2F2;
    font-family: 'Lexend Deca', sans-serif;
    h1 {
      color: #52B6FF;
      font-size: 24px;
    }
  }
`;

const Bola = styled.div`
    width: 100px; 
    height: 100px;
    margin-bottom: 50px;

    .CircularProgressbar .CircularProgressbar-text {
      fill: #3e98c7;
      font-size: 20px;
      dominant-baseline: middle;
      text-anchor: middle;
    }
  

  @media (min-width: 768px) {
    width: 200px; 
    height: 200px;
    margin-bottom: 20px;

    .CircularProgressbar .CircularProgressbar-text {
      fill: #3e98c7;
      font-size: 40px;
      dominant-baseline: middle;
      text-anchor: middle;
    }
  }
`;

