require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes/routes');
require('./database/db');

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => {
  res.send("API rodando");
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

module.exports = app;   