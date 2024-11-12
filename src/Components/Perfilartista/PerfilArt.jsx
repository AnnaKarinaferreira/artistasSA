import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './PerfilArt.css';

const PerfilArt = () =>{


    return(
        <>
        <div class='tudo'>
            <div class='infos'>
                <div class='centro'>
                    <img class='userimg' src={user} alt='user'/>
                    <h2>Nome do artista</h2>
                    <p>user</p>
                </div>
                <div class='maisinfos'>
                    <p>seguidores: xxxx</p>
                    <p>seguindo: xxx</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non iaculis eros. Proin...</p>
                    <p>mostrar mais</p>
                </div>
            </div>
            <div class='cima'>
                <div class='retangulo'></div>
                <div class='menuC'>
                    <p class='categorias'>Categoria</p>
                    <p class='categorias'>Categoria</p>
                    <p class='categorias'>Competições</p>
                </div>
                <div class='desenhosOutroArt'>
                    <div class='outrodesenho'></div>
                    <div class='outrodesenho'></div>
                    <div class='outrodesenho'></div>
                </div>
            </div>
       </div>
        </>
    )
}
export default PerfilArt;