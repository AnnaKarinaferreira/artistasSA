async function connect() { //assíncrono: não retorna um valor imediatamente

    if(global.connection)
        return global.connection.connect;

    const {Pool} = require('pg');
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING
    })
    const usuario = await pool.connect();
    console.log("Criou o pool de conexão");

    const res = await usuario.query('select now()');
    console.log(res.rows[0]);
    usuario.release();

    global.connection = pool;
    return pool.connect();
}

connect();

async function selectCustomers(){
    const usuario = await connect();
    const res = await usuario.query("SELECT * FROM usuario");
    return res.rows;
}

async function selectCustomers(id){
    const usuario = await connect();
    const res = await usuario.query("SELECT * FROM usuario WHERE ID=" + id);
    return res.rows;
}


module.exports = {
    selectCustomers
}