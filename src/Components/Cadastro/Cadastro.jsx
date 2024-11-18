import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import voltar from "../../assets/voltar.png"
import './Cadastro.css'

const Cadastro = () =>{
    // Declaração dos estados usando useState
    const [email, setEmail] = useState(""); // Estado para armazenar o email
    const [username, setUsername] = useState(""); // Estado para armazenar o nome de usuário
    const [phone, setPhone] = useState(""); // Estado para armazenar o número de telefone
    const [password, setPassword] = useState(""); // Estado para armazenar a senha
    const [confSenha, setConfSenha] = useState(""); // Estado para armazenar a confirmação da senha
    const [message, setMessage] = useState(""); // Estado para armazenar mensagens de feedback
 
    const navigate = useNavigate(); // Inicializa o hook useNavigate para navegação
 
    // Função chamada ao submeter o formulário
    const handleSubmit = (event) => {
       event.preventDefault(); // Prevê o comportamento padrão do formulário que recarregaria a página
 
       // Verifica se as senhas coincidem
       if (password !== confSenha) {
          setMessage("As senhas não coincidem. Tente novamente."); // Define a mensagem de erro se as senhas não coincidirem
       } else {
          setMessage("Cadastro realizado com sucesso!"); // Define a mensagem de sucesso se as senhas coincidirem
          // Redireciona para a página de Login após 2 segundos
          setTimeout(() => {
             navigate('/HomeL'); // Navega para a rota "/Login"
          }, 2000); // Tempo em milissegundos
       }
       // Log para depuração, exibindo os dados do formulário
       console.log({ email, username, phone, password });
    };
 
    return (
       <>
          <div className='geral'> {/* Container principal do formulário */}
             <form  onSubmit={handleSubmit}> {/* Formulário com onSubmit */}
                <div > {/* Container para a seta de voltar */}
                   <img src={voltar} alt="Voltar" className='seta' /> {/* Imagem de voltar */}
                   <a href="/">voltar</a> {/* Link de voltar */}
                </div>
                <h1 >Seja bem-vindo ao Brighid!</h1> {/* Título de boas-vindas */}
                <h1 >Cadastre-se para se juntar à nossa comunidade de artistas!</h1> {/* Descrição do cadastro */}
                
                <div >
                   Seu email <br />
                   <input type="email" required onChange={(e) => setEmail(e.target.value)} /> {/* Campo para o email */}
                </div>
                <div >
                   Nome de usuário <br />
                   <input type="text" required onChange={(e) => setUsername(e.target.value)} /> {/* Campo para o nome de usuário */}
                </div>
                <div >
                   Número de telefone <br />
                   <input  type="tel" required onChange={(e) => setPhone(e.target.value)} /> {/* Campo para o telefone */}
                </div>
                <div > {/* Container para os campos de senha */}
                   <div>
                      <label htmlFor="senha">Senha</label> {/* Label para o campo de senha */}
                      <input type="password" name="senha" id="senha" required onChange={(e) => setPassword(e.target.value)} /> {/* Campo de senha */}
                   </div>
                   <div>
                      <label htmlFor="confsenha">Confirmar senha</label> {/* Label para o campo de confirmação de senha */}
                      <input type="password" name="confsenha" id="confsenha" required onChange={(e) => setConfSenha(e.target.value)} /> {/* Campo de confirmação de senha */}
                   </div>
                </div>
                <div> {/* Container para a opção de lembrete */}
                   <label>
                      <input type="checkbox" /> {/* Checkbox para "Lembre de mim" */}
                      Lembre de mim
                   </label> <br />
                </div>
                <button type="submit">Cadastrar</button> {/* Botão para submeter o formulário */}
                {message && <p>{message}</p>} {/* Exibe a mensagem de feedback se existir */}
             </form>
          </div>
       </>
    );
 };
 

export default Cadastro;