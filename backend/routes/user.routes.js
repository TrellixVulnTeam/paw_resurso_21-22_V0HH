const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.listAll);
router.post('/', userController.create);
router.get('/:id', userController.listOne);
router.put('/:id', userController.edit);
router.delete('/:id', userController.delete);

module.exports = router;