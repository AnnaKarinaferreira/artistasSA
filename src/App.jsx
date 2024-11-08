import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Importação dos componentes
import Login from './Components/Login/Login.jsx';
import Cadastro from './Components/Cadastro/Cadastro.jsx';
import Competicao from './Components/Competicao/Competicao.jsx';
import Desafios from './Components/Desafios/Desafios.jsx';
import Home from './Components/HomeLogado/Home.jsx';
import HomeN from './Components/HomeNLogado/HomeN.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomeN />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/competicao" element={<Competicao />} />
          <Route path="/desafios" element={<Desafios />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
