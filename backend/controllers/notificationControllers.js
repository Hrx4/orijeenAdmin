const asyncHandler = require('express-async-handler');
const notificationModel = require('../models/notificationModel');
// const noticeModels = require('../models/noticeModels');

const createNotification = asyncHandler(async(req , res) => {
    const {notificationTitle , notificationDetails , notificationLink} = req.body;
 
    const notification = await notificationModel.create({
        notificationTitle , notificationDetails , notificationLink
    })
    res.status(200).json(notification);

})


const getNotification = asyncHandler(async(req , res) => {
    let notifications = await notificationModel.find()
    notifications = notifications.reverse();
    res.status(200).json(notifications);
})

const deleteNotification = asyncHandler(async(req , res) => {
    const notification = await notificationModel.findById(req.params.id);
    console.log(req.params.id)
    if(!notification){
        res.status(404);
        throw new Error("notification not found");
    }

    await notificationModel.deleteOne({_id:req.params.id})
    res.status(200).json(notification);
})


const updateNotification = asyncHandler(async(req , res) => {

    const {notificationTitle , notificationDetails , notificationLink} = req.body

    const notification = await notificationModel.findById(req.params.id);
    if(!notification){
        res.status(404);
        throw new Error("notification not found")
    }

    const updatednotification = await notificationModel.findByIdAndUpdate(
        req.params.id,
        {
            notificationTitle : notificationTitle , 
            notificationDetails : notificationDetails,
            notificationLink : notificationLink
        }
    )

    res.status(201).json(notification);
})




module.exports = {createNotification , deleteNotification , updateNotification , getNotification}