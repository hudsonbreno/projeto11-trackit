import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hoje({ token, image }) {
  let objetoVazioItens = { id: "", name: "", done: "", currentSequence: "", highestSequence: "" }
  const [items, setItems] = useState([])

  const navigate = useNavigate()

  useEffect(() => {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    const promise = axios.get(URL, config)

    promise.then(resposta => console.log(resposta))

    promise.catch(resposta => console.log(resposta))

  }, [])

  function marcarConcluido(id) {

    console.log(id)
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    let URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
    const promise = axios.post(URL, config)

    promise.then(res => console.log(res))
    promise.then(err => console.log(err))
  }


  return (
    <PageHoje>
      <Navbar data-test="header">
        <h1>TrackIt</h1>
        <img src={image} alt="foto perfil"></img>
      </Navbar>

      <MeuHoje>
        <h1>Segunda, 17/05</h1>
        <h2>Nenhum hábito concluido ainda</h2>
      </MeuHoje>

      <Item>
        <TextItem>
        {items == [] ? <div>Carregando</div> : items.map((item) =>
            <>
              <h1 data-test="habit-name">{item.name}</h1>
              <div data-test="habit-day">D</div>
              <div data-test="habit-day">S</div>
              <div data-test="habit-day">T</div>
              <div data-test="habit-day">Q</div>
              <div data-test="habit-day">Q</div>
              <div data-test="habit-day">S</div>
              <div data-test="habit-day">S</div>
              <button data-test="habit-delete-btn">deletar</button>
            </>
          )}
        </TextItem>
        <button>V</button>
      </Item>

      <Rodape>
        <button onClick={() => navigate("/habitos")}>Hábitos</button>
        <CirculoDeHabitos>
          <button onClick={() => navigate("/Hoje")}>Hoje</button>
        </CirculoDeHabitos>
        <button  data-test="history-link" onClick={() => navigate("/historico")}>Histórico</button>
      </Rodape>
    </PageHoje>
  );
}

const PageHoje = styled.div`
background:#F2F2F2;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #666666;
  }
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1 {
    margin-left: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    /* identical to box height */

    color: #ffffff;
  }

  img {
    margin-right: 18px;
    width: 51px;
    height: 51px;
    background: url(image.png);
    border-radius: 98.5px;
  }
`;

const MeuHoje = styled.div`
  margin-top:28px;
  margin-left:17px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    /* identical to box height */

    color: #126ba5;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
`;

const Item = styled.div`
background-color: #ffffff;
width: 340px;
height: 94px;
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
button{
  width: 69px;
  height: 69px;

  color:#ffffff;
  background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
}
`

const TextItem = styled.div`
display: flex;
flex-direction: column;
`

const Rodape = styled.div`
  width: 375px;
  height: 101px;

  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-around;

  position: fixed;
  bottom: 0px;
  left: 0px;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    margin-bottom: 26px;
    display: flex;
    flex-direction: column;
    justify-content: end;

    color: #52b6ff;
  }
`;

const CirculoDeHabitos = styled.div`
  width: 91px;
  height: 91px;
  display: flex;

  border-radius: 50%;
  background-color: #52b6ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #ffffff;
  }
`;

