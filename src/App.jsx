import { Route, Routes } from "react-router"
import LoginPage from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import CadastroPage from "./pages/Cadastro/Cadastro";

function App() {
  return (
    <Routes>
      <Route path="/BizUp-Front" element={<LoginPage/>}/>
      <Route path="/cadastro" element={<CadastroPage/>}/>
    </Routes>
  )
}

export default App;
