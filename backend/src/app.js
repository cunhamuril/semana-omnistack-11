const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");

const routes = require("./routes");

const app = express();

/**
 * Se fosse para produção e não fosse uma API pública, o cors seria assim:
 *
 * app.use(cors({
 *  origin: 'http://meu-app.com'
 * }));
 */

app.use(cors());
app.use(express.json()); // Utilizar requisições no formato JSON
app.use(routes);
app.use(errors()); // Tratar erros de validações

module.exports = app;
