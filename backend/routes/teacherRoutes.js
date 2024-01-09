const express = require('express');
const { createTeacher, getTeacher, deleteTeacher, updateTeacher, getTeacherPayment, updatePayment } = require('../controllers/teacherControllers');
const { getTeacherDetails } = require('../controllers/teacherDetailscontrollers');

const router= express.Router()

router.route('/').post(createTeacher).get(getTeacher);
router.route('/:id').delete(deleteTeacher).put(updateTeacher).post(updatePayment);
router.route('/payment/:id').get(getTeacherPayment)
router.route('/details').post(getTeacherDetails)

module.exports = router