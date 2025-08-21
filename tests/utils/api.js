const request = require("supertest");

// URL base da API
const api = request("http://jsonplaceholder.typicode.com");

// 👉 depois você troca pela URL real do desafio se precisar

module.exports = api;