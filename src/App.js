import { Routes, Route, BrowserRouter } from "react-router-dom"
import { useState } from "react";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje"
import Habitos from "./Habitos"
import Historico from "./Historico"

function App() {

  const [ token, setToken ] = useState("")
  const [ image, setImage ] = useState("") 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Login setToken={setToken} setImage={setImage}/>}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/habitos" element={<Habitos token={token} image={image}/>}/>
        <Route path="/hoje" element={<Hoje token={token} image={image}/>}/>
        <Route path="/historico" element={<Historico token={token} image={image}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
