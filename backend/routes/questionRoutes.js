const express = require('express');
const { createQuestion, getQuestion, deleteQuestion, updateQuestion } = require('../controllers/questionControllers');
const router= express.Router()

router.route('/').post(createQuestion).get(getQuestion);
router.route('/:id').delete(deleteQuestion).put(updateQuestion);


module.exports = router