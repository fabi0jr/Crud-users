-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS crud_users;

-- Usar o banco de dados
USE crud_users;

-- Criar a tabela users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  matricula VARCHAR(255) UNIQUE,
  isActive TINYINT(1),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Criar o usuário e conceder permissões CRUD
CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'user123';
GRANT SELECT, INSERT, UPDATE, DELETE ON crud_users.* TO 'user'@'%';
FLUSH PRIVILEGES;