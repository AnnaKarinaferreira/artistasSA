import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Desafios.css'
import logo from '../Desafios/logo 1.png'
import not from '../Desafios/not.png';
import user from '../Desafios/user.png';


const Desafios = () => {


    return(
        <>
        <div class='header-home-n'>
        <img src={logo} alt="logo" />
        <div class='unsBtn'>
          <button  class='btnETD'>Explorar</button>
          <button  class='btnETD'><p className='trabalhos'><a href="/Trabalhos">Trabalhos</a></p></button>
          <button  class='btnETD'><p className='desafios'><a href="/Desafios">Desafios</a></p></button>
        </div>
        <div>
          <input class='pesquisa' type="search" name="" id="" />
        </div>
        <div className='icones' >
          <button class='not'><a href="/LogIn"><img src={not} /></a></button>
          <button class='btnPerfil' ><a href="#"><img class='imgPerfil' src={user} /></a></button>
        </div>
        <div className='Desafios'>
          <a href="" className='removelink'><div className='desafio1'><p className='dtitulo'>Desafio de tal coisa</p><h1 className='dsubtitulo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla dictum est, <br /> a facilisis magna pulvinar pharetra. Curabitur eget porttitor dui. Aliquam id posuere sapien. Curabitur pharetra at ligula sed faucibus. Donec vel lectus gravida,<br /> lacinia erat et, maximus dolor. Curabitur pharetra leo eu elit rhoncus consequat.</h1></div></a>
          <a href="" className='removelink'><div className='desafio2'><p className='dtitulo'>Desafio de tal coisa</p><h1 className='dsubtitulo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla dictum est, <br /> a facilisis magna pulvinar pharetra. Curabitur eget porttitor dui. Aliquam id posuere sapien. Curabitur pharetra at ligula sed faucibus. Donec vel lectus gravida,<br /> lacinia erat et, maximus dolor. Curabitur pharetra leo eu elit rhoncus consequat.</h1></div></a>         
          <a href="" className='removelink'><div className='desafio2'><p className='dtitulo'>Desafio de tal coisa</p><h1 className='dsubtitulo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla dictum est, <br /> a facilisis magna pulvinar pharetra. Curabitur eget porttitor dui. Aliquam id posuere sapien. Curabitur pharetra at ligula sed faucibus. Donec vel lectus gravida,<br /> lacinia erat et, maximus dolor. Curabitur pharetra leo eu elit rhoncus consequat.</h1></div></a>         
        </div>
        </div>
        </>
    )
}

export default Desafios;