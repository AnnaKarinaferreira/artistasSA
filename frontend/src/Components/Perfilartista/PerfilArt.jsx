import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./PerfilArt.css";
import user from "../../assets/user.png";
import HeaderLog from "../Header/HeaderLog";
import work from "../../assets/work.svg";
import map from "../../assets/map.svg";
import pinterest from "../../assets/pinterest.svg";
import steam from "../../assets/steam.svg";
import threads from "../../assets/threads.svg";
import X from "../../assets/x.svg";

const PerfilArt = () => {

    const [titulo, settitulo] = useState("");
    const [legenda, setLegenda] = useState("");
    const [filtroAntiIA, setFiltroAntiIA] = useState(false);
    const [filtroConteudo, setFiltroConteudo] = useState(false);
    const [tags, setTags] = useState("");
    const [materiais, setMateriais] = useState("");

    const abrirModal = () => {
        document.getElementById('postarArte').style.display = 'flex';
    };

    const fecharModal = () => {
        document.getElementById('postarArte').style.display = 'none';
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        const dados = {
            titulo,
            legenda,
            filtroAntiIA,
            filtroConteudo,
            tags,
            materiais
        };

        try {
            const response = await fetch('/api/postar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),
            });

            if (response.ok) {
                console.log("Projeto postado com sucesso!");
                fecharModal(); // Fecha o modal após o sucesso
            } else {
                console.error("Erro ao postar projeto");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
        }
    };

  return (
    <>
      <HeaderLog></HeaderLog>

        {/* modal de postar arte */}
        <div id="postarArte">
            <button onClick={fecharModal} className="fecharX"> <img src={X}/> </button>
            <h2>Postar novo projeto</h2>
            <form>
                <label for="titulo">Titulo:</label>
                <input type="text" id="titulo" required onChange={(e) => settitulo(e.target.value)}/>
                <label for="legenda">Legenda:</label>
                <input type="text" id="legenda" required onChange={(e) => setlegenda(e.target.value)}/>
                <input type="checkbox" id="filtro_anti_ia" required onChange={(e) => setfiltro_anti_ia(e.target.value)}/>
                <label for="filtro_anti_ia">Filtro anti-IA:</label>
                <input type="checkbox" id="filtro_conteudo" onChange={(e) => setfiltro_conteudo(e.target.value)}/>
                <label>Contém conteúdo sensível:</label> <br></br>
                <label for="tags">Tags:</label>
                <input type="text" id="tags"/>
                <label for="materiais">Materiais:</label>
                <input type="text" id="materiais"/>
                <label>Anexar arquivos:</label>
                <input type="file" id="imagem" onChange="/encodeToBase64(this)"></input>
                <button>Postar</button>
            </form>
        </div>

        <div className="geralartistas">
            <div className="perfilartistacorpo">
                <div className="elementosalinhar">
                    <div>
                        <img src={user} alt="user" className="imgUser"/>
                        <h2 className="nomeart">Artista:</h2>
                        <p className="user">Nome do usuário aqui</p>
                        <button className="editar"><p className="texteditar">Editar</p></button>
                    </div>
                    <div>
                        <p className="seguidores">Seguidores: XX</p>
                        <p className="seguidores">Seguindo: XX</p>
                        <div className="alinha1">
                            <img src={work} className="work"/> <p>Trabalho/Cargo</p>
                        </div>
                        <div className="alinha2">
                            <img src={map} className="map"/> <p>Endereço</p>
                        </div>
                        <p className="bio">
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
                <button  onClick={abrirModal} className="btnpostar" >Postar novo projeto</button>
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
export default PerfilArt;