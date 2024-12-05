# Fastify Video Manager API

## Descrição
A **Fastify Video Manager API** é uma aplicação backend desenvolvida com **Fastify** para gerenciamento de vídeos. Suas funcionalidades incluem operações **CRUD** (Create, Read, Update, Delete) para gerenciar vídeos, além de oferecer suporte à persistência de dados em memória ou em um banco de dados PostgreSQL.

## Tecnologias Usadas

![Node.js](https://img.shields.io/badge/NODE.JS-339933?style=for-the-badge&logo=node.js&logoColor=white)![Fastify](https://img.shields.io/badge/FASTIFY-000000?style=for-the-badge&logo=fastify&logoColor=white)![PostgreSQL](https://img.shields.io/badge/POSTGRESQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)


## Funcionalidades
- **Gerenciamento de Vídeos**:
  - Listar vídeos com busca por título.
  - Adicionar novos vídeos.
  - Atualizar informações de vídeos.
  - Remover vídeos.
- **Persistência de Dados**:
  - Opção de armazenamento em memória (para testes e desenvolvimento).
  - Integração com banco de dados PostgreSQL para produção.

## Endpoints

### Vídeos:
- **GET /**: Verifica se a API está no ar.
- **GET /videos**: Lista todos os vídeos ou realiza buscas com base no título.
  - Query Params:
    - `search`: (opcional) Palavra-chave para buscar vídeos.
- **POST /video**: Cria um novo vídeo.
  - Body (JSON):
    ```json
    {
      "title": "Título do vídeo",
      "description": "Descrição do vídeo",
      "duration": 120
    }
    ```
- **PUT /video/:id**: Atualiza as informações de um vídeo.
  - Params:
    - `id`: ID do vídeo.
  - Body (JSON):
    ```json
    {
      "title": "Novo título",
      "description": "Nova descrição",
      "duration": 150
    }
    ```
- **DELETE /video/:id**: Remove um vídeo.
  - Params:
    - `id`: ID do vídeo.

## Estrutura do Projeto
- **server.js**: Arquivo principal com as rotas da API.
- **database-memory.js**: Implementação de um banco de dados em memória.
- **database-postgres.js**: Implementação para uso com PostgreSQL.
- **db.js**: Configuração do cliente PostgreSQL.
- **create-table.js**: Script para criar tabelas no NEON (PostgreSQL).

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/DanilloSouza03/fastify-video-manager-api.git
   cd fastify-video-manager-api

2. Instale as dependências:
   ```bash
   npm install
3. Configure as variáveis de ambiente no arquivo .env:
   ```bash
   PGHOST=localhost
   PGDATABASE=seu_banco
   PGUSER=seu_usuario
   PGPASSWORD=sua_senha
   ENDPOINT_ID=seu_endpoint
4. Inicie o servidor:
   ```bash
   npm start
<hr> 
<p align="center"> Desenvolvido por 👨‍💻 @dev.danillo </p>