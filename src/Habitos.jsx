import styled from "styled-components";
import { Link } from "react-router-dom";
import fotoPerfil from "./style/Rectangle 14.png"

export default function Habitos() {
  return (
    <PageHabitos>
      <Navbar>
        <h1>TrackIt</h1>
        <img src={fotoPerfil} alt="foto perfil"></img>
      </Navbar>

      <MeusHabitos>
        <h1>Meus hábitos</h1>
        <button>+</button>
      </MeusHabitos>

      <Cards>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </Cards>

      <Rodape>
        <p><Link to="./habitos">Hábitos</Link></p>
        <CirculoDeHabitos>
          <p><Link to="./hoje">Hoje</Link></p>
        </CirculoDeHabitos>
        <p><Link to="./historico">Histórico</Link></p>
      </Rodape>
    </PageHabitos>
  );
}

const PageHabitos = styled.div`
  background-color: #F2F2F2;

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
  margin-top: 18px;
  margin-bottom: 20px;
  margin-left: 17px;
  margin-right: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    /* identical to box height */

    color: #126ba5;
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

const Cards = styled.div`
  margin-left: 17px;
  margin-right: 18px;
  display: flex;
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
