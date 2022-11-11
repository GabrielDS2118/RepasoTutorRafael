const express = require('express');
const app = express();

const miconexion = require('./conexion');

app.listen(2321, () => {
  console.log('Server ok');
});

app.get('/', (req, res) => {
  res.send('<h1>Servidor funcionando en el puerto 2321</h1>');
});

//importar rutas
const routes = require('./routes/router');
app.use('/api', routes);
