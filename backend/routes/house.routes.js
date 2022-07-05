const express = require('express');
const router = express.Router();
const houseCtrl = require('../controllers/house.controller');

router.get('/', houseCtrl.listAll);
router.post('/', houseCtrl.create);
router.get('/:id', houseCtrl.listOne);
router.put('/:id', houseCtrl.edit);
router.delete('/:id', houseCtrl.delete);

module.exports = router;