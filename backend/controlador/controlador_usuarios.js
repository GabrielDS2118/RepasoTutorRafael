const express = require('express');
const router = express.Router();
const modeloUsuario = require('../modelo/model_users');

//Obtener usuarios
router.get('/mostrar', (req, res) => {
  // modeloUsuario.find([], (docs, err) => {
  //   if (!err) {
  //     res.send(docs);
  //   } else {
  //     res.send(err);
  //   }
  // });

  modeloUsuario.find();
});

module.exports = router;
