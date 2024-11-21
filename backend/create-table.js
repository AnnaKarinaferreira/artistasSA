import { sql } from './db.js' //importando o database
//tabela de usuarios
sql`
  CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY,
    biografia VARCHAR(500),
    telefone VARCHAR(14) NOT NULL,
    email VARCHAR(30) NOT NULL UNIQUE,
    outras_redes_usuario VARCHAR(60) NOT NULL,
    nome VARCHAR(50) NOT NULL,
    interesses VARCHAR(200),
    senha VARCHAR(9) NOT NULL,  
    name_user VARCHAR(15) NOT NULL UNIQUE
);

`.then(() => {
  console.log('tabela criada'); //aqui verifica se esta rodando a tabela, se foi criada
})
//tabela de posts
sql`
  id_post INT PRIMARY KEY ,
  titulo VARCHAR(30) NOT NULL,
  filtro_anti_ia BOOLEAN DEFAULT FALSE,
  filtro_conteudo BOOLEAN DEFAULT FALSE,
  tags VARCHAR(300),
  materias VARCHAR(500),
  id_usuario INT,
  foto BYTEA,  
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

`.then(() => {
  console.log('tabela criada'); //aqui verifica se esta rodando a tabela, se foi criada
})