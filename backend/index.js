// Importa bibliotecas necessárias
const express = require('express'); // Framework para criar API
const { Pool } = require('pg'); // Biblioteca para conectar ao PostgreSQL
const cors = require('cors'); // Middleware para habilitar requisições de outros domínios
const multer = require("multer"); // Biblioteca para upload de arquivos

// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
    user: 'postgres', // Usuário do banco de dados
    host: 'localhost', // Servidor do banco de dados
    database: 'artistasSA', // Nome do banco de dados
    password: 'postgres', // Senha do banco de dados
    port: 5432, // Porta de conexão
});

// Configura o multer para armazenar arquivos na memória
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define a porta do servidor
const port = process.env.PORT || 3000;

// Cria a aplicação Express
const app = express();

// Configura middlewares globais
app.use(cors()); // Permite requisições de outros domínios
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições

// Rota para listar todos os usuários
app.get('/usuario', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuario'); // Consulta no banco
        res.json(result.rows); // Retorna os usuários
    } catch (err) {
        console.error('Erro no banco de dados:', err.stack); // Log de erro
        res.status(500).json({ error: 'Erro ao buscar usuario' }); // Resposta de erro
    }
});

// Rota para logar
app.post('/login', async (req, res) => {
    try {
        const usuario = req.body;
        console.log(usuario);
        let result = await pool.query(`SELECT u.id_usuario FROM usuario u where u.email = '${usuario.email}' and u.senha = '${usuario.senha}'`); // Consulta no banco
        if(result.rowCount !== 0){ //verificar se esse result é um objeto ou numero
            result = true;
        }
        else{
            result = false;
        }
        res.json(result); // Retorna os usuários
    } catch (err) {
        console.error('Erro no banco de dados:', err.stack); // Log de erro
        res.status(500).json({ error: 'Erro ao buscar usuario'}); // Resposta de erro
    }
});

// Rota para buscar um usuário por ID
app.get('/usuario/:id', async (req, res) => {
    const { id } = req.params; // Captura o ID da rota
    try {
        const result = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]); // Busca no banco
        if (result.rows.length === 0) { // Verifica se o usuário foi encontrado
            return res.status(404).json({ error: 'usuario não encontrado' });
        }
        res.json(result.rows[0]); // Retorna o usuário encontrado
    } catch (err) {
        console.error('Erro no banco de dados:', err.stack);
        res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
});

// Rota para criar um novo usuário
app.post('/usuario', upload.fields([{ name: "imagem", maxCount: 1 }]), async (req, res) => {
    const { email, senha, name_user, telefone } = req.body; // Dados enviados pelo cliente
    console.log(req.body);
    let imagem = null; // Inicializa imagem como nula
    try {
        if (req.files && req.files.imagem) { // Verifica se há imagem no upload
            imagem = req.files.imagem[0].buffer.toString("base64"); // Converte imagem para base64
        }
    } catch (e) {}

    try {
        const result = await pool.query(
            'INSERT INTO usuario (email, senha, name_user, telefone) VALUES ($1, $2, $3, $4) RETURNING *',
            [email, senha, name_user, telefone]
        ); // Insere no banco
        res.status(201).json(result.rows[0]); // Retorna o usuário criado
    } catch (err) {
        console.error('Erro no banco de dados:', err.stack);
        res.status(500).json({ error: 'Erro ao adicionar usuario' });
    }
});

// Rota para atualizar um usuário por ID
app.put('/usuario/:id', upload.fields([{ name: "imagem", maxCount: 1 }]), async (req, res) => {
    const { id } = req.params; // Captura o ID
    const data = req.body; // Captura os dados do corpo da requisição
    try {
        let setQuery = []; // Array para armazenar os campos a serem atualizados
        let values = []; // Array para os valores

        Object.entries(data).forEach(([key, value], index) => { // Monta o SQL dinâmico
            if (value !== null) {
                setQuery.push(`${key} = $${index + 1}`);
                values.push(value);
            }
        });

        if (setQuery.length === 0) { // Se não há dados para atualizar
            return res.status(400).json({ error: 'Sem dados para atualizar' });
        }
        values.push(id); // Adiciona o ID aos valores
        const query = await pool.query(
            `UPDATE usuario SET '${setQuery.join(', ')}' WHERE id = $${setQuery.length + 1} RETURNING *`,
            values
        ); // Executa a query

        res.json(query.rows[0]); // Retorna o usuário atualizado
    } catch (err) {
        console.error('Erro no banco de dados:', err.stack);
        res.status(500).json({ error: 'Erro ao atualizar usuario' });
    }
});

// Rota para deletar um usuário por ID
app.delete('/usuario/:id', async (req, res) => {
    const { id } = req.params; // Captura o ID
    try {
        const result = await pool.query('DELETE FROM usuario WHERE id = $1 RETURNING *', [id]); // Deleta no banco
        if (result.rows.length === 0) { // Verifica se o usuário existia
            return res.status(404).json({ error: 'usuario não encontrado' });
        }
        res.json({ message: 'usuario deletado com sucesso' }); // Resposta de sucesso
    } catch (err) {
        console.error('Erro no banco de dados:', err.stack);
        res.status(500).json({ error: 'Erro ao deletar usuario' });
    }
});

// Resto do código segue a mesma lógica para "posts"

// Inicializa o servidor
app.listen(port, () => console.log(`Server rodando em http://localhost:${port}`));