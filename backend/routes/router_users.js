const express = require('express');
const router = express.Router();
const controladorUsuarios = require('../controlador/controlador_usuarios');

router.get('/mostrar', controladorUsuarios);

module.exports = router;
