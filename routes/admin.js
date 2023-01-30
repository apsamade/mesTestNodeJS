const path = require('path');
const express = require('express');
const loginController = require('../controller/admin');
const router = express.Router();


router.get('/inscription', loginController.getAddLogin)
router.post('/inscription', loginController.postAddLogin)

router.get('/connexion', loginController.getConnexion)
router.post('/connexion', loginController.postConnexion)

router.get('/edit', loginController.getEdit)

router.get('/admin-profil', loginController.getAdminProfil)

module.exports = router;
