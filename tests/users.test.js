const api = require("./utils/api");

describe("Testes de Usuários", () => {
  it("Deve retornar lista de usuários", async () => {
    const response = await api.get("/users");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("Deve retornar um usuário específico", async () => {
    const response = await api.get("/users/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
  });

  it("Deve criar um novo usuário", async () => {
    const newUser = {
      name: "Nycolas QA",
      username: "nycolasqa",
      email: "nycolasqa@example.com"
    };

    const response = await api.post("/users").send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newUser);
  });

  it("Deve atualizar um usuário existente", async () => {
    const updatedUser = {
      name: "Nycolas QA Atualizado",
      username: "nycolasqa",
      email: "nycolasqa@example.com"
    };

    const response = await api.put("/users/1").send(updatedUser);
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedUser);
  });

  it("Deve deletar um usuário", async () => {
    const response = await api.delete("/users/1");
    expect(response.status).toBe(200);
  });
});