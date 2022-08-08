import Header from "../shared/Header"
import Menu from '../shared/Menu';
import styled from 'styled-components';
import { useState, useEffect} from 'react';
import axios from 'axios';
import CriarHabitos from "./CriarHabitos";
import HabitosCadastrados from "./HabitosCadastrados";

export default function Habitos({token}){
    const[selecionado,setSelecionado]=useState(false)
    const [dias,setDias]=useState([])
    const [nomeHabito, setnomeHabito] = useState("");
    const [cadastrado,setCadastrado] = useState([])

    console.log(selecionado)
    function Chama(){
        setSelecionado(0)
        alert('CHAMA')
    }

    const body ={
        name:nomeHabito,
        days:dias,

    }
    const config = {
            headers: { Authorization: `Bearer ${token}` } 
    }

     useEffect(() => {
	 	const req= axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);

	 	req.then(resposta => {
	 		setCadastrado([...cadastrado,resposta.data]);
	 	});
	 }, []);


    function Salvar(){
       const requisicao= axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',body,config)
        
        requisicao.then(res =>{
                
                console.log(res.data)
                console.log('sucesso')
                console.log(cadastrado)
            } )
        requisicao.catch(console.log('erro'))


        console.log(dias)
        console.log(nomeHabito)

    }
    

    
    console.log(token)
    return(
        <>
        <Body>
        <Header/>
        <MeusHabitos>
            <h1>Meus hábitos</h1> 
             <div onClick={()=>setSelecionado(true)}>+</div>
        </MeusHabitos>
        <CriarHabitos Salvar={Salvar} setnomeHabito={setnomeHabito} setDias={setDias} dias={dias} selecionado={selecionado} />
        <Dia> 
          <h2>Você não tem nenhum hábito cadastrado ainda. 
             Adicione um hábito para começar a trackear!</h2> 
          {/* <HabitosCadastrados cadastrado={cadastrado}/> */}
        </Dia> 
        </Body>
        
        <Menu/>
        </>
    )
}

const MeusHabitos = styled.div`
@media (max-width: 767px){
    display:flex;
    justify-content:space-between;
    width:100%;
    margin:auto;
    font-family:'Lexend Deca', sans-serif;
    font-size:30px;
    color:#126BA5;
    margin-bottom:25px;
    padding:0px 80px 0px 80px;
    h1{
         font-weight:500;
         margin-top:5px;
         
    }
    div{
        display:flex;
        align-items:center;
        justify-content:center;
        width:40px;
        height:35px;
        background-color:#52B6FF;
        border-radius:6.4px;

        color: #FFFFFF;  }

}
`
const Dia = styled.div`
@media (max-width: 767px){
    width:100%;
    height:100%;
    padding:0px 80px 0px 80px;
    font-weight:400;
    font-family:'Lexend Deca', sans-serif;

    margin-top:20px;
    

    h2{
        color: #CFCFCF;
        font-size:20px;
;
    }
}
`
const Body=styled.body`
background-color: #E5E5E5;
height:1000px;

`



