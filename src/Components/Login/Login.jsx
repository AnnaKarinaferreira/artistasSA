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
        <div className='Conteiner'>
            <form onSubmit={handleSubmit} >
                <div>
                    <img src={voltar} alt="" />
                    <a href="/" >voltar</a>
                </div>
                <h1 >Bom te ver de volta!</h1>
                <h1 >Faça login para voltar à nossa comunidade de artistas!</h1>
                <div >Seu email <br /><input type="email" /></div>
                <div >Senha <br /><input type="string" /></div>
                <div> <label htmlFor=""><input type="checkbox"/>Lembrar senha</label><br/></div>
                <div>Esqueceu sua senha?<a href="dsfsf">Clique aqui</a></div>
                <button> <a href='/HomeL'>Continuar</a></button>
                <div>Ainda não possui uma conta?<a href="/Cadastro">Faça seu cadastro aqui!</a></div>
            </form>
        </div>
        </>
    )
}
export default Login;