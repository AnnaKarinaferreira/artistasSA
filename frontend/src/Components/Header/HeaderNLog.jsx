import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo 1.png';

const HeaderNLog = () =>{

    return(
        <>
       <div className='tamanho' id='NAOlogado'>
       <img src={logo} alt="logo" />
        <div className='unsBtn'>
          <button  className='btnETD'><a className='linkETD' href="/">Explorar</a></button>
          <button  className='btnETD'><p><a className='linkETD' href="/Cadastro">Desafios</a></p></button>
        </div>
        <div>
          <input className='pesquisa' type="search" name="" id="" />
        </div>
        <div className='icones'>
          <button className='btnlogin'><p className='login' ><a href="/Login"><p >Fazer Login</p></a></p></button>
          <button className='btncadastro'><p className='cadastro'><a href="/Cadastro">Cadastrar-se</a></p></button>
        </div>
       </div>
        </>
    )
}

export default HeaderNLog;