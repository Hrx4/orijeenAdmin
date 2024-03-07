const asyncHandler = require("express-async-handler");
const questionModels = require("../models/questionModels");

const createQuestion = asyncHandler(async (req, res) => {
  const { name , position, classs , subject , course , title , description , photo } =
    req.body;

  const courseManagment = await questionModels.create({
    name , position, classs , subject , course , title , description , photo , answers : []
  });
  res.status(200).json(courseManagment);
});

const getQuestion = asyncHandler(async (req, res) => {
  const classManagment = await questionModels.find();
  res.status(200).json(classManagment);
});

const deleteQuestion = asyncHandler(async (req, res) => {
  const classManagment = await questionModels.findById(req.params.id);
  console.log(req.params.id);
  if (!classManagment) {
    res.status(404);
    throw new Error("class not found");
  }

  await questionModels.deleteOne({ _id: req.params.id });
  res.status(200).json(classManagment);
});

const updateQuestion = asyncHandler(async(req , res) => {

    const {answers } = req.body;

    const contact = await questionModels.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }
    console.log('====================================');
    console.log(answers);
    console.log('====================================');

    const updatedquestion = await questionModels.findByIdAndUpdate(
        req.params.id,
        {
            answers : [...contact.answers , answers]
        }
    )
    console.log('====================================');
    console.log([...contact.answers , answers]);
    console.log('====================================');

    res.status(201).json(contact);
})

module.exports = { createQuestion , getQuestion , deleteQuestion , updateQuestion};
