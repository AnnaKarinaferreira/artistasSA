import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo 1.png';

const HeaderLog = () => {
  
  return (
    <>
    <div className='tamanho' id='logado'>
    <img src={logo} alt="logo" />
        <div class='unsBtn'>
          <button  class='btnETD'>Explorar</button>
          <button  class='btnETD'><p className='trabalhos'><a href="/Trabalhos">Trabalhos</a></p></button>
          <button  class='btnETD'><p className='desafios'><a href="/Desafios">Desafios</a></p></button>        
        </div>
        <div>
          <input class='pesquisa' type="search" name="" id="" />
        </div>
        <div>
          <button class='not'><a href="/LogIn"><img src={not} /></a></button>
          <button class='btnPerfil' ><a href="/PerfilArtista"><img class='imgPerfil' src={user} /></a></button>
        </div>
    </div>
    </>
  )
}

export default HeaderLog;
