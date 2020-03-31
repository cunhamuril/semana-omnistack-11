const knex = require("knex");
const configuration = require("../../knexfile");

// Se a variável de ambiente for igual a test, a configuração vai ser de Test, senão development
const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

// Passar configuração de development na conexão
const connection = knex(config);

module.exports = connection;
