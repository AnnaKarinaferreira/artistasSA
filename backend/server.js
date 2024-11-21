
import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { usuarioAll } from './database-postgres.js'

const server = fastify();
const databasePostgres = new usuarioAll;

// CORS
server.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
})

// ENDPOINTS (CRUD):

// CREATE
server.post('/usuario', async (request, reply) => {
    const body = request.body;
    console.log(body);

    let error = {}

    if(!body.name){
        error.name = 'Faltou o nome'
    }

    if(!body.password){
        error.password = 'Faltou a senha'
    }

    if(!body.email){
        error.email = 'Faltou a email'
    }

    if(!body.telefone){
        error.telefone = 'Faltou os telefone'
    }

    if(body.name && body.password && body.email && body.telefone){
        await databasePostgres.createusuario(body);
        return reply.status(201).send("Fez bom");
    } else {
        return reply.status(400).send(error);
    }
    
})

// READE
server.get('/usuario', async () => {
    const users = await databasePostgres.listusuario();
    return users;
});

// UPDATE
server.put('/usuario/:id', async (request, reply) => {
    const userID = request.params.id;
    const body = request.body;

    let error = {}

    if(!body.name){
        error.name = 'Faltou o nome'
    }

    if(!body.password){
        error.password = 'Faltou a senha'
    }

    if(!body.email){
        error.email = 'Faltou a email'
    }

    if(!body.telefone){
        error.telefone = 'Faltou os telefone'
    }

    if(!userID) {
        error.userID = 'Faltou o ID'
    }

    if(body.name && body.password && body.email && body.telefone  && userID){
        await databasePostgres.updateusuario(userID, body);
        return reply.status(201).send("Fez bom");
    } else {
        return reply.status(400).send(error);
    }

})

// DELETE
server.delete('/usuario/:id', async (request, reply) => {
    const userID = request.params.id;
    await databasePostgres.deleteusuario(userID);

    return reply.status(204).send();
})


server.listen({
    port: 3333
});
