import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo 1.png';
import not from '../../assets/not.png';
import user from '../../assets/user.png';
import '../geral.css';

const HeaderLog = () => {
  
  return (
    <>
    <div class='tamanho' id='logado'>
    <img src={logo} alt="logo" />
        <div class='unsBtn'>
          <button  class='btnETD'>Explorar</button>
          <button  class='btnETD'><p><a class='linkETD' href="#">Trabalhos</a></p></button>
          <button  class='btnETD'><p><a class='linkETD' href="/Desafios">Desafios</a></p></button>        
        </div>
        <div>
          <input class='pesquisa' type="search" name="" id="" />
        </div>
        <div>
          <button class='not'><a href=""><img src={not} /></a></button>
          <button class='btnPerfil' ><a href="/PerfilArt"><img class='imgPerfil' src={user} /></a></button>
        </div>
    </div>
    </>
  )
}

export default HeaderLog;
