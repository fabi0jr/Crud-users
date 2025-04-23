# 🧠 API CRUD de Usuários com NestJS

Uma API RESTful completa para gerenciamento de usuários construída com NestJS, TypeORM e MySQL. O projeto implementa as operações CRUD com validações, documentação Swagger e boas práticas de estruturação em módulos.

## ✨ Funcionalidades

- 🔐 CRUD completo de usuários (Criar, Listar, Buscar por ID, Atualizar e Deletar)
- ✅ Validação de dados com **class-validator**
- 📝 Documentação com **Swagger**
- 🔒 Criptografia de senhas com **bcrypt**
- 🧩 UUID como identificador único
- ⚙️ Configuração via **.env**
- 🌐 Suporte a **CORS**

## 🚀 Tecnologias

- **NestJS** – Framework progressivo para aplicações Node.js
- **TypeORM** – ORM para banco relacional
- **MySQL** – Banco de dados utilizado
- **Swagger** – Interface de documentação da API
- **Class-validator** – Validação de DTOs
- **Bcrypt** – Criptografia de senhas

## ⚙️ Pré-requisitos

- **Node.js**
- **MySQL**
- **npm**

## 🧰 Instalação

1. Clone o repositório:

    ```bash
    git clone <URL_DO_SEU_REPO>
    cd backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o arquivo `.env` com as suas credenciais do banco de dados:

    ```env
    DB_TYPE=mysql
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_DATABASE=nome_do_banco
    DB_SYNCHRONIZE=true
    ```

4. Inicie o servidor:

    ```bash
    npm run start:dev
    ```

A aplicação estará disponível em `http://localhost:3000`.

## 📚 Documentação da API

Disponível em: http://localhost:3000/swagger


## 📡 Endpoints

| Método  | Endpoint              | Descrição                       |
| ------- | --------------------- | ------------------------------- |
| GET     | `/api/users`          | Lista todos os usuários         |
| GET     | `/api/users/:id`      | Retorna um usuário por ID       |
| POST    | `/api/users`          | Cria um novo usuário            |
| PATCH   | `/api/users/:id`      | Atualiza os dados de um usuário |
| DELETE  | `/api/users/:id`      | Remove um usuário do sistema    |

## 🧪 Validações

- **Nome**: Apenas letras
- **Email**: Formato válido
- **Senha**: Mínimo 6 caracteres alfanuméricos
- Todos os campos são obrigatórios

## 🗂️ Estrutura do Projeto

```bash
src/
├── app.module.ts
├── main.ts
├── config/
│   └── database/
│       ├── database.module.ts
│       └── database-config.service.ts
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   ├── update-user.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
