const asyncHandler = require('express-async-handler');
const teacherModels = require('../models/teacherModels');
const teacherPaymentModels = require('../models/teacherPaymentModels');

const createTeacher = asyncHandler(async(req , res) => {
    const {teacherName , teacherAge , teacherGender , teacherEducation , teacherAddress , teacherSalary , teacherDoj ,teacherSubject , teacherClass , teacherCourse,teacherEmail , teacherPassword  } = req.body;
    const studentCheck = await teacherModels.find({teacherEmail : teacherEmail})

    if (!studentCheck) {
        return res.status(404).json({message : "log"});
        // throw new Error("teacher  found");
      }
    const contact = await teacherModels.create({
        teacherName , teacherAge ,  teacherGender , teacherEducation , teacherAddress , teacherSalary , teacherDoj ,teacherSubject , teacherClass , teacherCourse ,teacherEmail , teacherPassword 
    })
    const d = new Date(teacherDoj);

    const teacherPayment = await teacherPaymentModels.create({
        paymentId: contact._id,
        teacherCourse: teacherCourse,
        teacherEmail:teacherEmail , 
        teacherPassword :teacherPassword ,
        teacherName: teacherName,
        teacherSubject : teacherSubject,
        teacherClass : teacherClass,
        paymentMoney : teacherSalary,
        totalExpense : teacherSalary,
        lastExpenseMonth : d.getMonth(),
        lastExpenseDate : teacherDoj,
        paymentDetails:[
            {
                paymentMonth: d.getMonth(),
        paymentMoney: teacherSalary,
        paymentDate: teacherDoj,
        paidMonth: d.getMonth(),
        paidYear: d.getFullYear(),
        paymentYear: d.getFullYear(),
            }
        ]
    })
    res.status(200).json(contact);

})


const getTeacher = asyncHandler(async(req , res) => {
    const contacts = await teacherModels.find()
    res.status(200).json(contacts);
})

const deleteTeacher = asyncHandler(async(req , res) => {
    const contact = await teacherModels.findById(req.params.id);
    console.log(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    await teacherModels.deleteOne({_id:req.params.id})
    await teacherPaymentModels.deleteOne({paymentId : req.params.id})
    res.status(200).json(contact);
})


const updateTeacher = asyncHandler(async(req , res) => {

    const {teacherName , teacherAge , teacherGender , teacherEducation , teacherAddress , teacherSalary , teacherDoj ,teacherSubject , teacherClass , teacherCourse ,teacherEmail , teacherPassword  } = req.body;

    const contact = await teacherModels.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await teacherModels.findByIdAndUpdate(
        req.params.id,
        {
            teacherName : teacherName , 
            teacherAge : teacherAge, 
            teacherGender : teacherGender, 
            teacherEducation: teacherEducation , 
            teacherAddress : teacherAddress , 
            teacherSalary: teacherSalary, 
            teacherDoj : teacherDoj ,
            teacherSubject : teacherSubject, 
            teacherClass : teacherClass, 
            teacherCourse : teacherCourse
        }
    )

    res.status(201).json(contact);
})




const updatePayment = asyncHandler(async (req, res) => {
    const teacher = await teacherPaymentModels.find({ paymentId: req.params.id });
    const { paymentMonth, paymentYear } = req.body;
    console.log(teacher);
    const {
        paymentMoney ,
        totalExpense ,
        lastExpenseMonth ,
        paymentDetails
    } = teacher[0];
    
  
    var totalFee = paymentMoney;
    var varTotalExpense = totalExpense;
    var lastPaymentMoney = 0;
    
  
    const d = new Date();
    var paymentMonthArray = [];
    await paymentMonth.map((item, index) => {
      paymentMonthArray = [
        ...paymentMonthArray,
        {
          paymentMonth: item,
          paymentYear: paymentYear,
          paidMonth: d.getMonth(),
          paidYear: d.getFullYear(),
          paymentMoney: totalFee,
          paymentDate:  d.toISOString().split("T")[0],
        },
      ];
    });
  
    lastPaymentMoney = totalFee * paymentMonth.length;
    varTotalExpense += lastPaymentMoney;
    console.log("====================================");
    console.log(varTotalExpense, lastExpenseMonth);
    console.log("====================================");
    if (lastExpenseMonth === d.getMonth()) lastPaymentMoney += paymentMoney;
  
    const updatedPayment = await teacherPaymentModels.findOneAndUpdate(
      { paymentId: req.params.id },
      {
        
        lastExpenseDate: d.toISOString().split("T")[0],
        totalExpense: varTotalExpense,
        lastExpenseMonth: d.getMonth(),
        paymentDetails: paymentDetails.concat(paymentMonthArray),
      }
    );
    res.status(201).json(updatedPayment);
  });
   const getTeacherPayment = asyncHandler(async(req , res)=>{
    const teacher = await teacherPaymentModels.find({ paymentId: req.params.id });
    console.log(req.params.id);
    console.log(teacher);
    res.status(200).json(teacher);

   })


module.exports = {createTeacher , getTeacher  , deleteTeacher , updateTeacher , updatePayment , getTeacherPayment}