import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./OutroArt.css";
import user from "../../assets/user.png";
import HeaderLog from "../Header/HeaderLog";
import work from "../../assets/work.svg";
import map from "../../assets/map.svg";
import pinterest from "../../assets/pinterest.svg";
import steam from "../../assets/steam.svg";
import threads from "../../assets/threads.svg";

const OutroArt = () => {
  return (
    <>
      <HeaderLog></HeaderLog>
        <div className="geralartistas">
            <div className="perfilartistacorpo">
                <div className="elementosalinhar">
                    <div>
                        <img src={user} alt="user" className="imgUser"/>
                        <h2 className="nomeart">Artista:</h2>
                        <p className="user">Nome do usuário aqui</p>
                        <button className="editar">Editar</button>
                    </div>
                    <div>
                        <p>Seguidores: xxx</p>
                        <p>Seguindo: xx</p>
                        <div className="alinha1">
                            <img src={work} className="work"/> <p>Trabalho/Cargo</p>
                        </div>
                        <div className="alinha2">
                            <img src={map} className="map"/> <p>Endereço</p>
                        </div>
                        <p>
                            Nascido em uma cidade costeira, desenvolvi uma paixão pela
                            pintura, explorando a natureza ao
                            meu redor.
                        </p>
                        <div className="caixas">
                            <div className="caixa1">
                                <p className="textocaixa"> Contatos</p>
                                <p className="subtextcaixa">fulaninho@gmail.com</p> <br/>
                                <p className="subtextcaixa">+55 (xx) xxxx-xxxx</p>
                            </div>
                            <div className="caixa2">
                                <p className="textocaixa">Outras redes</p>
                                <img src={pinterest} className="linha1"/>
                                <img src={steam} className="linha1"/>
                                <img src={threads} className="linha1"/>
                            </div>
                        </div>
                        <div className="interesses">
                            <p className="interesse">Interesse em:</p>
                            <button className="interessebutton">Freelance</button>
                            <button className="interessebutton1">Contrato</button>
                            <button className="interessebutton">CLT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cima'>
                <div className='retangulo'></div>
                <div className='menuC'>
                    <p className='categorias'>Categoria</p>
                    <p className='categorias'>Categoria</p>
                    <p className='categorias'>Competições</p>
                </div>
                <div className='desenhosOutroArt'>
                    <div className='outrodesenho'></div>
                    <div className='outrodesenho'></div>
                    <div className='outrodesenho'></div>
                </div>
            </div>
        </div>
    </>
  );
};
export default OutroArt;