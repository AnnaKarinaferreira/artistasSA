import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Homes.css'
import seta from '../../assets/seta.png'
import HeaderNLog from '../Header/HeaderNLog';

const HomeN = () => {


    return(
        <>
        <HeaderNLog></HeaderNLog>
      <div class='eventos'>
        <div>
          <p >Evento Especial de natal</p>
        </div>
        <div >
          <p >Evento de Páscoa</p>
        </div>
        <div >
          <p > Evento Dia das bruxas</p>
        </div>
        <div >
          <p >Evento dia das crianças</p>
        </div>
      </div>

      <h1 >Em alta  <img src={seta} alt=""  /> </h1>
     
      
      <div className='desenhos'>
        <div className='desenho1'>
        <h1 className='aviso'>Aviso conteúdo sensível</h1>
        <button className='vizualizar'><a href="/OutroArt" className='linkvizu'>Vizualizar</a></button></div>
        <a href="/OutroArt"><div className='desenho2'></div></a>
        <a href="/OutroArt"><div className='desenho3'></div></a>
        <a href="/OutroArt"><div className='desenho4'></div></a>       
        <a href="/OutroArt"><div className='desenho5'></div></a>
        <a href="/OutroArt"><div className='desenho6'></div></a>
      </div>

        </>
    )
}

export default HomeN;