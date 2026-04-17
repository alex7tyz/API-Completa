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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));

module.exports = app;   