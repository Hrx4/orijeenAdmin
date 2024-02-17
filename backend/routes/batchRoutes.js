const express = require('express');
const { cretaeBatch, getBatch, deleteBatch } = require('../controllers/batchControllers');

const router= express.Router()

router.route('/').post(cretaeBatch).get(getBatch);
router.route('/:id').delete(deleteBatch);


module.exports = router