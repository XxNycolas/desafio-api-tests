const request = require("supertest");

// base URL da API
const api = request("https://serverest.dev");

/**
 * Faz login de administrador e retorna o token JWT
 */
async function loginAdmin() {
  const res = await api.post("/login").send({
    email: "admin@qa.com",
    password: "admin123"
  });

  if (res.status !== 200) {
    throw new Error("Falha no login do admin");
  }

  return res.body.authorization; // retorna o token para ser usado nos testes
}

module.exports = { loginAdmin };