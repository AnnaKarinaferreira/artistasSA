import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '/header.css';
import logo from '../../assets/logo 1.png';

const HeaderNLog = () =>{

    return(
        <>
       <div className='tamanho' id='NAOlogado'>
       <img src={logo} alt="logo" />
        <div class='unsBtn'>
          <button  class='btnETD'>Explorar</button>
          <button  class='btnETD'><p className='trabalhos'><a href="">Trabalhos</a></p></button>
          <button  class='btnETD'><p className='desafios'><a href="/Desafios">Desafios</a></p></button>
        </div>
        <div>
          <input class='pesquisa' type="search" name="" id="" />
        </div>
        <div className='icones'>
          <button class='btnlogin'><p className='login' ><a href="/Login">Fazer Login</a></p></button>
          <button class='btncadastro'><p className='cadastro'><a href="/Cadastro">Cadastrar-se</a></p></button>
        </div>
       </div>
        </>
    )
}

export default HeaderNLog;