import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './HomeN.css'
import logo from '../HomeNLogado/logo 1.png'
import seta from '../HomeNLogado/seta.svg'

const HomeN = () => {


    return(
        <>
       <div class='header-home-n'>
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

      <div class='eventos'>
        <div class='evento'>
          <p className='eventoname'>Evento Especial de natal</p>
        </div>
        <div class='evento'>
          <p className='eventoname'>Evento de Páscoa</p>
        </div>
        <div class='evento'>
          <p className='eventoname'> Evento Dia das bruxas</p>
        </div>
        <div class='evento'>
          <p className='eventoname'>Evento dia das crianças</p>
        </div>
      </div>

      <h1 class='titulo'>Em alta  <img src={seta} alt="" className='seta' /> </h1>
     
      
      <div class='desenhosHome'>
        <div class='desenho'>
          <h1 className='aviso' >Aviso conteúdo sensível</h1>
          <button className='vizualizar'><a href="/OutroArt">Vizualizar</a></button>
        </div>
        <a href="/OutroArt"><div class='desenho2'></div></a>
        <a href="/OutroArt"><div class='desenho3'></div></a>
        <a href="/OutroArt"><div class='desenho4'></div></a>       
        <a href="/OutroArt"><div class='desenho5'></div></a>
        <a href="/OutroArt"><div class='desenho6'></div></a>


      </div>

        </>
    )
}

export default HomeN;