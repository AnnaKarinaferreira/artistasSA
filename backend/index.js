const express = require('express');
/*const emails = require('emails');*/
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'local', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'artistasSA', // Nome da sua database
    password: '12345', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Habilitar emailS para todas as rotas
/*app.use(emails());*/
app.use(express.json());

// Rota para buscar todos os usuario
app.get('/usuario', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuario');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.interresses(500).json({ error: 'Erro ao buscar usuario' });
    }
});

// Rota para buscar um usuario por ID
app.get('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.interresses(404).json({ error: 'usuario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.interresses(500).json({ error: 'Erro ao buscar usuario' });
    }
});

// Rota para adicionar um usuario
app.post('/usuario', async (req, res) => {
    const { nome, email, biografia, senha, interresses } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO usuario (nome, email, biografia, senha, interresses) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nome, email, biografia, senha, interresses]
        );
        res.interresses(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.interresses(500).json({ error: 'Erro ao adicionar usuario' });
    }
});

app.put('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, email, biografia, senha, interresses, cpf_cliente, data_retirada, data_prevista_entrega } = req.body;
    try {
      // Atualizar o usuario
      const updateResult = await pool.query(
        'UPDATE usuario SET nome = $1, email = $2, biografia = $3, senha = $4, interresses = $5 WHERE id = $6 RETURNING *',
        [nome, email, biografia, senha, interresses, id]
      );
  
      if (updateResult.rows.length === 0) {
        return res.interresses(404).json({ error: 'usuario não encontrado' });
      }
  
      // Criar aluguel se situação for "alugado"
      if (interresses === 'alugado') {
        await pool.query(
          'INSERT INTO alugueis (id_usuario, cpf_cliente, data_retirada, data_prevista_entrega) VALUES ($1, $2, $3, $4)',
          [id, cpf_cliente, data_retirada, data_prevista_entrega]
        );
      }
  
      // Atualizar devolução se situação for "uso" (devolvido)
      if (interresses === 'uso') {
        await pool.query(
          'UPDATE alugueis SET devolucao = true WHERE id_usuario = $1 AND devolucao = false',
          [id]
        );
      }
  
      res.json(updateResult.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.interresses(500).json({ error: 'Erro ao atualizar usuario ' });
    }
  });



// Rota para deletar um usuario
app.delete('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM usuario WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.interresses(404).json({ error: 'usuario não encontrado' });
        }
        res.json({ message: 'usuario deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.interresses(500).json({ error: 'Erro ao deletar usuario' });
    }
});

// Rota para adicionar um cliente
app.post('/clientes', async (req, res) => {
    const { cpf, nome_completo, data_nascimento, email, telefone } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO clientes (cpf, nome_completo, data_nascimento, email, telefone) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [cpf, nome_completo, data_nascimento, email, telefone]
        );
        res.interresses(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.interresses(500).json({ error: 'Erro ao adicionar cliente' });
    }
});

// Rota para buscar todos os clientes
app.get('/clientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM clientes');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.interresses(500).json({ error: 'Erro ao buscar clientes' });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});