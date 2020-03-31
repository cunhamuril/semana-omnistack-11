const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  // Antes de cada teste, executar migrations do knex
  beforeEach(async () => {
    await connection.migrate.rollback(); // desfazer migration para não sobrecarregar o banco de dados
    await connection.migrate.latest();
  });

  // Executar depois de todos os testes. Destruir a conexão com o DB
  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      // .set('Authorization', 'dasd12s1') // Exemplo caso precise de Header
      .send({
        name: "Test",
        email: "test@test.com",
        whatsapp: "1100001111",
        city: "Test",
        uf: "TS"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
