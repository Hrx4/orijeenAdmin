const asyncHandler = require("express-async-handler");
const teacherModels = require("../models/teacherModels");

const getTeacherDetails = asyncHandler(async(req , res) => {
    const { email , password} = req.body;
    const teacher = await teacherModels.find({teacherEmail : email})
    console.log( teacher);

    if(teacher===null) return res.status(404).json({message:"No user found"})
    if(teacher[0].teacherPassword!==password) return res.status(404).json({message:"Wrong username or password"})
     res.status(200).json({message:`Welcome , ${teacher[0].teacherName}` , data:teacher[0]})
});

module.exports = {getTeacherDetails}