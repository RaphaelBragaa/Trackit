import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header'
import Menu from '../MenuBottom/MenuBottom';
import styled from 'styled-components';

const SEC = 1000;
const MIN_5 = SEC * 60 * 5;

function RenderError() {
    const navigate = useNavigate();
    localStorage.clear("trackit");
    navigate('/')
}

export default function PrivatePage({children}) {

    const auth = JSON.parse(localStorage.getItem("trackit"));

    if (!auth) {
        return RenderError();
      } else {
        return(
                <Background>
                <Header/>
                {children}
                <Menu/>
                </Background>
            ) 
      }  
            } 

const Background = styled.div`
    background-color: #E5E5E5;
    margin-bottom: 15vh;
`

