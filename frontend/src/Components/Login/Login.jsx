import React, { useState } from 'react';  // Importa o React e o hook useState para gerenciar o estado
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';  // Importa as funções de roteamento do React Router
import './Login.css';  // Importa o arquivo de estilo CSS para a página de login
import voltar from "../../assets/voltar.png";  // Importa a imagem do ícone de voltar

const Login = () => {
    // Declara os estados para armazenar o email e a senha
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    // Função chamada quando o formulário é enviado
    const handleSubmit = async () => {

        if(email === "" || senha === ""){
            return;
        }

        // Cria um objeto com os dados de email e senha
        const data = { email, senha };
        console.log(data)
        try {
            // Faz uma requisição POST para o servidor com os dados de login
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),  // Converte os dados para JSON
            });
            console.log(response)
            // Se a resposta não for ok, lança um erro
            if (!response.ok) {
                throw new Error('Erro na rede');
            }

            // Recebe a resposta do servidor e tenta realizar o login
            const result = await response.json();
            if (result === true) {
                console.log('Login realizado com sucesso:', result);
                setTimeout(() => {
                    navigate('/Home'); // Navega para a rota "/Login"
                }, 1000);
                // Aqui pode-se redirecionar o usuário ou realizar outras ações após o login
            } else {
                console.log('Falha ao realizar login', result);
            }

        } catch (error) {
            console.error('Erro:', error);  // Caso haja um erro, exibe no console
        }
    }

    return (
        <>
            <div className='geral'>
                <div className='boxlogin'>
                        <div className='alinhamento1'>
                            <img src={voltar} alt="" className='seta' />  {/* Exibe o ícone de voltar */}
                            <a href="/" className='voltar'>Voltar</a>  {/* Link para a página inicial */}
                        </div>
                        <h1 className='titulo'>Bom te ver de volta!</h1>
                        <h1 className='descricao'>Faça login para voltar à nossa comunidade de artistas!</h1>
                        <div className='email'>
                            Seu email <br />
                            <input
                                type="email"
                                value={email}  // Atributo de valor ligado ao estado email
                                onChange={(e) => setEmail(e.target.value)}  // Atualiza o estado do email
                            />
                        </div>
                        <div className='senha'>
                            Senha <br />
                            <input
                                type="password"
                                value={senha}  // Atributo de valor ligado ao estado senha
                                onChange={(e) => setSenha(e.target.value)}  // Atualiza o estado da senha
                            />
                        </div>
                        <div className='lembrarsenha'>
                            <label>
                                <input type="checkbox" /> Lembrar senha  {/* Caixa de seleção para lembrar senha */}
                            </label><br />
                        </div>
                        <div className='esqueceusenha'>
                            Esqueceu sua senha?<a href="#" className='linkrecuperar'>Clique aqui</a>  {/* Link para recuperação de senha */}
                        </div>
                        <button type='submit' className='continuar' onClick={handleSubmit}>Continuar</button>  {/* Botão para enviar o formulário */}
                        <div>
                            Ainda não possui uma conta?<a href="/Cadastro" className='linkcadastro'>Faça seu cadastro aqui!</a>  {/* Link para cadastro de novos usuários */}
                        </div>
                </div>
            </div>
        </>
    )
}

export default Login;  // Exporta o componente Login para ser usado em outros arquivos