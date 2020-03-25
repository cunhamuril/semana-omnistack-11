const express = require("express");
const cors = require("cors");

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

const port = 3333;
app.listen(port, () => console.log(`Backend running on port ${port} :)`));
