import { useState } from 'react'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './HomeN.css'
import seta from '../../assets/seta.png'

const HomeN = () => {


    return(
        <>

      <div >
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
     
      
      <div >
        <div >
          <h1  >Aviso conteúdo sensível</h1>
          <button ><a href="/OutroArt">Vizualizar</a></button>
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