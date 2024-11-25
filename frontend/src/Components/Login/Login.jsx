import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Login.css';
import voltar from "../../assets/voltar.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = { email, senha };

        try {
            const response = await fetch('http://localhost:5432/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Erro na rede');
            }

            const result = await response.json();
            console.log('Login realizado com sucesso:', result);
            // Aqui, você pode redirecionar ou realizar outras ações após o login bem-sucedido

        } catch (error) {
            console.error('Erro:', error);
        }
    }

    return (
        <>
            <div className='geral'>
                <div className='boxlogin'>
                    <form onSubmit={handleSubmit}>
                        <div className='alinhamento1'>
                            <img src={voltar} alt="" className='seta' />
                            <a href="/" className='voltar'>Voltar</a>
                        </div>
                        <h1 className='titulo'>Bom te ver de volta!</h1>
                        <h1 className='descricao'>Faça login para voltar à nossa comunidade de artistas!</h1>
                        <div className='email'>
                            Seu email <br />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='senha'>
                            Senha <br />
                            <input
                                type="password"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className='lembrarsenha'>
                            <label>
                                <input type="checkbox" /> Lembrar senha
                            </label><br />
                        </div>
                        <div className='esqueceusenha'>
                            Esqueceu sua senha?<a href="#" className='linkrecuperar'>Clique aqui</a>
                        </div>
                        <button type='submit' className='continuar'>Continuar</button>
                        <div>
                            Ainda não possui uma conta?<a href="/Cadastro" className='linkcadastro'>Faça seu cadastro aqui!</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;