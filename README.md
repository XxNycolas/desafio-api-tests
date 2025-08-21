# Desafio Técnico – Automação de Testes de API

Esse projeto foi feito para o desafio técnico de automação, usando *Node.js, **Jest* e *Supertest*.  
A ideia foi validar alguns endpoints da API [ServeRest](https://serverest.dev), cobrindo autenticação e o CRUD de usuários.

---

## 🚀 Tecnologias usadas
- Node.js
- Jest (framework de testes)
- Supertest (para chamadas HTTP)

---

## 📂 Estrutura do projeto

```bash
📦 desafio-api
 ┣ 📂 tests
 ┃ ┗ 📜 users.test.js       # Testes de CRUD de usuários
 ┣ 📂 utils
 ┃ ┣ 📜 api.js              # Configuração do Supertest
 ┃ ┗ 📜 auth.js             # Login admin e token JWT
 ┣ 📜 jest.config.js        # Configuração do Jest + Reporter
 ┣ 📜 package.json          # Dependências e scripts
 ┗ 📜 README.md             # Documentação
