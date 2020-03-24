const express = require("express");

const routes = require("./routes");

const app = express();

app.use(express.json()); // Utilizar requisições no formato JSON
app.use(routes);

const port = 3333;
app.listen(port, () => console.log(`Backend running on port ${port} :)`));
