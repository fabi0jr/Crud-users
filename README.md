# 🚀 API de Gerenciamento de Usuários com NestJS

Este projeto é uma API RESTful utilizando o framework NestJS, com foco em um CRUD completo de usuários. Além disso, a aplicação conta com paginação, busca, validação, criptografia de senha e documentação com Swagger. O projeto foi pensado para ser simples de rodar, inclusive com suporte a Docker, facilitando a criação do banco de dados.

---

## ⚙️ Funcionalidades

- 🔐 **CRUD completo de usuários** (Criar, Ler, Atualizar, Deletar)
- ✅ **Validação de dados** com `class-validator`
- 🧾 **Documentação automática** com Swagger
- 📄 **Paginação** utilizando `nestjs-typeorm-paginate`
- 🔍 **Funcionalidade de Busca** integrada com paginação
- 🔒 **Criptografia de senhas** com `bcrypt`
- 🧩 **UUID** como identificador único
- 🌐 **Suporte a CORS**
- 🐳 **Banco de dados MySQL via Docker**
- 🌱 **Ambiente configurável por variáveis (.env)**

---

## 🧰 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) - Framework Node.js
- [TypeORM](https://typeorm.io/) - ORM para Node.js
- [MySQL](https://www.mysql.com/) - Banco de dados relacional
- [Swagger](https://swagger.io/) - Documentação de APIs
- [class-validator](https://github.com/typestack/class-validator) - Validações
- [nestjs-typeorm-paginate](https://www.npmjs.com/package/nestjs-typeorm-paginate) - Paginação
- [bcrypt](https://www.npmjs.com/package/bcrypt) - Hash de senhas
- [Docker](https://www.docker.com/) - Containerização

---

## 🧪 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://docs.docker.com/compose/)
- [npm](https://www.npmjs.com/)

---

## 🚀 Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/fabi0jr/Crud-users.git
cd Crud-users
```

### 2. Suba o banco de dados com Docker

```bash
### IMPORTANTE: Certifique-se de que o Docker Desktop esteja instalado e em execução

docker-compose up -d
```

Isso criará um container MySQL com as configurações adequadas.

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie a aplicação

```bash
npm start
```

---

## 🌐 Acesso à Aplicação

A API estará disponível em:

```
http://localhost:3000/api/users
```

---

## 🧾 Documentação da API

Acesse a documentação Swagger em:

```
http://localhost:3000/swagger
```

---

## 📚 Endpoints

| Método | Endpoint                   | Descrição                    |
|--------|----------------------------|------------------------------|
| GET    | /api/user                  | Listar todos os usuários     |
| GET    | /api/user/:id              | Obter um usuário por ID      |
| POST   | /api/user                  | Criar um novo usuário        |
| PATCH  | /api/user/:id              | Atualizar um usuário         |
| DELETE | /api/user/:id              | Remover um usuário           |

---

## 🔍 Busca com Paginação

Você pode realizar buscas por nome e combinar com paginação:

```http
GET /api/user?search=João&page=1&limit=10
```

| Parâmetro | Descrição                             |
|-----------|----------------------------------------|
| search    | Termo para buscar por nome             |
| page      | Número da página (default: 1)          |
| limit     | Quantidade de registros por página     |

---

## ✅ Validações

Todos os campos são obrigatórios e seguem estas regras:

- **nome**: Apenas letras
- **email**: Formato de email válido
- **matricula**: Apenas números
- **senha**: Alfanumérica com pelo menos 6 caracteres

---

## 📁 Estrutura do Projeto

```
src/
├── app.module.ts
├── main.ts
├── config/
│   └── database/
│       ├── database-config.service.ts
│       └── database.module.ts
├── common/
│   └── dto/
│       └── pagination-query.dto.ts
└── users/
    ├── dto/
    │   ├── create-user.dto.ts
    │   ├── update-user.dto.ts
    │   └── search-user.dto.ts
    ├── entities/
    │   └── user.entity.ts
    ├── users.controller.ts
    ├── users.module.ts
    └── users.service.ts
```

---

## 📝 Observação sobre o .env

Para facilitar a execução por avaliadores/testadores, o projeto já inclui um arquivo `.env` com as variáveis configuradas. Assim, não há necessidade de criar um manualmente.

Caso queira configurar por conta própria, o conteúdo padrão é:

```env
DB_TYPE=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=user
DB_PASSWORD=user123
DB_DATABASE=crud_users
DB_SYNCHRONIZE=true
```

---