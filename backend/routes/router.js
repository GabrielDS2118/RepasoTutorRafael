const express = require('express');
const router = express.Router();
const routerUsers = require('./router_users');
router.use('/usuarios', routerUsers);

module.exports = router;
