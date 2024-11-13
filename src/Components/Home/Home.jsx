import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Homes.css'
import seta from "../../assets/seta.png"
import HeaderLog from '../Header/HeaderLog';

const Home = () => {

    return(
        <>
        <HeaderLog></HeaderLog>
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
        <div>
        <h1>Aviso conteúdo sensível</h1>
        <button className='desenho1'><a href="/OutroArt">Vizualizar</a></button></div>
        <a href="/OutroArt"><div className='desenho2'></div></a>
        <a href="/OutroArt"><div className='desenho3'></div></a>
        <a href="/OutroArt"><div className='desenho4'></div></a>       
        <a href="/OutroArt"><div className='desenho5'></div></a>
        <a href="/OutroArt"><div className='desenho6'></div></a>
      </div>
        </>
    )
}

export default Home;