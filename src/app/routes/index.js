const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController')


router.get('/login', authController.login);
router.post('/auth', authController.auth);

/* router.post('/dependencies/create', dependencyController.create);
router.post('/dependencies/edit/:id', dependencyController.edit);
router.get('/dependencies/delete/:id', dependencyController.delete); */


module.exports = router;