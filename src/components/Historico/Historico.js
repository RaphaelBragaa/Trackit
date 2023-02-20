import styled from 'styled-components';
import Header from "../Header/Header"
import Menu from "../MenuBottom/MenuBottom"

export default function Historico(){
    return(
        <>
        <Header/>
        <Banner>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Banner>
        <Menu/>
        </>
    )
}

const Banner = styled.div`
@media (max-width: 767px){
    width:100%;
    font-family:'Lexend Deca', sans-serif;
    padding-left:20px;
    padding-right:20%;

    h1{
        color:#126BA5;
        font-size:35px;
        font-weight:500;
    }

    h2{
        margin-top:12px;
        font-size:25px;
        color:#666666;
    }

}
`