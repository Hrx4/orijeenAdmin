const express = require('express');
const { createNotification, getNotification, deleteNotification, updateNotification } = require('../controllers/notificationControllers');
// const { createNotification, getNotification, deleteNotification, updateNotification } = require('../controllers/notificationControllers');

const router= express.Router()

router.route('/').post(createNotification).get(getNotification);
router.route('/:id').delete(deleteNotification).put(updateNotification);


module.exports = router