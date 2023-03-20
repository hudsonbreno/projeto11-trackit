import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import fotoPerfil from "./style/Rectangle 14.png"
import { useEffect, useState } from "react";
import axios from "axios"
import lixeira from "./style/lixeira.png"

export default function Habitos({ token, image }) {

  const [form, setForm] = useState({ name: "", days: [] })
  const [ativado, setAtivado] = useState([])
  const [item, setItem] = useState(["1", "2"])
  const [displayForm, setDisplayForm] = useState(false)
  const [temHabito, setTemHabito] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    const promise = axios.get(URL, config)

    promise.then(resposta => {
      setItem(resposta.data)
    })
    promise.catch(resposta => console.log(resposta.response.data.message))
  }, [])

  function criarHabito(e) {
    e.preventDefault()

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }

    let dados = form;
    let URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const promise2 = axios.post(
      URL, dados, config
    )
    promise2.then(res => console.log(res.data))
    promise2.catch(err => console.log(err.data))
  }

  function algoMudou(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function botaoDia(dias) {
    if (ativado.indexOf(dias) == -1) {
      let ativadosNovo = [...ativado, dias]
      setAtivado([...ativado, dias])
      setForm({ ...form, days: ativadosNovo })
    }
  }

  function deletarTarefa(id) {
    if(window.confirm("Pretende realmente deletar?") == true){
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }
  
      let URL3 = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
      const promise3 = axios.delete(URL3, config)
      promise3.then(res => console.log(res))
      promise3.catch(err => console.log(err))
    }

  }

  function exibirForm() {
    setDisplayForm(true)
  }

 function novaBusca(){
  
  const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const promise4 = axios.get(URL, config)

  promise4.then(resposta => {
    console.log("ta aqui")
    setItem(resposta.data)
  })
  promise4.catch(resposta => console.log(resposta.response.data.message))

  }

  console.log(item)

  return (
    <PageHabitos>
      <Navbar data-test="header">
        <h1>TrackIt</h1>
        <img src={image} alt="foto perfil"></img>
      </Navbar>

      <MeusHabitos>
        <h1>Meus hábitos</h1>
        <button data-test="habit-create-btn" onClick={() => exibirForm()}>+</button>
      </MeusHabitos>

        {item == [] ? <div>Carregando</div> : item.map((item) =>
          <Tarefas data-test="habit-container" key={item.id}>
            <div>
              <h1 data-test="habit-name">{item.name}</h1>
              <button onClick={()=>{
                deletarTarefa(item.id)
                novaBusca()
              }}
               data-test="habit-delete-btn"><img src={lixeira} /></button>
            </div>
            <BotoesContainer>
              <p data-test="habit-day">D</p>
              <p data-test="habit-day">S</p>
              <p data-test="habit-day">T</p>
              <p data-test="habit-day">Q</p>
              <p data-test="habit-day">Q</p>
              <p data-test="habit-day">S</p>
              <p data-test="habit-day">S</p>
            </BotoesContainer>
          </Tarefas>
        )}

      <CadastroDeCard data-test="habit-create-container" displayForm ={displayForm}>
        <form onSubmit={criarHabito}>
          <input type="text" data-test="habit-name-input" name={"name"} value={form.name} placeholder="Criar nova tarefa...." onChange={algoMudou} required />
          <>
            <button corCinza= {ativado.includes("1")} data-test="habit-day" onClick={() => botaoDia("1")} type="button" >D</button>
            <button corCinza= {ativado.includes("2")} data-test="habit-day" onClick={() => botaoDia("2")} type="button" >S</button>
            <button corCinza= {ativado.includes("3")} data-test="habit-day" onClick={() => botaoDia("3")} type="button" >T</button>
            <button corCinza= {ativado.includes("4")} data-test="habit-day" onClick={() => botaoDia("4")} type="button" >Q</button>
            <button corCinza= {ativado.includes("5")} data-test="habit-day" onClick={() => botaoDia("5")} type="button" >Q</button>
            <button corCinza= {ativado.includes("6")} data-test="habit-day" onClick={() => botaoDia("6")} type="button" >S</button>
            <button corCinza= {ativado.includes("7")} data-test="habit-day" onClick={() => botaoDia("7")} type="button" >S</button>
          </>
          <button data-test="habit-create-save-btn" >Salvar</button>
        </form>

      </CadastroDeCard>

      <Cards display={""}>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </Cards>



      <Rodape data-test="menu">
        <button data-test="habit-link" onClick={() => navigate("/habitos")}>Hábitos</button>
        <CirculoDeHabitos>
          <button data-test="today-link" onClick={() => navigate("/hoje")}>Hoje</button>
        </CirculoDeHabitos>
        <button data-test="history-link" xonClick={() => navigate("/historico")}>Histórico</button>
      </Rodape>
    </PageHabitos>
  );
}

const PageHabitos = styled.div`
  background-color: #F2F2F2;
  width: 375px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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

const MeusHabitos = styled.div`
  margin-top:28px;
  margin-left: 17px;
  padding-right: 20px;
  width: 93%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    box-sizing: border-box;
    margin-top: 20px;
    color: #126BA5;;
  }

  button {
    width: 40px;
    height: 35px;

    color: #ffffff;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: 1px solid #52b6ff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    /* identical to box height */

    text-align: center;
  }
`;

const Tarefas = styled.div`
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
  div{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 10px;
  }
  h1{
    margin-top: 13px;
    margin-left: 15px;
    margin-bottom: 8px;
    width: 220px;
    height: 25px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    color: #666666;
    }

    button{
      border: 0px;
      background-color: #ffffff;
    }
    img{
      width: 15px;
      height: 15px;
    }
`

const BotoesContainer = styled.p`
  display: flex;
  flex-direction: row;

  width: 180px;
  height: 30px;
  margin-left: 14px;
  p{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 8px;
    padding-left: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 4px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    color: #DBDBDB;
  }
`

const Cards = styled.div`
  margin-left: 17px;
  margin-right: 18px;
  display: ${props => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: #666666;
`

const CadastroDeCard = styled.div`
  width: 340px;
  height: 180px;
  background: #FFFFFF;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${props => props.displayForm? "flex": "none"};
  input{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    color: #666666;

  }
  input::placeholder{
    padding-left:11px;
  }
  p{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  button{
    margin-top: 8px;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
    background-color: ${props =>props.corCinza==true? "red": "green"};
  }
`

const ListaDeBotoes = styled.div`
    width: 100%;
    margin-left: 35px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
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
