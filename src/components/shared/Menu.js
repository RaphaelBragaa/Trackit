import  {  CircularProgressbar, buildStyles  }  from  'react-circular-progressbar' ; 
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import styled from 'styled-components';
import { Link, useNavigate} from 'react-router-dom';

export default function Menu(){
    const percentage = 80;

    return(
        <>
         <Footer>
            <Link to="/habitos"><h1>Hábitos</h1></Link>
            <Link to="/hoje">
                <Bola label="Background">
                    <CircularProgressbar
                        value={percentage}
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
@media (max-width: 767px){
    display:flex;
    justify-content:space-around;
    align-items:center;
    overflow: visible;
    margin: auto;
    width: 100%;
    bottom: 0;
    position: fixed;
    height:70px;
    background-color:#FFFFFF;
    

    font-family:'Lexend Deca', sans-serif;

    h1{
        color:#52B6FF;
        font-size:17.98px;
    }


}
`

const Bola = styled.div`
@media (max-width: 767px){
    width:100px; 
    height:100px;
    margin-bottom:50px;

    .CircularProgressbar .CircularProgressbar-text {
    fill: #3e98c7;
    font-size: 20px;
    dominant-baseline: middle;
    text-anchor: middle;
  }

}
`