import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './OutroArt.css';

const OutroArt = () =>{


    return(
        <>
        <div >
            <div >
                <div >
                    <img  src={user} alt='user'/>
                    <h2>Nome do artista</h2>
                    <p>user</p>
                </div>
                <div >
                    <p>seguidores: xxxx</p>
                    <p>seguindo: xxx</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non iaculis eros. Proin...</p>
                    <p>mostrar mais</p>
                </div>
            </div>
            <div >
                <div ></div>
                <div >
                    <p >Categoria</p>
                    <p >Categoria</p>
                    <p >Competições</p>
                </div>
                <div >
                    <div ></div>
                    <div ></div>
                    <div ></div>
                </div>
            </div>
       </div>
        </>
    )
}
export default OutroArt;