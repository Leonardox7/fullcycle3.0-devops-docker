require('dotenv').config()

const Database = require('./src/config/database')

const express = require('express');

const app = express();
app.use(express.json());
app.set('view engine', 'pug');

const port = process.env.PORT;
const instance = Database.getInstance()

app.get('/', async function (req, res) {
  const service = new NameService({ database: instance })
  const names = await service.findAll()
  res.render('fullcycle', { names: names });
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}`);
});
