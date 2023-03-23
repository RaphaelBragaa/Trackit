import styled, {keyframes} from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer(){
    const test = JSON.parse(localStorage.getItem("trackit"))?.userImage;
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('trackit');
        navigate('/');
      };
    
      const toggleLogout = () => {
        setShowLogout(!showLogout);
      };

      function handleAnimation(event) {
        toggleLogout() 
        event.target.style.animation = "none";
        setTimeout(() => {
            event.target.style.animation = "";
        }, 10);
    }

    return(
        <>
        <Topo>
            <h1>TrackIt</h1>
            <AnimatedImg src={test} alt="Foto do usuário" onClick={handleAnimation}></AnimatedImg>
        {showLogout && <LogoutButton onClick={handleLogout}>Sair</LogoutButton>}
        </Topo>
        </>
    )
}

const Topo = styled.header`
        display:flex;
        align-items:center;
        justify-content:space-between;
        width: 100%;
        height: 70px;
        padding-left:20px;
        padding-right:20px;
        top:0;
        left:0;
        margin-bottom:30px;
        background-color: #126BA5;
        font-family:'Playball', cursive;
        font-size:38.98px;
        color:#FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

        div{
            display: flex;
            align-items: center;
        }

        img{
            object-fit:cover;
            height: 51px;
            width:51px;
            border-radius:98.5px;
        }
`;

const slideLeftAnimation = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-20%);
    }
`;

const LogoutButton = styled.button`
    background-color: transparent;
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
    margin-left: 10px;
    cursor: pointer;
    border: none;
    font-family:'Playball', cursive;

    &:hover {
        text-decoration: underline;
    }
`;

const AnimatedImg = styled.img`
    object-fit:cover;
    height: 51px;
    width:51px;
    border-radius:98.5px;
    animation: ${slideLeftAnimation} 0.3s ease-in-out;
    cursor: pointer;
`;