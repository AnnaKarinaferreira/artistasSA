import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Desafios.css";
import HeaderLog from "../Header/HeaderLog";

const Desafios = () => {
  return (
    <>
    <HeaderLog></HeaderLog>
      <div>
        <a href="">
          <div className="desafio1">
            <p  className="desafiotitulo">Cores em Movimento</p>
            <h1 className="subtitulodesafio">
            Neste desafio, o objetivo é criar uma obra de arte que explore o uso de cores de maneira dinâmica. <br />
            Escolha uma paleta de cores vibrantes e utilize técnicas de pintura, colagem ou até mesmo desenho para representar o movimento. <br />
             O desafio é transmitir a sensação de movimento e energia apenas através das cores e formas, sem o uso de elementos figurativos. <br />
            Experimente com traços curvos, espirais ou padrões repetitivos para sugerir fluxo e dinamismo.
            </h1>
          </div>
        </a>
        <a href="">
          <div className="desafio2">
            <p className="desafiotitulo">Retrato Invertido</p>
            <h1 className="subtitulodesafio">
            Faça um retrato, mas com um toque criativo: inverta as cores! Ao invés de usar tons naturais para a pele, cabelo e fundo, escolha cores inesperadas. <br/>
            A pele pode ser azul, o cabelo pode ser laranja, e o fundo pode ser um gradiente de verde e roxo.  <br/>O desafio é explorar a forma do retrato e a composição, 
            enquanto se afasta da representação tradicional da figura humana.  <br/>
            Este exercício irá forçar você a pensar sobre a relação entre cor, luz e sombra de uma maneira inovadora.
            </h1>
          </div>
        </a>
        <a href="">
          <div className="desafio3">
            <p className="desafiotitulo">Paisagens Urbanas Abstratas</p>
            <h1 className="subtitulodesafio">
            Em vez de representar uma cidade ou paisagem urbana de forma realista, crie uma interpretação abstrata dela. Utilize formas geométricas,  
            <br/>linhas e texturas para sugerir os elementos urbanos, como prédios, ruas e pontes, sem tentar reproduzir exatamente o que você vê. <br/>
            Experimente diferentes materiais, como acrílicos, lápis, tintas ou até recortes, para dar uma sensação de caos organizado 
            <br/>ou harmonia inesperada. O foco é transmitir a energia e a atmosfera da cidade, mas de uma maneira não literal.
            </h1>
          </div>
        </a>
      </div>
    </>
  );
};

export default Desafios;
