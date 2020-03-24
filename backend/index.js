const express = require("express");

const app = express();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end;
 * POST: Criar uma informação no back-end;
 * PUT: Alterar uma informação no back-end;
 * DELETE: Deletar uma informação no back-end.
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação);
 * Route Params: Parâmetros utilizados para identificar recursos;
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
 * NoSQL: MongoDB, CouchDB, etc.
 */

app.get("/users", (req, res) => {
  return res.json({
    evento: "Semana Omnistack 11.0",
    aluno: "Murilo Santos Cunha"
  });
});

const port = 3333;
app.listen(port, () => console.log(`Backend running on port ${port} :)`));
