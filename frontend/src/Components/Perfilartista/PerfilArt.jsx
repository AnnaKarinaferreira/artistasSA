import React, { useState } from "react";  // Importa o React e o hook useState para gerenciar o estado
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Importa as funções do React Router
import "./PerfilArt.css";  // Importa o arquivo de estilo CSS para o perfil do artista
import user from "../../assets/user.png";  // Imagem do usuário
import HeaderLog from "../Header/HeaderLog";  // Componente de cabeçalho para o usuário logado
import work from "../../assets/work.svg";  // Ícone de trabalho
import map from "../../assets/map.svg";  // Ícone de localização
import pinterest from "../../assets/pinterest.svg";  // Ícone do Pinterest
import steam from "../../assets/steam.svg";  // Ícone do Steam
import threads from "../../assets/threads.svg";  // Ícone do Threads
import X from "../../assets/x.svg";  // Ícone para fechar o modal

const PerfilArt = () => {
    // Declaração dos estados para armazenar as informações do formulário
    const [titulo, settitulo] = useState("");  // Título da arte
    const [legenda, setLegenda] = useState("");  // Legenda da arte
    const [filtroAntiIA, setFiltroAntiIA] = useState(false);  // Filtro anti-IA
    const [filtroConteudo, setFiltroConteudo] = useState(false);  // Filtro de conteúdo sensível
    const [tags, setTags] = useState("");  // Tags da arte
    const [materiais, setMateriais] = useState("");  // Materiais utilizados na arte

    // Função para abrir o modal de postagem
    const abrirModal = () => {
        document.getElementById('postarArte').style.display = 'flex';  // Torna o modal visível
    };

    // Função para fechar o modal de postagem
    const fecharModal = () => {
        document.getElementById('postarArte').style.display = 'none';  // Esconde o modal
    };

    // Função chamada ao enviar o formulário de postagem
    const handleSubmit = async (e) => {
        e.preventDefault();  // Impede o envio padrão do formulário

        // Cria um objeto com os dados coletados do formulário
        const dados = {
            titulo,
            legenda,
            filtroAntiIA,
            filtroConteudo,
            tags,
            materiais
        };

        try {
            // Envia os dados para o servidor via requisição POST
            const response = await fetch('/api/postar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dados),  // Envia os dados convertidos em JSON
            });

            // Se a resposta for bem-sucedida
            if (response.ok) {
                console.log("Projeto postado com sucesso!");  // Exibe mensagem de sucesso
                fecharModal();  // Fecha o modal após o sucesso
            } else {
                console.error("Erro ao postar projeto");  // Exibe mensagem de erro no console
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);  // Exibe erro caso a requisição falhe
        }
    };

  return (
    <>
      {/* Exibe o cabeçalho do usuário logado */}
      <HeaderLog></HeaderLog>

        {/* Modal para postagem de novo projeto */}
        <div id="postarArte">
            <button onClick={fecharModal} className="fecharX"> <img src={X}/> </button>  {/* Botão para fechar o modal */}
            <h2>Postar novo projeto</h2>
            <form>
                {/* Campos do formulário para preencher detalhes do projeto */}
                <label for="titulo">Titulo:</label>
                <input type="text" id="titulo" required onChange={(e) => settitulo(e.target.value)}/>
                <label for="legenda">Legenda:</label>
                <input type="text" id="legenda" required onChange={(e) => setLegenda(e.target.value)}/>
                <input type="checkbox" id="filtro_anti_ia" required onChange={(e) => setFiltroAntiIA(e.target.value)}/>
                <label for="filtro_anti_ia">Filtro anti-IA:</label>
                <input type="checkbox" id="filtro_conteudo" onChange={(e) => setFiltroConteudo(e.target.value)}/>
                <label>Contém conteúdo sensível:</label> <br />
                <label for="tags">Tags:</label>
                <input type="text" id="tags"/>
                <label for="materiais">Materiais:</label>
                <input type="text" id="materiais"/>
                <label>Anexar arquivos:</label>
                <input type="file" id="imagem" onChange="/encodeToBase64(this)"></input>
                <button>Postar</button>
            </form>
        </div>

        {/* Corpo do perfil do artista */}
        <div className="geralartistas">
            <div className="perfilartistacorpo">
                <div className="elementosalinhar">
                    <div>
                        <img src={user} alt="user" className="imgUser"/>  {/* Imagem do usuário */}
                        <h2 className="nomeart">Artista:</h2>
                        <p className="user">Nome do usuário aqui</p>  {/* Nome do usuário */}
                        <button className="editar">Editar</button>  {/* Botão para editar o perfil */}
                    </div>
                    <div>
                        <p>Seguidores: xxx</p>  {/* Informações sobre seguidores */}
                        <p>Seguindo: xx</p>  {/* Informações sobre quem o artista segue */}
                        <div className="alinha1">
                            <img src={work} className="work"/> <p>Trabalho/Cargo</p>  {/* Informações sobre trabalho */}
                        </div>
                        <div className="alinha2">
                            <img src={map} className="map"/> <p>Endereço</p>  {/* Informações sobre localização */}
                        </div>
                        <p>
                            Nascido em uma cidade costeira, desenvolvi uma paixão pela
                            pintura, explorando a natureza ao meu redor.
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
                            <button className="interessebutton">Freelance</button>  {/* Botões de interesse profissional */}
                            <button className="interessebutton1">Contrato</button>
                            <button className="interessebutton">CLT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='cima'>
                <div className='retangulo'></div>
                <button  onClick={abrirModal} className="btnpostar" >Postar novo projeto</button>  {/* Botão para abrir o modal */}
                <div className='menuC'>
                    <p className='categorias'>Categoria</p>  {/* Categorias de projetos */}
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

export default PerfilArt;  // Exporta o componente para ser usado em outros arquivos
