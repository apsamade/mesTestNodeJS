const express = require('express');
// const rootDir = require('../util/path');
// const path = require('path');
const loginController = require('../controller/logins');
const router = express.Router();

router.get('/', loginController.getAcceuil)

router.get('/profil', loginController.getLogin)

router.get('/profil/:idProfil', loginController.getProfil)


module.exports = router;
