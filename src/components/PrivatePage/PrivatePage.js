import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../Header/Header'
import Menu from '../MenuBottom/MenuBottom';
import styled from 'styled-components';
import UserContext from '../../utils/contexts/UserContext'

const SEC = 1000;
const MIN_5 = SEC * 60 * 5;

function RenderError() {
    const navigate = useNavigate();
    localStorage.clear("trackit");
    navigate('/')
}

export default function PrivatePage({children}) {
    const [ percent , setPercent] = useState(0);
    const auth = JSON.parse(localStorage.getItem("trackit"));

    if (!auth) {
        return RenderError();
      } else {
        return(
        <UserContext.Provider value={{percent, setPercent}}>
            <Background>
                <Header/>
                {children}
                <Menu/>
            </Background>
        </UserContext.Provider>
             )
      }  
            } 

const Background = styled.div`
    background-color: #E5E5E5;
    min-height: 90vh;
    margin-bottom: 10vh;
    padding-bottom:3vh;
`

