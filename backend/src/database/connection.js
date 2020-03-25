const knex = require("knex");
const configuration = require("../../knexfile");

// Passar configuração de development na conexão
const connection = knex(configuration.development);

module.exports = connection;
