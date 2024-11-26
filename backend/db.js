Claro! Aqui está o código comentado de uma forma mais natural e informal:

```javascript
async function connect() { // Função assíncrona para conectar ao banco de dados
    // Se já tivermos uma conexão global, não precisa conectar de novo
    if(global.connection)
        return global.connection.connect; // Retorna a conexão existente

    const {Pool} = require('pg'); // Importa o Pool do módulo pg para gerenciar conexões
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING // Configura a string de conexão do banco
    });

    const usuario = await pool.connect(); // Tenta conectar ao banco de dados
    console.log("Criou o pool de conexão"); // Informa que a conexão foi criada

    const res = await usuario.query('select now()'); // Executa uma consulta simples para pegar a hora atual
    console.log(res.rows[0]); // Mostra o resultado da consulta no console
    usuario.release(); // Libera a conexão para uso por outros processos

    global.connection = pool; // Armazena o pool de conexões na variável global
    return pool.connect(); // Retorna a conexão do pool
}

connect(); // Chama a função connect para iniciar a conexão

async function selectCustomers(){
    const usuario = await connect(); // Conecta ao banco de dados
    const res = await usuario.query("SELECT * FROM usuario"); // Seleciona todos os usuários
    return res.rows; // Retorna os resultados da consulta
}

async function selectCustomers(id){
    const usuario = await connect(); // Conecta novamente ao banco
    const res = await usuario.query("SELECT * FROM usuario WHERE ID=" + id); // Seleciona um usuário específico pelo ID
    return res.rows; // Retorna os resultados da consulta filtrada
}

// Exporta a função selectCustomers para que possa ser usada em outros módulos
module.exports = {
    selectCustomers
}
```

Dessa forma, as explicações estão mais casuais e parecem mais como notas pessoais do que um comentário técnico formal. Se precisar de algo mais, é só avisar!