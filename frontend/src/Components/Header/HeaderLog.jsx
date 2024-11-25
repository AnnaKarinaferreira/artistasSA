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
    <div className='tamanho' id='logado'>
    <img src={logo} alt="logo" />
        <div className='unsBtn'>
          <button  className='btnETD'><a className='linkETD' href="/Home">Explorar</a></button>
          <button  className='btnETD'><p><a className='linkETD' href="/Desafios">Desafios</a></p></button>        
        </div>
        <div>
          <input className='pesquisa' type="Search" name="" placeholder='Buscar perfil' id="" />
        </div>
        <div>
          <button className='not'><a href=""><img src={not} /></a></button>
          <button className='btnPerfil' ><a href="/PerfilArt"><img className='imgPerfil' src={user} /></a></button>
        </div>
    </div>
    </>
  )
}

export default HeaderLog;
