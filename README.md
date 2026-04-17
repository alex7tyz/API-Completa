# 📝 API de Tarefas (Node.js + SQLite + JWT)

## 📌 Descrição

API RESTful para gerenciamento de tarefas com autenticação de usuários utilizando JWT.
Permite criar, listar, atualizar e deletar tarefas com suporte a filtros, ordenação e paginação.

---

## 🚀 Tecnologias utilizadas

* Node.js
* Express
* SQLite
* JWT (JSON Web Token)
* Postman (testes)

---

## 🔐 Autenticação

A API utiliza autenticação via JWT.

Após o login, é necessário enviar o token no header:

Authorization: Bearer SEU_TOKEN

---

## ⚙️ Instalação (rodar localmente)

```bash
npm install
```

---

## ▶️ Executar projeto

```bash
node src/app.js
```

---

## 🌍 Deploy

API disponível em:

https://SEU-APP.onrender.com

---

## 📬 Rotas da API

### 🔹 Registrar usuário

POST /register

Body:

```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

---

### 🔹 Login

POST /login

Body:

```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

Retorna:

* Token JWT

---

### 🔹 Criar tarefa

POST /tasks

Header:
Authorization: Bearer TOKEN

Body:

```json
{
  "title": "Minha tarefa"
}
```

---

### 🔹 Listar tarefas

GET /tasks

Header:
Authorization: Bearer TOKEN

---

## 📊 Funcionalidades avançadas

### ✅ Paginação

```bash
/tasks?page=1&limit=5
```

---

### ✅ Filtro

```bash
/tasks?completed=1
```

---

### ✅ Ordenação

```bash
/tasks?order=asc
/tasks?order=desc
```

---

### ✅ Consulta completa

```bash
/tasks?page=1&limit=5&completed=0&order=asc
```

---

### 🔹 Atualizar tarefa

PUT /tasks/:id

Header:
Authorization: Bearer TOKEN

Body:

```json
{
  "title": "Atualizada",
  "completed": 1
}
```

---

### 🔹 Deletar tarefa

DELETE /tasks/:id

Header:
Authorization: Bearer TOKEN

---

## 🔗 Relacionamentos (JOIN)

As tarefas são relacionadas com usuários.

Exemplo de resposta:

```json
{
  "id": 1,
  "title": "Estudar",
  "completed": 0,
  "user_id": 1,
  "email": "usuario@email.com"
}
```

---

## 🧪 Testes

Os testes foram realizados utilizando o Postman.

Arquivo da collection incluído no projeto.

---

## 📁 Estrutura do projeto

```
src/
 ├── controllers/
 ├── database/
 ├── middlewares/
 ├── routes/
 └── app.js
```

---

## ⚠️ Observações

* O arquivo `.env` não está incluído por segurança
* O banco SQLite é criado automaticamente
* O projeto utiliza porta dinâmica no deploy

---

## 👨‍💻 Autor

Alexander
