const express = require('express');
const { Pool } = require('pg');
const multer = require("multer");
const db = require("./db")

require ("dotenv").config();

const port = process.env.PORT;

const app = express();
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'artistasSA', // Nome da sua database
    password: 'senai', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Habilitar emailS para todas as rotas
/app.use(emails());/
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Rota para buscar todos os usuario
app.get('/usuario', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuario');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
});

// Rota para buscar um usuario por ID
app.get('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'usuario não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuario' });
    }
});

// Rota para adicionar um usuario
app.post('/usuario', upload.fields([{name: "imagem", maxCount: 1}]), async (req, res) => {
    const { nome, email, biografia, senha, interesses, name_user, telefone, outras_redes_usuario } = req.body;
    let imagem = null;
    try {
        imagem  = req.files.imagem[0].buffer.toString("base64");
    } catch (e) {}
    try {
        const result = await pool.query(
            'INSERT INTO usuario (nome, email, biografia, senha, interesses, imagem, name_user, telefone, outras_redes_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [nome, email, biografia, senha, interesses, imagem, name_user, telefone, outras_redes_usuario]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar usuario' });
    }
});

app.put('/usuario/:id', upload.fields([{name: "imagem", maxCount: 1}]), async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
      let setQuery = [];
      let values = [];

      Object.entries(data).forEach(([key, value], index) => {
          if(value !== null) {
              setQuery.push(`${key} = $${index + 1}`);
              values.push(value);
          }
      })

      if (setQuery.length === 0) {
          return res.status(400).json({ error: 'Sem dados para atualizar' });
      }
      values.push(id)
      console.log(setQuery)
      console.log(values)
      const query = await pool.query(`UPDATE usuario SET ${setQuery.join(', ')} WHERE id_usuario = $${setQuery.length + 1} RETURNING *`, values);

      res.json(query.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Erro ao atualizar usuario ' });
  }
});


// Rota para deletar um usuario
app.delete('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM usuario WHERE id_usuario = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'usuario não encontrado' });
        }
        res.json({ message: 'usuario deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar usuario' });
    }
});

app.get('/post', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT p.id_post, p.titulo, p.filtro_anti_ia, p.filtro_conteudo, p.tags, p.materias, p.id_usuario, ' +
            'array_agg(a.imagem) AS arquivos ' +
            'FROM post p ' +
            'LEFT JOIN arquivo a ON p.id_post = a.post ' +
            'GROUP BY p.id_post ' +
            'ORDER BY p.id_post',
        );
        res.json(result.rows);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar posts' });
    }
})

app.get('/post/usuario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            'SELECT p.id_post, p.titulo, p.filtro_anti_ia, p.filtro_conteudo, p.tags, p.materias, p.id_usuario, ' +
            'array_agg(a.imagem) AS arquivos ' +
            'FROM post p ' +
            'LEFT JOIN arquivo a ON p.id_post = a.post ' +
            'WHERE p.id_usuario = $1 ' +
            'GROUP BY p.id_post ' +
            'ORDER BY p.id_post',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({error: 'post não encontrado'});
        }
        res.json(result.rows);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar posts' });
    }
})

app.get('/post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(
            'SELECT p.id_post, p.titulo, p.filtro_anti_ia, p.filtro_conteudo, p.tags, p.materias, p.id_usuario, ' +
            'array_agg(a.imagem) AS arquivos ' +
            'FROM post p ' +
            'LEFT JOIN arquivo a ON p.id_post = a.post ' +
            'WHERE p.id_post = $1 ' +
            'GROUP BY p.id_post ' +
            'ORDER BY p.id_post',
            [id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({error: 'post não encontrado'});
        }
        res.json(result.rows[0]);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar post' });
    }
})

app.post('/post', upload.fields([{name: "arquivos", maxCount: 5}]), async (req, res) => {
    try {
        const {titulo, filtro_anti_ia, filtro_conteudo, tags, materias, id_usuario} = req.body;
        console.log(req.body)
        const files = req.files.arquivos;
        const result = await pool.query(
            'INSERT INTO post (titulo, filtro_anti_ia, filtro_conteudo, tags, materias, id_usuario) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [titulo, filtro_anti_ia, filtro_conteudo, tags, materias, id_usuario]
        );
        if(result.rows[0] !== undefined) {
            let idpost = result.rows[0].id_post
            for(let i of files) {
                let convertido = i.buffer.toString("base64");
                const mandar_arquvios = await pool.query(
                    'INSERT INTO arquivo (imagem, post) VALUES ($1, $2) RETURNING *',
                    [convertido, idpost]
                )
            }
        } else {
            throw new Error();
        }
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar post' });
    }
})

app.delete('/post/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM post WHERE id_post = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'post não encontrado' });
        }
        res.json({ message: 'post deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar post' });
    }
})

app.listen(3000, () => console.log('Server rodando em http://localhost:3000\n'))