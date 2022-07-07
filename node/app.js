require('dotenv').config()

const Database = require('./src/config/database')
const NameService = require('./src/services/name-service')

const express = require('express');

const app = express();
app.use(express.json());
app.set('view engine', 'pug');

const port = process.env.PORT;

const instance = Database.getInstance()
const service = new NameService({ database: instance })

app
.route('/names')
.get(async function (req, res) {
  const names = await service.findAll()
  res.render('fullcycle', { names });
})
.post(async function (req, res) {
    await service.save({ name: req.body.name })
    res.status(200).send();
  })

app.listen(port, () => console.log(`Aplicação rodando na porta: ${port}`));