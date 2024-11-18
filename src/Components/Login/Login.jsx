import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Login.css';
import voltar from "../../assets/voltar.png"

const Login = () =>{
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit=(event) => {
    event.preventDefault();

    console.log("Envio");
}

    return(
        <>
        <div className='geral'>
            <div className='boxlogin'>
            <form onSubmit={handleSubmit} >
                <div>
                    <img src={voltar} alt="" />
                    <a href="/"  className='linkvoltar'>Voltar</a>
                </div>
                <h1 className='titulobemvindo'>Bom te ver de volta!</h1>
                <h1 className='textobemvindo'>Faça login para voltar à nossa comunidade de artistas!</h1>
                <div className='email'>Seu email <br /><input type="email" className='inputemail'/></div>
                <div className='senha'>Senha <br /><input type="string" className='inputsenha' /></div>
                <div className='lembrarsenha'> <label htmlFor=""><input type="checkbox"/>Lembrar senha</label><br/></div>
                <div className='esqueceusenha'>Esqueceu sua senha?<a href="dsfsf" className='linkrecuperar'>Clique aqui</a></div>
                <button className='continuar'> <a href='/HomeL' className='textocontinuar'>Continuar</a></button>
                <div>Ainda não possui uma conta?<a href="/Cadastro" className='linkcadastro'>Faça seu cadastro aqui!</a></div>
            </form>
            </div>
        </div>
        </>
    )
}
export default Login;