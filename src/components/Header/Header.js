import styled from 'styled-components';

export default function Footer(){
    const test = JSON.parse(localStorage.getItem("trackit"))?.userImage;

    return(
        <>
        <Topo>
            <h1>TrackIt</h1>
        <img src={test}></img> 
        </Topo>
        </>
    )
}

const Topo = styled.header`
@media (max-width: 767px){
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

    img{
        object-fit:cover;
        height: 51px;
        width:51px;
        border-radius:98.5px;
    }
}
`