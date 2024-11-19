import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Importação dos componentes
import Login from './Components/Login/Login.jsx';
import Cadastro from './Components/Cadastro/Cadastro.jsx';
import Desafios from './Components/Desafios/Desafios.jsx';
import Home from './Components/Home/Home.jsx';
import HomeN from './Components/Home/HomeN.jsx';
import PerfilArt from './Components/Perfilartista/PerfilArt.jsx';
import Trabalhos from './Components/Trabalhos/Trabalhos.jsx';
import OutroArt from './Components/Perfiloutroartista/OutroArt.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomeN />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Desafios" element={<Desafios />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/PerfilArt' element={<PerfilArt/>}/>
          <Route path='/Trabalhos' element={<Trabalhos/>}/>
          <Route path='/OutroArt' element={<OutroArt/>}/>
        </Routes>
    </Router>
  );
}

export default App;
