import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./Login";
import Cadastro from "./Cadastro";
import Hoje from "./Hoje"
import Habitos from "./Habitos"
import Historico from "./Historico"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Login />}/>
        <Route path="/cadastro" element={<Cadastro />}/>
        <Route path="/habitos" element={<Habitos/>}/>
        <Route path="/hoje" element={<Hoje />}/>
        <Route path="/historico" element={<Historico />}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
