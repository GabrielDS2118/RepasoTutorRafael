const express = require('express');
const app = express();

app.listen(2321, () => {
  console.log('Server ok');
});

app.get('/', (req, res) => {
  res.send('<h1>Servidor funcionando en el puerto 2321</h1>');
});
