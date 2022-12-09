const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

// routes post car frontend envoie le email et la pw
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;