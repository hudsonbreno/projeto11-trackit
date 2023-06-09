import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Vector1 from "./style/Vector 1.png";
import Vector2 from "./style/Vector 2.png";
import Vector3 from "./style/Vector 3.png";
import Vector4 from "./style/Vector 4.png";
import Ellipse3 from "./style/Ellipse 3.png";
import Loader from "./components/Loader";

export default function Cadastro() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [habilitado, setHabilitado] = useState(false)

  const navigate = useNavigate();

  function cadastrar(e) {
    e.preventDefault();
    setHabilitado(true)
    let dados = form;
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      dados
    );

    promise.then((res) => navigate("/")); //status: 201, statusText: 'Created'
    // tentar dnv: https://camo.githubusercontent.com/fe9e307317127c47e634a97a8431bbed4572cdd36b16488a753a2739e90369d5/68747470733a2f2f687474702e6361742f343039
    promise.catch((resposta) => alert(resposta.response.data.message)||setHabilitado(false));
  }

  function algoMudou(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <PageCadastro>
      <img src={Vector1} alt="Vector1"></img>
      <img src={Vector2} alt="Vector2"></img>
      <img src={Vector3} alt="Vector3"></img>
      <img src={Vector4} alt="Vector4"></img>
      <img src={Ellipse3} alt="Ellipse3"></img>
      <h1>TrackIt</h1>
      <form onSubmit={cadastrar}>
        <input
          type="email"
          disabled={habilitado}
          data-test="email-input"
          name={"email"}
          value={form.email}
          placeholder="email"
          onChange={algoMudou}
        ></input>
        <input
          type="password"
          disabled={habilitado}
          data-test="password-input"
          name={"password"}
          value={form.password}
          placeholder="senha"
          onChange={algoMudou}
        ></input>
        <input
          type="text"
          disabled={habilitado}
          data-test="user-name-input"
          name={"name"}
          value={form.name}
          placeholder="nome"
          onChange={algoMudou}
        ></input>
        <input
          type="text"
          disabled={habilitado}
          data-test="user-image-input"
          name={"image"}
          value={form.foto}
          placeholder="foto"
          onChange={algoMudou}
        ></input>
        <button disabled={habilitado} data-test="signup-btn">{habilitado?<Loader disabled={habilitado}/>:"Cadastrar"}</button>
      </form>
      <h2>
        <Link data-test="login-link" to="../">
          já tem uma conta? Faça login!
        </Link>
      </h2>
    </PageCadastro>
  );
}

const PageCadastro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 160.16px;
    margin-bottom: 32.62px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 86.23px;

    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 68.982px;
    line-height: 86px;
    /* identical to box height */

    text-align: center;

    color: #126ba5;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    background-color: #52b6ff;
    border-radius: 4.63636px;
    width: 303px;
    height: 45px;
    border: 1px solid #52b6ff;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #ffffff;
  }
  input {
    margin-bottom: 6px;
    width: 303px;
    height: 45px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */
  }
  a {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }

  img:nth-child(1) {
    position: absolute;
    width: 18.05px;
    height: 22.63px;
    left: 148.2px;
    top: 87.4px;
  }
  img:nth-child(2) {
    position: absolute;
    width: 18.05px;
    height: 42.31px;
    left: 172.45px;
    top: 79.05px;
  }
  img:nth-child(3) {
    position: absolute;
    width: 18.05px;
    height: 63.32px;
    left: 197.24px;
    top: 68px;
  }
  img:nth-child(4) {
    position: absolute;
    width: 154.94px;
    height: 48.5px;
    left: 109.4px;
    top: 106.8px;
    z-index: 3;
  }
  img:nth-child(5) {
    position: absolute;
    width: 142.28px;
    height: 15.63px;
    left: 122.33px;
    top: 144.53px;
  }

  input::placeholder {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    padding-left: 11px;

    color: #dbdbdb;
  }

  Loader{}
`;
