import { randomUUID } from "crypto"; // Importa randomUUID do módulo crypto para gerar identificadores únicos.
import { sql } from './db.js'; // Importa a função sql de um arquivo local db.js, presumivelmente para interações com o banco de dados.

export class usuarioAll { // Declara e exporta uma classe chamada usuarioAll para gerenciamento de usuários.
  
  async listusuario() { // Define um método assíncrono para listar todos os usuários.
    const usuario = await sql`select * from usuario`; // Executa uma consulta SQL para selecionar todos os registros da tabela 'usuario'.
    return usuario; // Retorna o resultado da consulta.
  }

  async createusuario(usuario) { // Define um método assíncrono para criar um novo usuário.
    console.log('USER', usuario); // Registra o objeto usuario passado para fins de depuração. // FRANGO -- USER
    const id = randomUUID(); // Gera um identificador único para o novo usuário.
    console.log('id', id); // Registra o id gerado para depuração.
    const name = usuario.name; // Extrai o nome do objeto usuario.
    const password = usuario.password; // Extrai a senha do objeto usuario.
    const email = usuario.email; // Extrai a profissão do objeto usuario.
    const telefone = usuario.telefone; // Extrai a renda do objeto usuario.
    
    await sql`insert into usuario (id, name, password, email, telefone) // Executa uma instrução SQL de inserção para adicionar um novo usuário ao banco de dados.
    values (${id}, ${name}, ${password}, ${email}, ${telefone})` // Insere os valores nos campos correspondentes.
  }

  async updateusuario(id, usuario) { // Define um método assíncrono para atualizar um usuário existente pelo id.
    const name = usuario.name; // Extrai o nome atualizado do objeto usuario.
    const password = usuario.password; // Extrai a senha atualizada do objeto usuario.
    const email = usuario.email; // Extrai a profissão atualizada do objeto usuario.
    const telefone = usuario.telefone; // Extrai a renda atualizada do objeto usuario.

    await sql`update usuario set // Executa uma instrução SQL de atualização para modificar os detalhes do usuário.
        name = ${name}, // Define o campo nome para o valor atualizado.
        password = ${password}, // Define o campo senha para o valor atualizado.
        email = ${email}, // Define o campo profissão para o valor atualizado.
        telefone = ${telefone} // Define o campo renda para o valor atualizado.
        where id = ${id} // Especifica qual usuário atualizar com base no id fornecido.
    `;
  }

  async deleteusuario(id) { // Define um método assíncrono para excluir um usuário pelo id.
    await sql`delete from usuario where id = ${id}` // Executa uma instrução SQL de exclusão para remover o usuário do banco de dados com base no id fornecido.
  }

} // Fecha a definição da classe usuarioAll.