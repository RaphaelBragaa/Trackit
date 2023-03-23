import logo from '../../assets/images/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function AuthLayout({Auth, inputs, loading, link, message}) {
    return(
        <form onSubmit={Auth}> 
            <Logo> 
            <img src={logo}/>
            {inputs}
            <Entrar type="submit">{loading}</Entrar>
            <Link to={link}>
            <Cadastrar>{message}</Cadastrar>
            </Link>
            </Logo>
        </form>
    )
};

const Logo = styled.div`
    margin:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%;
    font-family: 'Lexend Deca', sans-serif;

img{
    width:30%;
    margin-bottom:2rem;
    margin-top:3rem;
}
input{
    width:100%;
    height:43px;
    border: 1px solid #D4D4D4;
    border-radius:3px;
    padding-left:10px;
    margin-bottom:10px;
}

input::placeholder{
    margin-left:105px;
    font-size:18px;
    color:#DBDBDB;
}
@media (max-width: 767px){
    width:80%;
    img{
        width:50%;
    }
    input{
        width:50%;
    }
}
`
const Entrar = styled.button`

display: flex;
width:30%;
height:43px;
justify-content: center;
align-items: center;
background-color: #52B6FF;
border-radius:3px;
font-size:18px;
color:#FFFFFF;
margin-bottom:25px;
border:none;

:active{
    background-color:#126BA5;
}
@media (max-width: 767px){
    width:50%;
 }
`
const Cadastrar = styled.div`

    text-align: center;
    color:#52B6FF;
    font-size:14.50px;
    text-decoration: underline; 
    margin-bottom:50px;
`

